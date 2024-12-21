"use client";
import React, { ChangeEvent, useId, useState } from "react";
import Return from "./Return";
import { BiCloudUpload } from "react-icons/bi";
import { MdOutlineAudiotrack } from "react-icons/md";
import { errorToast, successToast } from "@/providers/Toast";
import { ContentType, uploadMessage } from "@/utils/upload";
import { supabase } from "@/supabase/client";
import { useRouter } from "next/navigation";

const UploadSermon = () => {
  const audioId = useId();
  const thumbnailId = useId();
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "audio" as ContentType,
    file: null as File | null,
    thumbnail: null as File | null,
  });

  const handleButtonClick = () => {
    const fileInput = document.getElementById(audioId) as HTMLInputElement;
    fileInput?.click();
  };

  const handlethumbailClick = () => {
    const fileInput = document.getElementById(thumbnailId) as HTMLInputElement;
    fileInput?.click();
  };

  const handleFileChange =
    (field: "file" | "thumbnail") => (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setFormData((prevState) => ({ ...prevState, [field]: file }));
      }
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.file || !formData.type || !formData.title) {
      errorToast("Please fill in all required fields");
      return;
    }

    if (formData.file.size > 50 * 1024 * 1024) {
      // Example: limit to 50MB
      errorToast("Audio file is too large");
      return;
    }

    if (formData.thumbnail && formData.thumbnail.size > 5 * 1024 * 1024) {
      // Example: limit to 5MB for thumbnail
      errorToast("Thumbnail image is too large");
      return;
    }

    setUploading(true);
    try {
      // Upload main file
      const audioUrl = await uploadMessage(
        formData.file,
        formData.type === "video" ? "video" : "audio"
      );
      if (!audioUrl) throw new Error("Audio file upload failed");
      setAudioUrl(audioUrl);

      // Upload thumbnail if provided
      let thumbnailUrl = null;
      if (formData.thumbnail) {
        thumbnailUrl = await uploadMessage(formData.thumbnail, "thumbnail");
        if (!thumbnailUrl) throw new Error("Thumbnail upload failed");
      }

      // Create content item
      const { error } = await supabase.from("messages").insert({
        title: formData.title,
        description: formData.description,
        type: formData.type,
        file_url: audioUrl,
        thumbnail_url: thumbnailUrl,
      });

      if (error) throw error;

      successToast("Content uploaded successfully");
      router.push("/");
    } catch (error) {
      console.error("Upload error:", error);
      errorToast("Failed to upload content");
    } finally {
      setUploading(false);
    }
  };
  return (
    <section>
      <Return />

      <form onSubmit={handleSubmit} className="mt-24 p-3 space-y-5">
        <div>
          <input
            className="p-4 w-full md:max-w-[600px] text-[#00030A52] text-[14px] focus:outline-none border-[1.5px] border-light rounded-md my-1"
            type="text"
            name="title"
            placeholder="title"
            value={formData.title}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
        </div>

        <div>
          <textarea
            className="p-4 w-full md:max-w-[600px] text-[#00030A52] text-[14px] focus:outline-none border-[1.5px] border-light rounded-md my-1"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          ></textarea>
        </div>

        <div>
          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value as ContentType })
            }
            name="ContentType"
          >
            <option value="song">audio</option>
            <option value="video">video</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[18px] text-gray-600" htmlFor="audio">
            Please upload the audio file
          </label>
          <div>
            <input
              className="hidden"
              id={audioId}
              type="file"
              onChange={handleFileChange("file")}
              accept={formData.type === "video" ? "video/*" : "audio/*"}
            />
            <small
              onClick={handleButtonClick}
              className="flex items-center justify-center flex-col gap-5 gap-2 border border-light text-secondary text-[14px] font-medium capitalize p-3 w-full h-28 rounded-md relative"
            >
              <MdOutlineAudiotrack size={30} />
              {formData?.file ? (
                <span>{formData?.file.name}</span>
              ) : (
                <span> upload audio file</span>
              )}
            </small>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[18px] text-gray-600" htmlFor="flyer">
            Please upload the flyer design
          </label>
          <input
            className="hidden"
            id={thumbnailId}
            name="thumbnail"
            type="file"
            onChange={handleFileChange("thumbnail")}
            accept="image/*"
          />
          <small
            onClick={handlethumbailClick}
            className="flex items-center justify-center flex-col gap-5 gap-2 border border-light text-secondary text-[14px] font-medium capitalize p-3 w-full h-28 rounded-md"
          >
            <MdOutlineAudiotrack size={30} />
            {formData?.thumbnail ? (
              <span>{formData?.thumbnail.name}</span>
            ) : (
              <span> upload thumbnail file</span>
            )}
          </small>
        </div>

        <div>
          <button
            className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[12px] md:p-2 flex items-center justify-center gap-2"
            disabled={uploading}
          >
            <BiCloudUpload size={35} />
            {uploading ? "Uploading..." : "Upload Audio"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadSermon;

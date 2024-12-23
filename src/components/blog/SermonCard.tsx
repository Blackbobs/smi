"use client";
import { convertToNormalTime } from "@/lib/converTime";
import { Message } from "@/types/Message";
import { donwloadFile } from "@/utils/upload";
import Image from "next/image";
import React, { useState } from "react";
import { BiCloudDownload } from "react-icons/bi";

interface SermonCardProps {
  handleRoute?: () => void;
  message: Message;
}

const SermonCard: React.FC<SermonCardProps> = ({ handleRoute, message }) => {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const time = convertToNormalTime(message.created_at);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      console.log(123);

      const data = await donwloadFile(message.file_url, message.type);

      console.log(data);

      const url = URL.createObjectURL(data as Blob);
      setAudioUrl(url);

      const downloadLink = document.createElement("a");
      downloadLink.href = url;
      downloadLink.download = message.title || "sermon"; // Use the title as the default filename
      downloadLink.click();

      setIsLoading(false);
    } catch (error) {
      console.error("Error downloading audio:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="p-5 shadow-md shadow-gray-300 rounded-lg w-full md:max-w-[300px]">
      <div
        onClick={handleRoute}
        className="w-full h-full bg-light rounded-lg"
      >
        <img
          src={message.thumbnail_url}
          alt="thumbnail_url"
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
      <div className="py-2">
        <small>{time}</small>
        <h2 className="text-[20px] font-bold capitalize text-secondary md:text-[16px]">
          {message.title}
        </h2>
        <p className="text-[16px] font-medium text-gray-400 text-wrap w-full md:text-[12px]">
          {message.description}
        </p>
        <button
          onClick={handleDownload}
          className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[12px] md:p-2 flex items-center justify-center gap-2"
        >
          <BiCloudDownload size={35} />
          {isLoading ? <span>downloading</span> : <span>download song</span>}
        </button>
      </div>
    </article>
  );
};

export default SermonCard;

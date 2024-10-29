import React from "react";
import Return from "./Return";
import Input from "./Input";
import { BiCloudUpload } from "react-icons/bi";
import { MdOutlineAudiotrack } from "react-icons/md";

const UploadSermon = () => {
  return (
    <section>
      <Return />

      <form className="mt-24 p-3 space-y-5">
        <div>
          <Input name="title" placeholder="Message Title" />
        </div>

        <div className="space-y-2">
          <label className="text-[18px] text-gray-600" htmlFor="audio">
            Please upload the audio file
          </label>
          <div>
            <input className="hidden" name="audio" type="file" />
            <small className="flex items-center gap-2 bg-light text-secondary text-[14px] font-medium capitalize p-3 w-fit rounded-md">
              <MdOutlineAudiotrack size={30} />
              upload audio file
            </small>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[18px] text-gray-600" htmlFor="flyer">
            Please upload the flyer design
          </label>
          <input className="hidden" name="flyer" type="file" />
          <small className="flex items-center gap-2 bg-light text-secondary text-[14px] font-medium capitalize p-3 w-fit rounded-md">
              <MdOutlineAudiotrack size={30} />
              upload the flyer design
            </small>
        </div>

        <div>
          <label htmlFor="description" className="hidden"></label>
          <textarea
            className="p-4 w-full md:max-w-[600px] text-[#00030A52] text-[14px] focus:outline-none border-[1.5px] border-[#00030AA3] rounded-md my-1"
            name="description"
            cols={30}
            rows={7}
            placeholder="Decription"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="excerpts">Picture Excerpts</label>
          <input className="hidden" type="file" name="excerpts" />
          <small className="flex items-center gap-2 bg-light text-secondary text-[14px] font-medium capitalize p-3 w-fit rounded-md">
              <MdOutlineAudiotrack size={30} />
              upload picture excerpts
            </small>
        </div>
        <div className="p-3">
          <button className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[12px] md:p-2 flex items-center justify-center gap-2">
            <BiCloudUpload size={35} />
            upload sermon
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadSermon;

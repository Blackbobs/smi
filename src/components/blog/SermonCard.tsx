import React from "react";
import { BiCloudDownload } from "react-icons/bi";

interface SermonCardProps {
  handleRoute: () => void
}

const SermonCard = ({handleRoute}: SermonCardProps) => {
  return (
    <article onClick={handleRoute} className="p-5 shadow-md shadow-gray-300 rounded-lg w-full md:max-w-[300px]">
      <div className="w-full h-[250px] bg-light rounded-lg"></div>
      <div className="py-2">
        <small>5/12/2024</small>
        <h2 className="text-[20px] font-bold capitalize text-secondary md:text-[16px]">
          Title of the sermon
        </h2>
        <p className="text-[16px] font-medium text-gray-400 text-wrap w-full md:text-[12px]">
          Description
        </p>
        <button className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[12px] md:p-2 flex items-center justify-center gap-2">
          <BiCloudDownload size={35} />
          download sermon
        </button>
      </div>
    </article>
  );
};

export default SermonCard;

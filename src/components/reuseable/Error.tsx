import React from "react";
import { MdOutlineRefresh } from "react-icons/md";

const Error = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <button onClick={handleRefresh} className="cursor-pointer p-5 text-secondary">
      <MdOutlineRefresh size={40} />
      </button>
      <p className="text-lg text-secondary font-semibold leading-6">An error occured, please refresh the page</p>
    </div>
  );
};

export default Error;

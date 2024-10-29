import React from "react";
import Return from "../reuseable/Return";
import { BiCloudDownload } from "react-icons/bi";

const SermonDetails = () => {
  return (
    <section>
      <Return />

      <article>
        <div className="w-full h-[400px] bg-light rounded-lg"></div>
        <div className="p-3">
          <div className="flex items-center gap-3 py-3">
            <div className="h-20 w-20 rounded-full bg-light"></div>
            <div>
              <h2 className="capitalize text-[24px] text-gray-900 font-semibold">
                prophet Ayodeji stevens
              </h2>
            </div>
          </div>
          <div>
            <small className="text-[16px] font-medium">5/12/2024</small>
            <h2 className="text-[24px] leading-6 my-3 font-bold capitalize text-secondary md:text-[16px]">
              Title of the sermon
            </h2>
            <p className="text-[16px] font-medium leading-6 text-gray-400 text-wrap w-full md:text-[12px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              maxime doloribus placeat deleniti alias dolorem asperiores
              expedita natus unde aperiam eligendi omnis, soluta cumque
              obcaecati nihil et voluptate pariatur eos culpa reprehenderit
              sapiente ex sed laborum dignissimos. Facere itaque in magnam
              obcaecati consequatur illo sit deserunt tempore accusantium
              eligendi, laboriosam maiores aliquid dolore consectetur, natus
              delectus tempora impedit dolorem illum voluptatibus? Rerum iste
              pariatur facere doloribus vel corrupti laborum praesentium saepe
              voluptate quidem voluptatibus possimus, a quaerat et id libero
              repellendus, ut quia voluptates eaque adipisci sit! Quam modi
              illum quaerat, ab sint ipsa quia nobis eligendi quidem odio ad!
            </p>
          </div>
        </div>
        <div className="p-3">
          <button className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[12px] md:p-2 flex items-center justify-center gap-2">
            <BiCloudDownload size={35} />
            download sermon
          </button>
        </div>
      </article>
    </section>
  );
};

export default SermonDetails;

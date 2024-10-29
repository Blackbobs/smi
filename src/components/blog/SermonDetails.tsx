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
          <div className="flex items-center gap-3 py-2">
            <div className="h-16 w-16 rounded-full bg-light"></div>
            <div>
              <h2 className="capitalize text-[20px] text-gray-900 font-semibold">
                prophet Ayodeji stevens
              </h2>
            </div>
          </div>
          <div className="py-2">
            <small className="text-[14px] font-medium">5/12/2024</small>
            <h2 className="text-[22px] leading-6 my-3 font-bold capitalize text-secondary md:text-[16px]">
              Title of the sermon
            </h2>
            <p className="text-[14px] font-medium leading-6 text-gray-400 text-wrap w-full md:text-[12px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              fugiat commodi atque perferendis. Esse laboriosam odit enim quia
              doloribus at ab laudantium commodi reiciendis explicabo aperiam
              reprehenderit repellat quidem rerum, impedit ratione illum modi
              voluptatibus porro suscipit voluptas. Ad repudiandae corrupti
              culpa perspiciatis harum ut iusto maiores corporis illo, quod
              dolor, exercitationem deleniti temporibus et cum neque laborum
              autem, adipisci necessitatibus. Asperiores deserunt sint
              veritatis, reiciendis quisquam repudiandae porro aperiam amet, id
              eum ipsa voluptatem accusantium voluptas eos, assumenda excepturi
              quas ipsam error. Distinctio deserunt numquam vel magni maxime
              ipsum cumque officiis! Illo odit molestiae doloremque vel, ipsam
              expedita aut?
            </p>
          </div>

          <div className="p-3">
            <button className="bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[12px] md:p-2 flex items-center justify-center gap-2">
              <BiCloudDownload size={35} />
              download sermon
            </button>
          </div>

          <div className="flex flex-1 flex-wrap gap-5 items-center justify-center my-3">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <div key={index} className="w-28 h-28 bg-light rounded"></div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default SermonDetails;

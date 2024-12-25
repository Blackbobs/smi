"use client";
import SongsList from "@/components/blog/SongsList";
import Header from "@/components/navigation/Header";
import SideMenu from "@/components/navigation/SideMenu";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const pathname = usePathname();

  const showHeader = pathname === "/songs";

  return (
    <>
      {showHeader && (
        <>
          <div className="sticky top-0 left-0 right-0 h-fit">
            <Header setOpenSideMenu={setOpenSideMenu} />
          </div>
          {openSideMenu && (
            <div className="fixed z-50 top-0 left-0 right-0 h-full w-full bg-black bg-opacity-50 overflow-hidden">
              <SideMenu setOpenSideMenu={setOpenSideMenu} />
            </div>
          )}
        </>
      )}

      <div className="m-2">
        <SongsList />
      </div>
    </>
  );
};

export default page;

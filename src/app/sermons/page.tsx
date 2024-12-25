"use client";
import SermonsList from "@/components/blog/SermonsList";
import Header from "@/components/navigation/Header";
import SideMenu from "@/components/navigation/SideMenu";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Page = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const pathname = usePathname();

  const showHeader = pathname === "/sermons";

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
        <SermonsList />
      </div>
    </>
  );
};

export default Page;

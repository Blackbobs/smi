"use client";
import Header from "@/components/navigation/Header";
import SermonsList from "@/components/blog/SermonsList";
import SideMenu from "@/components/navigation/SideMenu";
import { useState } from "react";

export default function Home() {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <main className="relative">
      <div className="sticky top-0 left-0 right-0 h-fit">
        <Header setOpenSideMenu={setOpenSideMenu} />
      </div>
      {openSideMenu && (
        <div className="fixed z-50 top-0 left-0 right-0 h-full w-full bg-black bg-opacity-50 overflow-hidden">
          <SideMenu setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
      {/* <div className="fixed z-50 top-0 left-0 right-0 h-full w-full bg-black bg-opacity-50 overflow-hidden">
        <SideMenu setOpenSideMenu={setOpenSideMenu} />
      </div> */}
      <div className="m-2">
        <SermonsList />
      </div>
    </main>
  );
}

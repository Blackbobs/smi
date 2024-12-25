"use client";
import Header from "@/components/navigation/Header";
import SermonsList from "@/components/blog/SermonsList";
import SideMenu from "@/components/navigation/SideMenu";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Message } from "@/types/Message";
import Loader from "@/lib/Loader";
import Error from "@/components/reuseable/Error";
import { useRouter } from "next/navigation";
import { getMessages } from "@/utils/upload";
import SermonCard from "@/components/blog/SermonCard";

export default function Home() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const router = useRouter();

  const {
    data: messages,
    isLoading,
    error,
  } = useQuery<Message[]>({ queryKey: ["messages"], queryFn: getMessages });

  if (isLoading)
    return (
      <div className="h-[500px] flex items-center justify-center w-full">
        <Loader />
      </div>
    );

  if (error) {
    return (
      <div className="w-full flex items-center justify-center h-[500px]">
        <Error />
      </div>
    );
  }

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

      <div className="m-2">
        <section className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-5">
          {messages &&
            messages.map((message, idx) => (
              <SermonCard
                key={idx}
                message={message}
                handleRoute={() => router.push(`/${message.category}/${idx}`)}
              />
            ))}
        </section>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import Error from "@/components/reuseable/Error";
import Loader from "@/lib/Loader";
import { Message } from "@/types/Message";
import { getSongs } from "@/utils/upload";
import { useQuery } from "@tanstack/react-query";
import SermonCard from "./SermonCard";

const SongsList = () => {

  const {
    data: songs,
    isLoading,
    error,
  } = useQuery<Message[]>({ queryKey: ["songs"], queryFn: getSongs });

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
    <section className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-5">
      {songs &&
        songs.map((song, idx) => (
          <SermonCard
            key={idx}
            message={song}
            // handleRoute={() => router.push(`/songs/${idx}`)}
          />
        ))}
    </section>
  );
};

export default SongsList;

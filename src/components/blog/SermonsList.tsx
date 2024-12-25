"use client";
import React from "react";
import SermonCard from "./SermonCard";
import { getSermons } from "@/utils/upload";
import { Message } from "@/types/Message";
import { useQuery } from "@tanstack/react-query";
import Loader from "@/lib/Loader";
import Error from "../reuseable/Error";

const SermonsList = () => {
  const {
    data: messages,
    isLoading,
    error,
  } = useQuery<Message[]>({ queryKey: ["messages"], queryFn: getSermons });

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
      {messages && messages.length > 0 ? (
        messages.map((message: Message) => (
          <SermonCard
            key={message.id} // Assuming message has a unique `id`
            message={message}
            // handleRoute={() => router.push(`/sermons/${message.id}`)} // Using `message.id` for routing
          />
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-[500px]">
          <p className="font-medium text-lg text-secondary text-center">
            No sermons uploaded
          </p>
        </div>
      )}
    </section>
  );
};

export default SermonsList;

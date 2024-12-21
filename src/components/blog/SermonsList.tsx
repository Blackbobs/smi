'use client'
import React, { useEffect, useState } from "react";
import SermonCard from "./SermonCard";
import { useRouter } from "next/navigation";
import { getMessages } from "@/utils/upload";
import { Message } from "postcss";

const SermonsList = () => {
  const [messages, setMessages] = useState<Message[]>()
  const fetchMessages = async () => {
    const { data, error } = await getMessages();
    console.log(data, error);
    setMessages(data as Message[])
  };

  useEffect(() => {
    fetchMessages()
  }, [])

  const router = useRouter()
  return (
    <section className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-5">
      {messages && messages.map((message, idx) => (
        
        <SermonCard key={idx} message={message} handleRoute={() => router.push(`/sermons/${idx}`)}  />

      ))}
    </section>
  );
};

export default SermonsList;

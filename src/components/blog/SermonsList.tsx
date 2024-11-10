'use client'
import React from "react";
import SermonCard from "./SermonCard";
import { useRouter } from "next/navigation";

const SermonsList = () => {
  const router = useRouter()
  return (
    <section className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center gap-5">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
        
        // <div className="w-full" key={idx} onClick={() => router.push(`/sermons/${idx}`)}>
          <SermonCard key={idx} handleRoute={() => router.push(`/sermons/${idx}`)}  />
        // </div>

      ))}
    </section>
  );
};

export default SermonsList;

'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'
import { BiSolidShareAlt } from "react-icons/bi";

const Return = () => {
    const router = useRouter()
  return (
    <header className='fixed px-[5%] py-5 flex justify-between top-0 left-0 right-0 bg-white border-b border-b-gray-400 w-full text-[24px] items-center z-10'>
        <div>
        <RiArrowLeftLine size={25} onClick={()=> router.back()} />
        </div>
        <div>
        <BiSolidShareAlt size={25} />
        </div>
    </header>
  )
}

export default Return
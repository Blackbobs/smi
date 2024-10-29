'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RiArrowLeftLine, RiShare2Fill } from 'react-icons/ri'

const Return = () => {
    const router = useRouter()
  return (
    <header className='fixed px-[5%] py-5 flex justify-between top-0 left-0 right-0 bg-white border-b border-b-gray-400 w-full text-[24px] items-center z-10'>
        <div>
        <RiArrowLeftLine onClick={()=> router.back()} />
        </div>
        <div>
        <RiShare2Fill />
        </div>
    </header>
  )
}

export default Return
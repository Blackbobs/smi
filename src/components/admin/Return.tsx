'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'

const Return = () => {
    const router = useRouter()
  return (
    <header className='fixed px-[3%] py-3 flex justify-between top-0 left-0 right-0 bg-secondary border-b border-b-gray-400 w-full text-[24px] items-center z-10'>
    <div>
    <RiArrowLeftLine color='white' size={35} onClick={()=> router.back()} />
    </div>
</header>
  )
}

export default Return
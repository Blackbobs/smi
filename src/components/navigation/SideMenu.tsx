import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'
import { BiSolidBookOpen } from "react-icons/bi";
import { AiFillAudio } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { MdAdminPanelSettings } from "react-icons/md";

interface SideMenuProps {
  setOpenSideMenu: (open: boolean) => void
}

const SideMenu: React.FC<SideMenuProps> = ({setOpenSideMenu}) => {
    const handleCloseSideMenu = () => {
      setOpenSideMenu(false)
    }

  return (
    <aside className='h-full w-[80%] bg-white ml-auto'>
        <button className='m-3'>
        <IoClose onClick={handleCloseSideMenu} size={40} />
        </button>
        <div className='flex flex-col items-center pt-10 text-[28px] font-semibold space-y-5'>
        <small className='border-b border-gray-300 block w-full text-center p-2 flex items-center justify-center gap-2 text-secondary'>
          <BiSolidBookOpen size={30}/>
            <Link href={"/"}>Sermons</Link>
          </small>
          <small className='border-b border-gray-300 block w-full text-center p-2 flex items-center justify-center gap-2 text-secondary'>
            <AiFillAudio size={35}/>
            <Link href={"/"}>Songs</Link>
          </small>
          <small className='border-b border-gray-300 block w-full text-center p-2 flex items-center justify-center gap-2 text-secondary'>
            <RiArticleFill size={35}/>
            <Link href={"/"}>Articles</Link>
          </small>
          <small className='border-b border-gray-300 block w-full text-center p-2 flex items-center justify-center gap-2 text-secondary'>
            <MdAdminPanelSettings size={40}/>
            <Link href={"/admin"}>Admin</Link>
          </small>
        </div>
    </aside>
  )
}

export default SideMenu
import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'

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
        <small className='border-b border-gray-300 block w-full text-center p-2'>
            <Link className='hover:text-secondary' href={"/"}>Sermons</Link>
          </small>
          <small className='border-b border-gray-300 block w-full text-center p-2'>
            <Link className='hover:text-secondary' href={"/"}>Songs</Link>
          </small>
          <small className='border-b border-gray-300 block w-full text-center p-2'>
            <Link className='hover:text-secondary' href={"/"}>Articles</Link>
          </small>
        </div>
    </aside>
  )
}

export default SideMenu
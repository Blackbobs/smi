import React from 'react'

const SermonCard = () => {
  return (
    <article className='p-5 shadow-lg shadow-gray-300 rounded-lg w-full md:max-w-[300px]'>
        <div className='w-full h-[250px] bg-light rounded-lg'></div>
        <div className='py-2'>
          <h2 className='text-[26px] font-bold capitalize text-secondary md:text-[18px]'>Title of the sermon</h2>
          <p className='text-[20px] font-medium text-gray-400 text-wrap w-full md:text-[14px]'>Description</p>
          <button className='bg-secondary w-full p-3 text-[18px] text-white capitalize font-bold my-3 rounded-lg md:text-[14px] md:p-2'>download sermon</button>
        </div>
    </article>
  )
}

export default SermonCard
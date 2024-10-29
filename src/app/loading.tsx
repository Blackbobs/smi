import React from 'react'

const loading = () => {
  return (
    <div className='bg_overlay'>
      <div className='h-screen w-full flex flex-1 items-center justify-center'>
        <div className="loader"></div> 
      </div>
    </div>
  )
}

export default loading
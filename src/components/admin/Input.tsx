import React from 'react'

interface InputProps {
  placeholder: string;
  name: string;
  onChange: () => void
}

const Input = ({placeholder, name}: InputProps) => {
  return (
    <>
    <label htmlFor={name}></label>
  <input name={name} type="text" className='p-4 w-full md:max-w-[600px] text-[#00030A52] text-[14px] focus:outline-none border-[1.5px] border-light rounded-md my-1' placeholder={placeholder} />
    </>
  )
}

export default Input
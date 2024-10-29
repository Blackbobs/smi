'use client'
import React, { useState } from 'react'
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";

interface ControlledInputProps {
  type: 'email' | 'password';
  placeholder: string;
}

const ControlledInput: React.FC<ControlledInputProps> = ({type, placeholder}) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(prev =>!prev)

  }

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className='flex items-center gap-3 p-4 w-full md:max-w-[600px] border-[1.5px] border-[#00030AA3] rounded-md my-1'>
      <input autoComplete='off' className='flex-1 text-[#00030A52] text-[14px] focus:outline-none' type={inputType} placeholder={placeholder} />
      {type === 'password' && (
        showPassword ? (
          <PiEyeThin className='text-[#00030A52] cursor-pointer' size={20} onClick={handleShowPassword} />
        ) : (
          <PiEyeSlashThin className='text-[#00030A52] cursor-pointer' size={20} onClick={handleShowPassword} />
        )
      )}
    </div>
  )
}

export default ControlledInput
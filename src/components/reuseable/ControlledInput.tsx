'use client'
import { User } from '@/types/User';
import React, { useState } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi";

interface ControlledInputProps {
  type: 'email' | 'password';
  placeholder: string;
  errors: FieldErrors<User>;
  register: UseFormRegister<User>
}

const ControlledInput: React.FC<ControlledInputProps> = ({type, placeholder, errors, register}) => {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(prev =>!prev)

  }

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <>
    <div className='flex items-center gap-3 p-4 w-full md:max-w-[600px] border-[1.5px] border-[#00030AA3] rounded-md my-1'>
      <input  {...register(`${type}`)} autoComplete='off' className='flex-1 text-[#00030A52] text-[14px] focus:outline-none' type={inputType} placeholder={placeholder} />
      {type === 'password' && (
        showPassword ? (
          <PiEyeThin className='text-[#00030A52] cursor-pointer' size={20} onClick={handleShowPassword} />
        ) : (
          <PiEyeSlashThin className='text-[#00030A52] cursor-pointer' size={20} onClick={handleShowPassword} />
        )
      )}
    </div>
   
     {errors.email && (
      <small className="text-red-500">{`${errors.email.message}`}</small>
    )}
    {errors.password && (
      <small className="text-red-500">{`${errors.password.message}`}</small>
    )}
    </>
  )
}

export default ControlledInput
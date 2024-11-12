import Image from 'next/image'
import React, {useState} from 'react'
import { twMerge } from 'tailwind-merge';
import Loader from './Loader';

interface AuthButtonProp {
  icon?: string;
  text: string;
  textColor: string;
  bgColor: string;
  isSubmitting: boolean;
}


const Button: React.FC<AuthButtonProp> = ({icon, text, textColor, bgColor, isSubmitting}) => {
  // const [isLoading, setIsLoading] = useState(false)

  const buttonClasses = twMerge(
    `w-full text-center font-semibold tracking-wide leading-4 p-3 rounded-md flex items-center justify-center gap-3 cursor-pointer border border-[#00030A52] capitalize text-[20px] relative`,
    icon ? 'bg-transparent' : bgColor,
    textColor
  );

  return (
    <div className='w-full max-w-[500px] flex items-center justify-center my-2'>
   <button disabled={isSubmitting} className={buttonClasses}>
    {
      icon && (
      <Image src={icon} alt={text} priority width={20} height={20} /> 
      )
    }
    <div>
   {text}
   {
     isSubmitting && (
        <Loader />
     )
   }
    </div>
   </button>
    </div>
  )
}

export default Button
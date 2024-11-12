'use client'
import React from "react";
import ControlledInput from "../reuseable/ControlledInput";
import Button from "../reuseable/Button";
import Link from "next/link";
import { login } from "@/appwrite";
import { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from 'zod'
import { useForm } from 'react-hook-form';

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must at least be 6 characters'),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<User>({
    resolver: zodResolver(userSchema),
  });


  const handleLogin = async (data: User) => {
    try {
      console.log(123)
      const response = await login(data);
      console.log(response);
      reset();
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex items-center justify-center flex-1 h-full w-full">
      <div className="mt-20 w-full">
        <h2 className="text-[28px] font-bold text-center text-primary leading-8 my-3">
          Welcome back
        </h2>
        <p className="leading-5 text-center">
          Please login to access the dashboard
        </p>

        <form onSubmit={handleSubmit(handleLogin)} className="w-full p-5 space-y-10">
          <div className="w-full">
            <ControlledInput register={register} errors={errors} type="email" placeholder="email" />
          </div>
          <div className="w-full">
            <ControlledInput register={register} errors={errors} type="password" placeholder="password" />
          </div>
          <div className="w-full">
            <Button
              text="login"
              textColor="text-white"
              bgColor="bg-secondary"
               isSubmitting={isSubmitting}

            />
            <div className="text-center my-3">
            <small className="text-[16px] text-center">
              Go back to the <Link className="text-secondary" href={"/"}>home</Link> page
            </small>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

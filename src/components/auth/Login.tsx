import React from "react";
import ControlledInput from "../reuseable/ControlledInput";
import Button from "../reuseable/Button";
import Link from "next/link";

const Login = () => {
  return (
    <section className="flex items-center justify-center flex-1 h-full w-full">
      <div className="mt-20 w-full">
        <h2 className="text-[28px] font-bold text-center text-primary leading-8 my-3">
          Welcome back
        </h2>
        <p className="leading-5 text-center">
          Please login to access the dashboard
        </p>

        <form className="w-full p-5 space-y-10">
          <div className="w-full">
            <ControlledInput type="email" placeholder="email" />
          </div>
          <div className="w-full">
            <ControlledInput type="password" placeholder="password" />
          </div>
          <div className="w-full">
            <Button
              text="login"
              textColor="text-white"
              bgColor="bg-secondary"
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

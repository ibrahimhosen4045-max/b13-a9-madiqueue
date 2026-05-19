"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toast";
import styled from "styled-components";

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false)
  const router = useRouter();

  const {register, handleSubmit, formState:{errors}} = useForm()
    
    const handleLogin = async (data) => {
    const { email, name, photo, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message)
    }
    if (res) {
      toast.success("Signup successful")
      router.push('/login')
    }
  }
  const googleLogin = async () => {
      const data = await authClient.signIn.social({
        provider: "google",
      });
    
    }
  return (
    <div className="flex items-center justify-center">
      <Wrapper>
      <form onSubmit={handleSubmit(handleLogin)} className="form border border-gray-100 shadow-lg">

        {/* NAME */}
        <div className="form-group">
          <label>Name</label>

          <div className="inputForm">
            <svg
              height={20}
              viewBox="0 0 24 24"
              width={20}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21a8 8 0 0 0-16 0"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>

            <input
              type="text"
              {...register("name", { required: "Name field is required" })}
              className="input"
              placeholder="Enter your Name"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        {/* PHOTO URL */}
        <div className="form-group">
          <label>Photo URL</label>

          <div className="inputForm">
            <svg
              height={20}
              viewBox="0 0 24 24"
              width={20}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="M21 15l-5-5L5 21"></path>
            </svg>

            <input
              type="text"
              {...register("photo", { required: "Photo URL field is required" })}
              className="input"
              placeholder="Enter Photo URL"
            />
            
          </div>
          {errors.photo && <p className="text-red-500 text-xs">{errors.photo.message}</p>}
        </div>

        {/* EMAIL */}
        <div className="form-group">
          <label>Email</label>

          <div className="inputForm">
            <svg
              height={20}
              viewBox="0 0 32 32"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
            </svg>

            <input
              type="email"
              {...register("email", { required: "Email field is required" })}
              className="input"
              placeholder="Enter your Email"
            />
            
          </div>
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        {/* PASSWORD */}
        <div className="form-group">
          <label>Password</label>

          <div className="inputForm">
            <svg
              height={20}
              viewBox="-64 0 512 512"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>

            <input
              type= {showPass ? "text" : "password"}
              {...register("password", { required: "Password field is required" })}
              className="input"
              placeholder="Enter your Password"
            />
            
            <span
            onClick={()=> setShowPass(!showPass)}
            >
              {showPass ? <FaEye/> : <FaEyeSlash/>}
            </span>
          </div>
          {errors.password && <p className="text-red-500 text-xs ">{errors.password.message}</p>}
        </div>

        {/* REMEMBER */}
        <div className="flex-row">
          <div className="remember">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <span className="span">Forgot password?</span>
        </div>

        {/* SUBMIT */}
        <button className="button-submit">
          Sign Up
        </button>

        {/* LOGIN */}
        <p className="p">
          Already have an account?
          <Link href="/login">
            <span className="span"> Login</span>
          </Link>
        </p>

        {/* DIVIDER */}
        <p className="p line">Or With</p>

        {/* GOOGLE BUTTON */}
        <button onClick={googleLogin} className="btn google">
            <svg version="1.1" width={20} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
              <path style={{fill: '#FBBB00'}} d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
      	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
      	C103.821,274.792,107.225,292.797,113.47,309.408z" />
              <path style={{fill: '#518EF8'}} d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
      	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
      	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z" />
              <path style={{fill: '#28B446'}} d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
      	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
      	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z" />
              <path style={{fill: '#F14336'}} d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
      	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
      	C318.115,0,375.068,22.126,419.404,58.936z" />
            </svg>
            Google 
          </button>

      </form>
    </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  padding: 20px;

  .form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    background: white;
    padding: 30px;
    width: 100%;
    max-width: 450px;
    border-radius: 20px;
    font-family: sans-serif;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group label {
    color: #151717;
    font-weight: 600;
    font-size: 14px;
  }

  .inputForm {
    border: 1.5px solid #ecedec;
    border-radius: 10px;
    height: 52px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    transition: 0.2s ease-in-out;
    gap: 10px;
  }

  .inputForm:focus-within {
    border-color: #2d79f3;
  }

  .input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
  }

  .input::placeholder {
    color: #9ca3af;
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .remember {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .remember label {
    font-size: 14px;
  }

  .span {
    font-size: 14px;
    color: #2d79f3;
    cursor: pointer;
    font-weight: 500;
  }

  .button-submit {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 10px;
    background: #151717;
    color: white;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
  }

  .button-submit:hover {
    background: #252727;
  }

  .p {
    text-align: center;
    font-size: 14px;
    color: black;
  }

  .line {
    position: relative;
  }

  .line::before,
  .line::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 35%;
    height: 1px;
    background: #e5e7eb;
  }

  .line::before {
    left: 0;
  }

  .line::after {
    right: 0;
  }

  .btn {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    transition: 0.3s;
    font-weight: 500;
  }

  .btn:hover {
    border-color: #2d79f3;
  }

  @media (max-width: 640px) {
    .form {
      padding: 20px;
      border-radius: 16px;
    }
  }
`;

export default RegisterForm;
"use client";

import React from "react";
import styled from "styled-components";
import logo from '@/assets/logo.png'
import Image from "next/image";
import './style.css'
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { GoArrowUpRight } from "react-icons/go";

const Nabver = () => {
const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  const meno = <>
  <li className=" cursor-pointer hover:text-blue-500"><Link href={'/'}>Home</Link></li>
  <li className=" cursor-pointer hover:text-blue-500"><Link href={'/tutors'}>Tutors</Link></li>
  <li className=" cursor-pointer hover:text-blue-500"><Link href={'/addTutor'}>Add Tutor</Link></li>
  <li className=" cursor-pointer hover:text-blue-500"><Link href={'/myTutors'}>My Tutors</Link></li>
  <li className=" cursor-pointer hover:text-blue-500"><Link href={'/myBookingSession'}>My Booked Sessions</Link></li>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm overflow-hidden">
      <div className="flex justify-between items-center container w-11/12 mx-auto">
        
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {meno}
            </ul>
          </div>

          <a className="btn bg-white border-none hover:shadow-none">
            <Image src={logo} alt="source" width={230}/>
          </a>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap- font-medium ">
            {meno}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          
          {/* Search */}
          {/* <StyledWrapper>
            <div className="containers">
              <input
                type="text"
                name="text"
                className="input "
                required
                placeholder="Search..."
              />

              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <title>Search</title>

                  <path
                    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                  />

                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit={10}
                    strokeWidth={32}
                    d="M338.29 338.29L448 448"
                  />
                </svg>
              </div>
            </div>
          </StyledWrapper> */}

          {/* Cart */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 
                    2.293c-.63.63-.184 1.707.707 1.707H17m0 
                    0a2 2 0 100 4 2 2 0 000-4zm-8 
                    2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>

                <span className="text-info">Subtotal: $999</span>

                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-5">
            
            {isPending ? (<span className="loading loading-ring loading-md"></span>) : user ? (<div className='flex items-center gap-3'>
              
          <h2 className='font-semibold text-[#5C1621] hidden sm:flex'>Hello, {user?.name}</h2>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className='h-10.5 w-10.5 overflow-hidden rounded-full border-2 shadow-sm border-gray-300'>
          <Image className=' object-cover object-center ' src={user?.image || "image"} alt='user' width={41} height={31}/>
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <div  className='w-full flex justify-center'>
        <button onClick={async ()=> await authClient.signOut()} className=' group  btn px-10 bg-blue-500 text-white hover:text-blue-600 hover:bg-white transition duration-300'>
          LogOut
          <span className='p-1 bg-amber-400 group-hover:bg-[#5C1621] rounded-full group-hover:rotate-45 transition duration-300 '>
          <GoArrowUpRight className='text-xl text-white'/>
          </span>
        </button>
        </div>
      </ul>
            </div>
        </div>) : (<Link href={'/login'}>
              <Link href={'/login'}>
            <button className="animated-button ">
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span className="text pr-2 pl-2">LOGIN </span>
  <span className="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
            </button>
            </Link>
            </Link> )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .containers {
    position: relative;
    --size-button: 40px;
  }

  .input {
  padding-left: 25px;
  height: var(--size-button);
  font-size: 15px;
  border: 1px solid black;
  outline: none;
  width: var(--size-button);
  transition: all 0.3s ease;
  background-color: #fff;
  color: black;
  border-radius: 999px;
  cursor: pointer;
}

  .input:focus,
.input:not(:placeholder-shown) {
  width: 200px;
  cursor: text;
  padding-left: 40px;
  padding-right: 10px;
}

  .icon {
    position: absolute;
    width: var(--size-button);
    height: var(--size-button);
    top: 0;
    left: 0;
    padding: 10px;
    pointer-events: none;
    color: black;
  }

  .icon svg {
    width: 100%;
    height: 100%;
  }
`;

export default Nabver;
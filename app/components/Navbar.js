"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import mongoose from 'mongoose'
import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {
  const { data: session } =  useSession()
  const [showDropDown, setshowDropDown] = useState(false)
  
  return (

    <nav className='flex gap-1 bg-black text-white h-16 items-center z-10 justify-between p-2'>
      <Link href="/">
        <div className=' font-bold flex items-center gap-2 cursor-pointer'>
          <Image
            src="logo.svg"
            width={34}
            height={34}
            alt="Picture of the author"
          />
          Hath Bantao
        </div></Link>
      {/* <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><button>Login</button></li>
            <li><button>SignUp</button></li>
        </ul> */}
      <div className='relative'>
        {session && <>

          <button id="dropdownDefaultButton" onClick={() => { setshowDropDown(!showDropDown) }} className="
          backdrop-blur-sm bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          text-white mx-4 inline-flex items-center " type="button">Hello {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>


          <div id="dropdown" className={`${showDropDown ? "" : "hidden"} absolute left-[20px] z-10 bg-black/50 divide-y divide-gray-100 rounded-lg shadow-sm w-44 `}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
              </li>
              <li>
                <Link href="#" onClick={() => { signOut({ callbackUrl: '/' }) }} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>

        </>}

        {!session && <Link href={"/login"}>
          <button className="text-white backdrop-blur-sm bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " >Login</button></Link>}


      </div>
    </nav>

  )
}

export default Navbar

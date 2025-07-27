"use client"
import React,{useEffect} from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { SubmitForm } from '../actions/handleForm'

const page = () => {

  const { data: session, update } = useSession()
  const router =useRouter()
  
  useEffect(() => {
    if (!session) {
    router.push("/login")
  }
  
    
  }, [session])
  
  const updateSession = async (e)=>{
    await SubmitForm(e);
    await update({ name:e.get("newUserName")});
  }
 

  return (
    <div className='w-full' >
     
      <div className='w-[80%] mx-auto  my-8 '>
        <form action={(e)=>{updateSession(e)}} className='p-5 bg-white/5 backdrop-blur-[3px] rounded-3xl flex flex-col gap-5 justify-center items-center'>
            <h3 className='text-2xl font-bold'>Enter Your Data</h3>

            <input type="text" name="newUserName" id="UserName" placeholder='Enter New Username' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-white/50 focus:shadow-white/50' required/>


            <input type="text" name="newProfilePic" id="newProfilePic" placeholder='Enter New Profile pic url' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-white/50 focus:shadow-white/50' />


            <input type="text" name="newCoverPic" id="NewCoverPic" placeholder='Enter New Cover pic url' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-white/50 focus:shadow-white/50' />

            <button type='submit' className='p-2.5  bg-transparent appearance-none rounded-full border-1 border-netural w-fit outline-none transition-all duration-300 hover:shadow-2xl hover:border-white/50 hover:shadow-white/50'>Submit</button>
            
        </form>
      </div>

    </div>
  )
}

export default page

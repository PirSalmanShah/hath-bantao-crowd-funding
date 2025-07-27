"use client"
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { use } from 'react';
import { useRouter } from 'next/navigation'
import Image from 'next/image';





const UserName = ({ params }) => {
  const { data: session } = useSession()
  const param = use(params)
  const router = useRouter()
  useEffect(() => {
    if (!session) {
      router.push("/login")
    }


  }, [session,router])
  
  const [supporters, setSupporters] = useState([])
  const [value, setValue] = useState("")


  const sentPaymentDetail = async (e) => {
    // console.log(e.get("userName"))
    // console.log(e.get("amount"))
    // console.log(e.get("message"))
    const name =e.get("userName")
    const amount = e.get("amount")
    const message = e.get("message")

    router.push(`/checkout?name=${encodeURIComponent(name)}&amount=${amount}&message=${encodeURIComponent(message)}`)
    // await handlePayment(e)
    // setSupporters(prev=>[{name:e.get("userName"),amount:e.get("amount"),message:e.get("message")},...supporters])
  }


  useEffect(() => {
    const getdata = async () => {

      let response = await fetch("https://hath-bantao-crowd-funding.vercel.app/api/supportList")
      let b = await response.json()
      setSupporters(b)
      // console.log(supporters)
    }
    getdata()


  }, [router])


  useEffect(() => {
    console.log(supporters)
  }, [supporters])



  return (
    <div className='text-white'>

      <div className='w-full  relative '>
        <Image className='object-cover h-[340px] w-full' src="cover.gif" alt="" />

        <Image className='w-20 rounded-full  absolute left-[130px] sm:left-[380px] md:left-[47%] -bottom-[30px]' src="profile.gif" alt="" />

      </div>
      <div className='my-8'>
        <div className='text-center text-3xl font-bold'>{param.username}</div>
        <div className='text-neutral-500 text-center'>Creating Pixel drain</div>
        <div className='text-neutral-500 flex justify-center items-center gap-4'>
          <div>{`14,300 paid members`}</div>
          <div>{`57 posts`}</div>
          <div>{`$56,750/month`}</div>
        </div>
        <div className="payments flex flex-col sm:flex-row  sm:justify-center gap-3 w-full sm:w-[80%] sm:mx-auto my-3">
          <div className="supporters bg-white/5 backdrop-blur-[3px] w-full sm:w-[50%] rounded-lg p-2">
            <h3 className='text-2xl font-bold'>Supporters</h3>
            <ul className='overflow-y-auto'>
              {supporters.map((item,index)=>{
                return <li key={index}><span className='font-bold'>{`$ ${item.amount}`}</span> donation by <span className='font-bold'>{item.name}</span> message <span>{`"${item.message}"`}</span></li>
              })}
              
              
            </ul>
          </div>
          <div className="makePayment bg-white/5 backdrop-blur-[3px] w-full sm:w-[50%] rounded-lg p-2">
            <h3 className='text-2xl font-bold'>Supporters</h3>

            <form action={(e) => { sentPaymentDetail(e) }} className='my-9 flex flex-col gap-9 items-center'>
              <input required type="text" name="userName" id="makepayment" placeholder='Enter Name' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-white/50 focus:shadow-white/50' />

              <input type="text" name="message" id="makepayment" placeholder='Enter Message' className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-white/50 focus:shadow-white/50' />

              <input required type="text" name="amount" id="makepayment" placeholder='Enter Amount' onChange={(e) => { setValue(e.target.value) }} value={value} className='p-2.5 bg-transparent appearance-none rounded-full border-1 border-netural w-full outline-none transition-all duration-300 focus:shadow-2xl focus:border-white/50 focus:shadow-white/50' />
              <div className='flex gap-3 '>
                <button className='p-2.5  bg-transparent appearance-none rounded-full border-1 border-netural w-fit outline-none transition-all duration-300 hover:shadow-2xl hover:border-white/50 hover:shadow-white/50' onClick={() => { setValue(5) }}>{`Pay $5`}</button>
                <button className='p-2.5  bg-transparent appearance-none rounded-full border-1 border-netural w-fit outline-none transition-all duration-300 hover:shadow-2xl hover:border-white/50 hover:shadow-white/50' onClick={() => { setValue(10) }}>{`Pay $10`}</button>
                <button className='p-2.5  bg-transparent appearance-none rounded-full border-1 border-netural w-fit outline-none transition-all duration-300 hover:shadow-2xl hover:border-white/50 hover:shadow-white/50' onClick={() => { setValue(20) }}>{`Pay $20`}</button>
              </div>
              <button type='submit' className='p-2.5  bg-transparent appearance-none rounded-full border-1 border-netural w-24 outline-none transition-all duration-300 hover:shadow-2xl hover:border-white/50 hover:shadow-white/50'>Process</button>
            </form>
            {/* <Checkout/> */}


          </div>

        </div>
      </div>
    </div>
  )
}

export default UserName

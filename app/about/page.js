import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <div className="bg-black text-white min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-12">

        <h1 className="text-4xl font-bold text-center">About Hath Bantao</h1>

        <p className="text-lg text-center text-gray-300">
          <span className="font-semibold text-white">Hath Bantao</span> (ہاتھ بڑھاؤ) means "Extend Your Hand" — a platform where compassion meets action.
          We're building a space where anyone can help, and anyone can be helped.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Image src="logo.svg" width={400} alt="Helping hands" className="rounded-xl shadow-lg" />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-300">
              We believe in the power of community. Whether it's supporting a dream project, raising funds for an emergency, or helping someone rebuild,
              Hath Bantao connects people through generosity.
            </p>
            <p className="text-gray-300">
              Our mission is simple: remove barriers between those in need and those willing to help.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Why Hath Bantao?</h2>
            <p className="text-gray-300">
              Every person has the potential to make a difference. Hath Bantao makes it easy — no big gestures required. Just one helping hand at the right time can change everything.
            </p>
            <p className="text-gray-300">
              From individuals to communities, we're here to support dreams, dignity, and humanity.
            </p>
          </div>

          <Image src="community.svg" width={400} alt="Community support" className="rounded-xl shadow-lg" />
        </div>

        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold mb-4">Join Us</h3>
          <p className="text-gray-300 mb-6">
            Be part of a growing movement that believes in hope, help, and human connection. Start a campaign or support one — every small act matters.
          </p>
          <Link href={"/login"}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-xl transition duration-200">
            Start Helping
          </button></Link>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Page

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>

      <div className="flex justify-center flex-col my-9 items-center text-white gap-3 ">


        <div className="text-3xl font-bold  animate-pulse">
          Show Your Support
        </div>
        <p className="w-1/2 text-center">
          Hath Bantao is a community-driven crowdfunding platform built to bring people together for a greater cause. Whether it&apos;s helping someone in need, supporting a creative idea, or funding a social initiative, Hath Bantao makes it easy to join hands and make a real difference. Every contribution counts — because when hands come together, change begins.
        </p>
        <div>
         <Link href={"/login"}> <button type="button" className="text-white backdrop-blur-sm bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Support Now</button></Link>

         <Link href={"/about"}>
          <button type="button" className="text-white backdrop-blur-sm bg-gradient-to-r from-lime-400 via-lime-500 to-lime-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button></Link>
        </div>

      </div>
      <div className="bg-white/10 h-1"></div>
      <div className="text-white container mx-auto pb-32 pt-14 px-10">
        <h2 className="text-3xl font-bold text-center mb-14">Support the project you believe in</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Backers want to donate</p>
            <p className="text-center">People are ready to support your idea with donations</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Backers want to invest</p>
            <p className="text-center">Supporters are interested in funding your mission</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Backers want to collaborate</p>
            <p className="text-center">People want to partner and bring your vision to life</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[90%] h-[40vh] md:w-[50%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh] flex flex-col justify-center items-center text-center text-white space-y-4">
          <h3 className="text-2xl font-semibold">About Hath Bantao</h3>
          <p className="text-sm md:text-base px-2">
            <span className="font-bold">Hath Bantao</span> is more than just a crowdfunding platform — it&apos;s a community of believers, dreamers, and doers. We empower individuals to support causes, people, and projects they care about.
          </p>
          <p className="text-sm md:text-base px-2">
            Whether you&apos;re raising funds or lending a hand, <span className="font-bold">Hath Bantao</span> helps turn support into real impact. Join us in building a better tomorrow — one extended hand at a time.
          </p>
        </div>
      </div>
    </>
  );
}

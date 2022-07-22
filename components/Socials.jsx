import React from 'react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'

const Socials = () => {
    const { theme, setTheme } = useTheme()
  return (
    <div className="flex justify-around h-auto ">


    <div className="flex space-x-4 text-center pt-14">
      <span className="text-5xl">Lets connect </span>
      <span className="text-5xl text-gray-500">  Digitally! </span>
    </div>


    <div className="">
      <ul className="items-center font-semibold space-y-14 ">
      <li className="text-2xl">
          <span className="flex space-x-2">
            <div className="h-8"><Image alt="/" src={theme === 'light' ? '/linkedin_light.png' : '/linkedin_dark.png'} height="25" width="25" objectFit='cover' className="" /></div>
            <Link href={""}><a>LinkedIn</a></Link>
          </span>
        </li>
        <li className="text-2xl">
          <span className="flex space-x-2">
            <div className="h-8"><Image alt="/" src={theme === 'light' ? '/mail_light.png' : '/mail_dark.png'} height="25" width="25" objectFit='cover' className="" /></div>
            <Link href={""}><a>Email</a></Link>
          </span>
        </li>
        <li className="text-2xl">
          <span className="flex space-x-2">
            <div className="h-8"><Image alt="/" src={theme === 'light' ? '/instagram_light.png' : '/instagram_dark.png'} height="25" width="25" objectFit='cover' className="" /></div>
            <Link href={""}><a>Instagram</a></Link>
          </span>
        </li>




        

        
        <li className="text-2xl">
          <span className="flex space-x-2">
            <div className="h-8"><Image alt="" src={theme === 'light' ? '/phone_light.png' : '/phone_dark.png'} height="25" width="25" objectFit='cover' className="" /></div>
            <Link href={""}><a>Phone</a></Link>
          </span>
        </li>



        <li className="text-2xl">
          <span className="flex space-x-2">
            <div className="h-8"> <Image alt="" src={theme === 'light' ? '/youtube.png' : '/youtube_dark.png'} height="25" width="25" className="" objectFit='cover'/></div>
            <Link href={""}><a>Youtube</a></Link>
          </span>
        </li>

      </ul>
    </div>
  </div>
  )
}

export default Socials
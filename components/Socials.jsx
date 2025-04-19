import React from 'react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'

const Socials = () => {
  const { theme, setTheme } = useTheme()
  return (
    <section id='socials'>
      <div className='py-24'>
      <div className='w-full'>

        <div className='flex flex-col items-center justify-center md:flex-row md:justify-evenly '>

          <div className="py-10 md:justify-start md:items-start ">
            <span className="text-2xl md:text-5xl ">Lets connect </span>
            <span className="text-2xl text-gray-500 md:text-5xl">  Digitally! </span>
          </div>

          <div className="px-5 ">
            <ul className="flex md:flex-col md:items-start md:space-y-6">

              <li className="">
                <div className="flex flex-col items-center justify-center p-2 space-x-2 md:flex-row">

                    <div className='relative w-8 h-8 md:h-10 md:w-10'>
                       <Image alt="/" src={theme === 'light' ? '/linkedin_light.png' : '/linkedin_dark.png'} layout="fill" />
                    </div>
                    <Link href={""}>
                      <a>LinkedIn</a>
                    </Link>
                  
                </div>
              </li>
              <li className="">
                <div className="flex flex-col items-center justify-center p-2 space-x-2 md:flex-row">

                  <div className="relative w-8 h-8">
                  <Image alt="/" src={theme === 'light' ? '/mail_light.png' : '/mail_dark.png'} layout="fill" />
                    </div>
                    <Link href={""}>
                      <a>Email</a>
                    </Link>
                  
                </div>
              </li>
              <li className="">
                <div className="flex flex-col items-center justify-center p-2 space-x-2 md:flex-row">

                  <div className="relative w-8 h-8 md:h-10 md:w-10">
                  <Image alt="" src={theme === 'light' ? '/phone_light.png' : '/phone_dark.png'} layout="fill" />
                    </div>
                    <Link href={""}>
                      <a>Phone</a>
                    </Link>
                  
                </div>
              </li>
              <li className="">
                <div className="flex flex-col items-center justify-center p-2 space-x-2 md:flex-row">

                  <div className="relative w-8 h-8 md:h-10 md:w-10">
                  <Image alt="/" src={theme === 'light' ? '/instagram_light.png' : '/instagram_dark.png'} layout="fill" />
                    </div>
                    <Link href={""}>
                      <a>Instagram</a>
                    </Link>
                  
                </div>
              </li>
              <li className="">
                <div className="flex flex-col items-center justify-center p-2 space-x-2 md:flex-row">

                  <div className="relative w-8 h-8 md:h-10 md:w-10">
                  <Image alt="" src={theme === 'light' ? '/youtube.png' : '/youtube_dark.png'} layout="fill" />
                    </div>
                    <Link href={""}>
                      <a>Youtube</a>
                    </Link>
                  
                </div>
              </li>

            </ul>
          </div>


        </div>

      </div>



    </div>
    </section>
  )
}

export default Socials
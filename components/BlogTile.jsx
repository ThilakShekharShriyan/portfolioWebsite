import React from 'react'
import Link from "next/link"
import Image from "next/image"

const Blogtile = ({blog}) => {
    console.log(blog)
  return (
    <Link href={`/blog/${blog.postslog}`} key={blog.postslog} >
   <div className="grid px-5  w-8/12 transition-transform duration-500 ease-in-out transform dark:bg-[#cfd9e4] bg-[#454c55] rounded-lg shadow-xl place-items-center hover:-translate-y-2 hover:-translate-x-2">
     <div className="flex flex-col items-center justify-between">
       <div className="relative w-32 h-40 md:h-72 md:w-96">
       <Image alt="" src={blog.image.url} layout="fill"/>
       </div>
       <h1 className="text-xl font-semibold text-center text-white dark:text-black">{blog.title}</h1>
     </div>
   </div>
  </Link>
  )
}

export default Blogtile
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Acheivements = () => {
  return (
    <div>
      <div>
      <h1 >Carreer Path</h1>
      </div>


    
    <div className="grid w-full grid-cols-9 px-2 mx-auto max-w-7xl">
       
        <div className="w-full h-full col-span-4 ">
            <div className="w-full h-full p-2 bg-indigo-400 rounded-md md:pl-4">
                <h1 className="py-2 text-xl font-medium text-white">Title</h1>
                <p className="text-xs text-gray-100 sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
            </div>
        </div>
        <div className="relative flex items-center justify-center w-full h-full col-span-1">
            <div className="w-1 h-full bg-indigo-300"></div>
            <div className="absolute z-10 w-6 h-6 text-center text-white bg-indigo-400 rounded-full">1</div>
        </div>
        <div className="w-full h-full col-span-4"></div>


        <div className="w-full h-full col-span-4"></div>
        <div className="relative flex items-center justify-center w-full h-full col-span-1">
            <div className="w-1 h-full bg-indigo-300"></div>
            <div className="absolute z-10 w-6 h-6 text-center text-white bg-indigo-400 rounded-full">2</div>
        </div>
        <div className="w-full h-full col-span-4 ">
            <div className="w-full h-full p-2 bg-indigo-400 rounded-md md:pl-4">
                <h1 className="py-2 text-xl font-medium text-white">Title</h1>
                <p className="text-xs text-gray-100 sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
            </div>
        </div>

        <div className="w-full h-full col-span-4 ">
            <div className="w-full h-full p-2 bg-indigo-400 rounded-md md:pl-4">
                <h1 className="py-2 text-xl font-medium text-white">Title</h1>
                <p className="text-xs text-gray-100 sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
            </div>
        </div>
        <div className="relative flex items-center justify-center w-full h-full col-span-1">
            <div className="w-1 h-full bg-indigo-300"></div>
            <div className="absolute z-10 w-6 h-6 text-center text-white bg-indigo-400 rounded-full">3</div>
        </div>
        <div className="w-full h-full col-span-4"></div>
    </div>
    </div>
  )
}

export default Acheivements
import React from 'react'
import { useTheme } from "next-themes"
import Link from "next/link"

import Image from "next/image"
const CenterIntro = () => {
    return (
        <div className='px-10 py-24 m-10'>

            <div className='w-full'>
                <div className='flex flex-col items-center w-full md:flex-row md:justify-center'>
                    <div className="">
                        <div className="">
                            <span className="text-2xl font-semibold text-center md:font-normal md:text-5xl">Hi ! My name is Thilak Shriyan</span>

                        </div>
                        <span className="text-xl md:text-3xl">Computer Science Engineer</span>
                    </div>
                    <div className="flex items-center justify-between w-max">

                    <Image alt="" src="/some.png" height="300" width="300" className="self-end h-72"></Image>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default CenterIntro



import Image from "next/image"
import Link from "next/link"
import React from 'react'
import { useRouter } from 'next/router'
const Blog = () => {
    const router = useRouter()
    console.log(router.query);

    return (
        <div className="">


            <div className="space-y-5">

                <div className="grid w-full h-full py-8 place-items-center">
                    <h1 className="text-6xl font-semibold text-[#57DCBE]"> Nice and Descriptive Blog title</h1>

                </div>

                <div className="grid place-items-center ">
                    <div className="h-[35rem] w-[70rem] rounded-lg bg-slate-100">
                        Image Goes inside This
                    </div>

                </div>

                <h1 className="pl-40 text-[#60C879] ">
                    10th June 2022 
                </h1>
                <div className="px-40">
                    
                </div>
            </div>
        </div>
    )
}
export default Blog








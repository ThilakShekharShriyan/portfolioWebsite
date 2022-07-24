import React from 'react'

const Acheivements = () => {
    return (
        <div className='py-24 '>
            
            <div className='flex items-start w-full px-10 py-8'>
                <h1 className='text-2xl md:text-4xl'> Carreer Path Timeline</h1>
            </div>



            <div className="grid w-full grid-cols-9 px-2 mx-auto max-w-7xl">

                <div className="w-full h-full col-span-4 ">
                    <div className="w-full h-full p-2 rounded-md bg-indigo-400 dark:bg-[#b28bf5] md:pl-4">
                        <h1 className="px-5 text-xl font-medium ">Accenture</h1>
                        <p className="px-5 text-xs sm:text-sm">Summer Internship - Defying strategies, developing and delivering solutions that enable the collection, processing and management of information from one or more sources, and the subsequent delivery of information to audiences in support of key business processes.?</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center w-full h-full col-span-1">
                    <div className="w-1 h-full bg-indigo-400 dark:bg-[#b28bf5]"></div>
                    <div className="absolute z-10 w-6 h-6 text-center rounded-full bg-indigo-400 dark:bg-[#b28bf5]">1</div>
                </div>
                <div className="w-full h-full col-span-4"></div>


                <div className="w-full h-full col-span-4"></div>
                <div className="relative flex items-center justify-center w-full h-full col-span-1">
                    <div className="w-1 h-full bg-indigo-400 dark:bg-[#b28bf5]"></div>
                    <div className="absolute z-10 w-6 h-6 text-center rounded-full bg-indigo-400 dark:bg-[#b28bf5]">2</div>
                </div>
                <div className="w-full h-full col-span-4 ">
                    <div className="w-full h-full p-2 rounded-md bg-indigo-400 dark:bg-[#b28bf5] md:pl-4">
                        <h1 className="py-2 text-xl font-medium ">Title</h1>
                        <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                    </div>
                </div>

                <div className="w-full h-full col-span-4 ">
                    <div className="w-full h-full p-2 rounded-md bg-indigo-400 dark:bg-[#b28bf5] md:pl-4">
                        <h1 className="py-2 text-xl font-medium ">Title</h1>
                        <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center w-full h-full col-span-1">
                    <div className="w-1 h-full bg-indigo-400 dark:bg-[#b28bf5]"></div>
                    <div className="absolute z-10 w-6 h-6 text-center rounded-full bg-indigo-400 dark:bg-[#b28bf5]">3</div>
                </div>
                <div className="w-full h-full col-span-4"></div>
            </div>
        </div>
    )
}

export default Acheivements
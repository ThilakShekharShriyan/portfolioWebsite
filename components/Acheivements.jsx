import React from 'react'

const Acheivements = () => {
    return (
        <div className='py-24 h-screen '>
            
            <div className='flex items-start w-full px-10 py-8 space-x-2'>
                <span className='text-2xl font-semibold md:text-4xl dark:text-slate-300'>Career Path </span>
                <span className='text-2xl font-semibold text-slate-600 dark:text-white md:text-4xl'>Timeline</span>
            </div>



            <div className="grid w-full grid-cols-9 px-2 mx-auto max-w-7xl">

                <div className="w-full h-full col-span-4 ">
                    <div className="w-full h-full p-2 rounded-md bg-[#b28bf5] dark:bg-[#60C689] md:pl-4">
                        <h1 className="px-5 text-xl font-medium ">Accenture</h1>
                        <p className="px-5 text-xs sm:text-sm">Summer Internship - Defying strategies, developing and delivering solutions that enable the collection, processing and management of information from one or more sources, and the subsequent delivery of information to audiences in support of key business processes.</p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center w-full h-full col-span-1">
                    <div className="w-1 h-full bg-[#b28bf5] dark:bg-[#60C689]"></div>
                    <div className="absolute z-10 w-6 h-6 text-center rounded-full bg-[#b28bf5] dark:bg-[#60C689]">3</div>
                </div>
                <div className="w-full h-full col-span-4"></div>


                <div className="w-full h-full col-span-4"></div>
                <div className="relative flex items-center justify-center w-full h-full col-span-1">
                    <div className="w-1 h-full bg-[#b28bf5] dark:bg-[#60C689]"></div>
                    <div className="absolute z-10 w-6 h-6 text-center rounded-full bg-[#b28bf5] dark:bg-[#60C689]">2</div>
                </div>
                <div className="w-full h-full col-span-4 ">
                    <div className="w-full h-full p-2 rounded-md bg-[#b28bf5] dark:bg-[#60C689] md:pl-4">
                        <h1 className="py-2 text-xl font-medium ">PESU Venture Labs</h1>
                        <p className="text-xs sm:text-sm">
                        Software Development with Flutter for Mobile App Development . Worked for Teaminup , built multiple pages ,integrated with backend database mongoDB using graphQL.

                            </p>
                    </div>
                </div>

                <div className="w-full h-full col-span-4 ">
                    <div className="w-full h-full p-2 rounded-md bg-[#b28bf5] dark:bg-[#60C689] md:pl-4">
                        <h1 className="py-2 text-xl font-medium ">PESU Venture Labs</h1>
                        <p className="text-xs sm:text-sm">
                            <ul className='m-5'>
                                <li className='list-disc'>
                                Strategized on how companies can increase
growth , revenue, and exposure.
                                </li>
                                <li className='list-disc'>
                                Worked on building the social media presence of several startups .
                                </li>
                                <li className='list-disc'>
                                Improved Technical SEO of websites, in order to increase the ranking of their pages in search engines.
                                </li>
                                <li className='list-disc'>
                                Wrote python scripts to scrape the web and to collect data from multiple sites which was fed into ML models used by certain start-ups.
                                </li>
                            </ul>
                            </p>
                    </div>
                </div>
                <div className="relative flex items-center justify-center w-full h-full col-span-1">
                    <div className="w-1 h-full bg-[#b28bf5] dark:bg-[#60C689]"></div>
                    <div className="absolute z-10 w-6 h-6 text-center rounded-full bg-[#b28bf5] dark:bg-[#60C689]">1</div>
                </div>
                <div className="w-full h-full col-span-4"></div>
            </div>
        </div>
    )
}

export default Acheivements
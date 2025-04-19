import React from 'react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import Image from 'next/image'

const Projects = () => {
    const { theme, setTheme } = useTheme()
    return (
        <section id="projects" className="scroll-mt-24">
            <div className='w-full'>



                <div className='flex items-start px-10 py-8 space-x-2'>
                    <span className='text-3xl font-semibold md:text-4xl dark:text-slate-300'>Personal</span>
                    <span className='text-3xl font-semibold text-slate-600 dark:text-white md:text-4xl'>Projects</span>
                </div>

                <div className='p-5 m-5 border-4 rounded-lg'>
                    <div className='flex items-start space-x-2 '>
                        <span className='text-2xl font-semibold md:text-2xl dark:text-slate-300'>Research</span>
                        <span className='text-2xl font-semibold text-slate-600 dark:text-white md:text-2xl'>Project</span>
                    </div>
                    <div className='flex items-start space-x-2 '>
                        <span className='text-base font-semibold text-slate-600 dark:text-white md:text-2xl'>Decentralised Machine Learning using Swarm Learning </span>
                    </div>
                    <div className='flex flex-col items-center justify-center md:flex-row'>

                        <div className=''>
                            <div className="relative w-24 h-12 p-5 m-5 md:h-24 md:w-44">
                                <Image alt="" src={theme === 'light' ? '/hpLight.png' : '/hpDark.png'} layout="fill" />
                            </div>
                            <p>
                                Swarm Learning is a decentralized, privacy-preserving Machine Learning framework. This framework utilizes the computing power at, or near, the distributed data sources to run the Machine Learning algorithms that train the models. It uses the security of a blockchain platform to share learnings with peers in a safe and secure manner. In Swarm Learning, training of the model occurs at the edge, where data is most recent, and where prompt, data-driven decisions are mostly necessary.
                            </p>
                        </div>
                        <div>
                            <div className="relative w-64 h-64 m-5 md:h-[400px] md:w-[400px]">
                                <Image alt="" src="/Swarmlearning.png" layout="fill" />
                            </div>
                        </div>
                    </div>
                </div>




                <div className='flex flex-col justify-between md:space-x-5 md:flex-row '>
                    <div className='p-5 m-5 border-4 rounded-lg md:w-1/2'>
                        <div className='flex items-start space-x-2 '>
                            <span className='text-2xl font-semibold md:text-2xl dark:text-slate-300'>Image Caption </span>
                            <span className='text-2xl font-semibold text-slate-600 dark:text-white md:text-2xl'>Generator </span>
                        </div>
                        <div className='flex items-start space-x-2 '>
                            <span className='text-base font-semibold text-slate-600 dark:text-white md:text-xl'>Natural Language Processing</span>
                        </div>
                        <div className='flex flex-col items-center justify-center md:flex-row'>

                            <div className=''>

                                <p>
                                    Developed a Web Application using Flask and wrote a back end model using VGG19 based CNN. Vectorized the images and mapped them with their captions, thus helping predict captions for any given image.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className='p-5 m-5 border-4 rounded-lg md:w-1/2'>
                        <div className='flex items-start space-x-2 '>
                            <span className='text-2xl font-semibold md:text-2xl dark:text-slate-300'>Covid-19  </span>
                            <span className='text-2xl font-semibold text-slate-600 dark:text-white md:text-2xl'>Chest XRay Detection</span>
                        </div>
                        <div className='flex items-start space-x-2 '>
                            <span className='text-base font-semibold text-slate-600 dark:text-white md:text-xl'> Deep Learning</span>
                        </div>
                        <div className='flex flex-col items-center justify-center md:flex-row'>

                            <div className=''>

                                <p>
                                    Detecting the presence of covid19 in patients’ chest X-ray images, using VGG19 based CNN.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Projects
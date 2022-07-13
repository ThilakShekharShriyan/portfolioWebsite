import { useTheme } from "next-themes"
import Link from "next/link"


export default function Home() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="">

      <div className="sticky top-0 z-50 ">

        <nav className="flex items-center justify-between py-5 mx-10 ">
          <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}>
            <span className="text-3xl font-semibold cursor-pointer">Thilak Shriyan </span>
          </button>

          <ul className="flex space-x-10 ">
            <li className="text-lg cursor-pointer font- semibold">Work</li>
            <li className="text-lg cursor-pointer font- semibold">About</li>
            <Link href="/blog"> <li className="text-lg cursor-pointer font- semibold">Blog</li></Link>
            <li className="text-lg cursor-pointer font- semibold">Contact</li>
          </ul>
        </nav>
      </div>


      <div className="grid content-center h-[80vh] place-items-center m-10">
        <div className="grid  w-8/12 place-items-center  h-[50vh]">

          <div className="flex items-center justify-between w-max">
            <div className="self-center">
              <div className="w-[550px] ">
                <span className="text-5xl ">Hi ! My name is Thilak Shriyan</span>

              </div>
              <div className="">
                <span className="text-2xl">I am an </span>
                <span className="text-2xl">Engineer</span>
              </div>
            </div>
            <Image src="/some.png" className="self-end h-72"></Image>
          </div>

        </div>


      </div>
      


      <div className="m-10 ">
        <div className="text-center">
          <span className="text-5xl font-semibold text-gray-400 "> I am an Engineer </span>
          <span className="text-3xl font-semibold tracking-wider "> this is some information that im going to replace when i have something to put with.</span>
        </div>

      </div>
      <div className="h-96">

      </div>


      <div className="h-[30rem] flex justify-between">


        <div className="w-[60rem]   text-center ">
          <span className="text-5xl">Lets connect </span>
          <span className="text-5xl text-gray-500">Digitally! </span>
        </div>


        <div className=" pr-72">
          <ul className="items-center space-y-10 font-semibold ">
           
            <li className="text-2xl">
              <span className="flex space-x-2">
                <Image src={theme === 'light' ? 'linkedin_light.png' : 'linkedin_dark.png'} className="h-8 " />
                <Link>LinkedIn</Link>
              </span>
              </li>

            <li className="text-2xl">
              <span className="flex space-x-2">
                <Image src={theme === 'light' ? 'mail_light.png' : 'mail_dark.png'} className="h-8 " />
                <Link>Email</Link>
              </span>
            </li>
            <li className="text-2xl">
              <span className="flex space-x-2">
                <Image src={theme === 'light' ? 'phone_light.png' : 'phone_dark.png'} className="h-8 " />
                <Link>Phone</Link>
              </span>
            </li>
            
            <li className="text-2xl">
              <span className="flex space-x-2">
                <Image src={theme === 'light' ? 'instagram_light.png' : 'instagram_dark.png'} className="h-8 " />
                <Link>Instagram</Link>
              </span>
            </li>
            <li className="text-2xl">
              <span className="flex space-x-2">
                <Image src={theme === 'light' ? 'youtube.png' : 'youtube_dark.png'} className="h-8 " />
                <Link>Youtube</Link>
              </span>
            </li>

          </ul>
        </div>
      </div>


      <div className="sticky bottom-0 bg-slate-500">
        <footer className="flex flex-col items-center justify-center py-5 ">
          <span className="text-white">Footer for no reason</span>

        </footer>
      </div>





    </div>

  )
}

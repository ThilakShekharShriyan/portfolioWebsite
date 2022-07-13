import { useTheme } from "next-themes"
import Link from "next/link"


export default function Blog() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="">

      <div className="sticky top-0 z-50 ">

        <nav className="flex items-center justify-between py-5 mx-10 ">
          <Link href="/">
            <span className="text-3xl font-semibold cursor-pointer">Thilak Shriyan </span>
          </Link>



          <ul className="flex space-x-10 ">
            <li className="text-lg cursor-pointer font- semibold">Work</li>
            <li className="text-lg cursor-pointer font- semibold">About</li>
            <Link href="/blog"> <li className="text-lg cursor-pointer font- semibold">Blog</li></Link>
            <li className="text-lg cursor-pointer font- semibold">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-center">
        <div className="space-y-16 ">

        <div className="space-y-4">

<div className="h-[35rem] w-[65rem] bg-teal-200 rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out"></div>
</div>
<div className="space-y-4">

            <div className="h-[35rem] w-[65rem] bg-pink-200 rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out"></div>
          </div>
          <div className="space-y-4">

            <div className="h-[35rem] w-[65rem] bg-teal-300  rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out"></div>
          </div>
          <div className="space-y-4">

            <div className="h-[35rem] w-[65rem] bg-pink-200  rounded-lg shadow-xl transform  hover:-translate-y-2  hover:-translate-x-2  transition-transform duration-500 ease-in-out"></div>
          </div>
          

        </div>
      </div>
      <div className="h-96">

      </div>
      <div className="h-96">

      </div>
      
    </div>

  )
}

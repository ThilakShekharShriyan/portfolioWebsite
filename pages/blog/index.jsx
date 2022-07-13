import { useTheme } from "next-themes"


export default function Blog() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="">

      <div className="sticky top-0 z-50 ">

        <nav className="flex items-center justify-between py-5 mx-10 ">
          <a href="/">
            <span className="text-3xl font-semibold cursor-pointer">Thilak Shriyan </span>
          </a>



          <ul className="flex space-x-10 ">
            <li className="text-lg cursor-pointer font- semibold">Work</li>
            <li className="text-lg cursor-pointer font- semibold">About</li>
            <a href="/blog"> <li className="text-lg cursor-pointer font- semibold">Blog</li></a>
            <li className="text-lg cursor-pointer font- semibold">Contact</li>
          </ul>
        </nav>
      </div>
      <div class="flex justify-center">
        <div class=" space-y-16">

        <div class="space-y-4">

<div class="h-[35rem] w-[65rem] bg-teal-200 rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out"></div>
</div>
<div class="space-y-4">

            <div class="h-[35rem] w-[65rem] bg-pink-200 rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out"></div>
          </div>
          <div class="space-y-4">

            <div class="h-[35rem] w-[65rem] bg-teal-300  rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out"></div>
          </div>
          <div class="space-y-4">

            <div class="h-[35rem] w-[65rem] bg-pink-200  rounded-lg shadow-xl transform  hover:-translate-y-2  hover:-translate-x-2  transition-transform duration-500 ease-in-out"></div>
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

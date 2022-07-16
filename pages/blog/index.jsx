import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"


export default function Blog({ props }) {
  const { theme, setTheme } = useTheme()
  const post = [{ title: "Fire base Authentication", id: 1, url: "/firebaseidk.png" }, { title: "Google Foo Bar", id: 2, url: "/google_logo.png" }, { title: "Fresh", id: 3, url: "https://images.freeimages.com/images/large-previews/211/yellow-italian-car-1195655.jpg" }, { title: "Apple Products", id: 4, url: "https://images.freeimages.com/images/large-previews/c43/home-1257617.jpg" }]
  return (
    <div className="">

      <div className="sticky top-0 z-50 ">

        <nav className="flex items-center justify-between py-5 mx-10 ">
          <Link href="/">
            <a><span className="text-3xl font-semibold cursor-pointer">Thilak Shriyan </span></a>
          </Link>



          <ul className="flex space-x-10 ">
            <li className="text-lg cursor-pointer font- semibold">Work</li>
            <li className="text-lg cursor-pointer font- semibold">About</li>
            <li className="text-lg cursor-pointer font- semibold">Blog</li>
            <li className="text-lg cursor-pointer font- semibold">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="p-10 space-y-6">
        <h1 className="pl-10 text-5xl font-semibold">BLOGS</h1>
      </div>
      <div className="flex justify-center">
        <div className="space-y-16 ">

          {
            post.map((posts ) => (


              <Link href={`/blog/${posts.id}`} key={posts.id}>
                <div className="h-[35rem] w-[65rem] grid place-items-center  bg-slate-100 rounded-lg shadow-xl transform  hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-500 ease-in-out">
                  <div className="">

                    <Image src={posts.url} height="200px" width="500px" layout="fixed" className="rounded-lg" />
                    <h1 className="text-3xl font-semibold text-center">{posts.title}</h1>

                  </div>


                </div>
              </Link>
            ))
          }





        </div>
      </div>
      <div className="h-96">

      </div>
      <div className="h-96">

      </div>

    </div>

  )
}

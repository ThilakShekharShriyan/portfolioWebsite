import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"


export default function Blog({ props }) {
  const { theme, setTheme } = useTheme()
  const post = [{ title: "Fire base Authentication", id: 1, url: "/firebaseidk.png" }, { title: "Google Foo Bar", id: 2, url: "/google_logo.png" }, { title: "Fresh", id: 3, url: "https://images.freeimages.com/images/large-previews/211/yellow-italian-car-1195655.jpg" }, { title: "Apple Products", id: 4, url: "https://images.freeimages.com/images/large-previews/c43/home-1257617.jpg" }]
  return (
    <div className="">
      
      <div className="flex justify-start p-5">
        <h1 className="pl-10 text-xl text-white md:text-3xl md:pl-20">BLOGS</h1>
      </div>
      
      <div className="flex justify-center">
        <div className="w-10/12 px-5 space-y-16">

          {
            post.map((posts) => (


              <Link href={`/blog/${posts.id}`} key={posts.id}>
                <div className="grid px-5 transition-transform duration-500 ease-in-out transform bg-[#FF7597] rounded-lg shadow-xl place-items-center hover:-translate-y-2 hover:-translate-x-2">
                  <div className="flex flex-col items-center justify-center">

                    <div className="relative w-32 h-40 md:h-72 md:w-96">
                    <Image alt="" src={posts.url} layout="fill"/>
                    </div>
                    <h1 className="text-xl font-semibold text-center">{posts.title}</h1>

                  </div>


                </div>
              </Link>
            ))
          }





        </div>
      </div>


    </div>

  )
}

import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import { getBlogs } from "../../services"


export default function Blog({ blogs }) {
  const { theme, setTheme } = useTheme()
  console.log(blogs)

  
  return (
    <div className="">
      
      <div className="flex justify-start p-5">
        <h1 className="pl-10 text-xl text-white md:text-3xl md:pl-20">BLOGS</h1>
      </div>
     <div className="flex flex-col items-center justify-center space-y-10 ">
     {
      blogs.bLogs.map((blog)=>(
         <Link href={`/blog/${blog.id}`} key={blog.id} >
   <div className="grid px-5  w-8/12 transition-transform duration-500 ease-in-out transform bg-[#FF7597] rounded-lg shadow-xl place-items-center hover:-translate-y-2 hover:-translate-x-2">
     <div className="flex flex-col items-center justify-between">
       <div className="relative w-32 h-40 md:h-72 md:w-96">
       <Image alt="" src={blog.image.url} layout="fill"/>
       </div>
       <h1 className="text-xl font-semibold text-center">{blog.title}</h1>
     </div>
   </div>
  </Link>
      ))
     }
     </div>

      
    </div>

  )
}


export async function getStaticProps(){
  const blogs = (await getBlogs()) || []

  return {
    props : {blogs}
  }
}






// blogs.map((blog) => (
    
  
//    ))
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import { getBlogs } from "../../services"
import Blogtile from "../../components/blogTile"




export default function Blog({ blogs }) {
  const { theme, setTheme } = useTheme()
  console.log(blogs)

  
  return (
    <div className="">
      
      <div className="flex justify-start p-5">
        <h1 className="pl-10 text-xl md:text-3xl md:pl-20">BLOGS</h1>
      </div>
     <div className="flex flex-col items-center justify-center space-y-10 ">
     {
      blogs.bLogs.map((blog , index)=>(
        
         <Blogtile blog={blog} key={index} />
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
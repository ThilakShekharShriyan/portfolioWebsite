import Image from "next/image";
import Link from "next/link";

const BlogTile = () => {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll bg-[#f8fafc] dark:bg-[#0a0a0a]">

      {/* Center Profile Section */}
      <section className="w-full h-screen flex flex-col items-center justify-center snap-start relative">
        <div className="relative w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden mb-6 shadow-lg">
          <Image src="/profile.jpg" alt="Thilak" layout="fill" objectFit="cover" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Hi, I'm Thilak 👋
          <br />
          Welcome to my Digital Garden 🌱
        </h2>
        <Link href="/resume.pdf" download>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold mt-4">
            Download Resume
          </button>
        </Link>
      </section>
    </div>
  );
};

export default BlogTile;

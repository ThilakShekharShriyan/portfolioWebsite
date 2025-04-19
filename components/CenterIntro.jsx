import React from "react";
import Image from "next/image";
import Link from "next/link";

const CenterIntro = () => {
  return (
    <section className="relative snap-start h-screen w-full overflow-hidden">
      {/* Fullscreen Background Image */}
      <Image
        src="/DSCF3010.JPEG"
        alt="Thilak Shriyan"
        priority
        className="z-0"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-40 z-10" />
      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hi! I'm Thilak Shriyan</h1>
        <p className="text-xl md:text-2xl mt-3">Computer Science Engineer</p>

        <Link href="/resume.pdf" download legacyBehavior>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg transition-all duration-300">
            Download Resume
          </button>
        </Link>
      </div>
      {/* Sticky Bottom Icon */}
      {/* <Link href="/" className="fixed bottom-4 right-4 z-50">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-800">
        <Image
          src="/some.png"
          href ="/"
          alt="Profile icon"
          layout="fill"
          objectFit="cover"
        />
        </div>
      </Link> */}
      {/* Sticky Bottom Icon */}
      <Link href="/" legacyBehavior>
      <div className="fixed bottom-4 right-4 w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg border-2 border-white dark:border-gray-800 z-50">
        <Image
          src="/some.png"
          href ="/"
          alt="Profile icon"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      </Link>
    </section>
  );
};

export default CenterIntro;

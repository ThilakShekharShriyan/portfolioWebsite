import { useTheme } from "next-themes"
import Link from "next/link"

import Image from "next/image"
import { mountains } from "../public/instagram_dark.png"
import Acheivements from "../components/Acheivements"
import Socials from "../components/Socials"

import CenterIntro from "../components/CenterIntro"
import FrontpageDescription from "../components/FrontpageDescription"

export default function Home({ props }) {
  const { theme, setTheme } = useTheme()
  return (
    <div className="antialiased">

      <CenterIntro/>
      <FrontpageDescription/>
      <Acheivements />
      <Socials/>

    </div>

  )
}

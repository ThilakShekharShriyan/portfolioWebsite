import React from 'react'
import Footer from './Footer'

import { NavigationBar } from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow">{children}</main>

    </div>
  )
}

export default Layout
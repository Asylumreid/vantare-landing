"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/image/vantareLogo.png" 
            alt="Vantare Logo" 
            width={40} 
            height={40} 
            className="brightness-0 invert"
          />
          <span className="text-2xl font-bold text-white">
            Vantare
          </span>
        </Link>
        <div className="space-x-6">
          <NavLink href="#mission" isScrolled={isScrolled}>Mission</NavLink>
          <NavLink href="#features" isScrolled={isScrolled}>Features</NavLink>
          <Button 
            size="sm" 
            variant="default"
            className={`bg-orange-600 hover:bg-orange-700 text-white`}
            asChild
          >
            <Link href="https://sg.shp.ee/8gXMZVf" target="_blank">Buy Now</Link>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium hover:text-orange-500 transition-colors ${
        isScrolled ? 'text-gray-300' : 'text-white'
      }`}
    >
      {children}
    </Link>
  )
}
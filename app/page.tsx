"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"

export default function LandingPage() {
  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => link.addEventListener('click', smoothScroll))

    return () => links.forEach(link => link.removeEventListener('click', smoothScroll))
  }, [])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#111' }}>
      <Navbar />

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 text-center">
          <motion.h1 
            className="text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Vantare
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button size="lg" variant="default" asChild>
              <Link href="https://sg.shp.ee/8gXMZVf" target="_blank">Buy Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>
          <motion.p 
            className="text-xl text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            At Vantare, we strive to innovate and inspire. Our mission is to provide cutting-edge solutions that empower individuals and businesses to reach their full potential.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose Vantare
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Innovation" 
              description="We're at the forefront of technology, constantly pushing boundaries."
              delay={0}
            />
            <FeatureCard 
              title="Quality" 
              description="Our products are crafted with the utmost attention to detail and quality."
              delay={0.2}
            />
            <FeatureCard 
              title="Support" 
              description="We offer unparalleled customer support to ensure your success."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="buy-now" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="default" asChild>
              <Link href="https://sg.shp.ee/8gXMZVf" target="_blank">Buy Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, description, delay }: { title: string; description: string; delay: number }) {
  return (
    <motion.div 
      className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}


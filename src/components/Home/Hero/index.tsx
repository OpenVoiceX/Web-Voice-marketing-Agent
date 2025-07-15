'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import CardSlider from './slider'

const Hero = () => {
  useEffect(() => {
    // No dynamic state, keeping useEffect for potential future use
  }, [])

  const leftAnimation = {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  const rightAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-5 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
              <Image
                src="/images/icons/icon-Services.svg"
                alt="Voice AI Icon"
                width={40}
                height={40}
              />
              <p className="text-white sm:text-28 text-18 mb-0">
                Voice AI <span className="text-primary">Assistant</span>
              </p>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Create and Deploy <span className="text-primary">Voice Agents</span> for your{' '}
              <span className="text-primary">Business</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Link
                href="/signup"
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
              >
                Create Agent
              </Link>
              <Link
                href="/documentation"
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
              >
                Learn More
              </Link>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
              <Link 
                href="https://github.com/your-repo" 
                target="_blank"
                className="flex items-center bg-[#0D1117] hover:bg-[#161B22] transition-colors duration-300 rounded-lg px-6 py-3"
              >
                <svg className="w-8 h-8 text-white mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[#6E7681] text-xs">View Project on</div>
                  <div className="text-white font-semibold text-xl">GitHub</div>
                </div>
              </Link>
              <Link 
                href="/documentation#api" 
                className="flex items-center bg-[#0D1117] hover:bg-[#161B22] transition-colors duration-300 rounded-lg px-6 py-3"
              >
                <svg className="w-8 h-8 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[#6E7681] text-xs">Try Our</div>
                  <div className="text-white font-semibold text-xl">Voice API</div>
                </div>
              </Link>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-7 lg:block hidden"
          >
            <div className="ml-20 -mr-64">
              <Image
                src="/images/hero/mobile-Photoroom-Photoroom.png" // Updated to use the provided image
                alt="Banner"
                width={1150}
                height={1150}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className="absolute w-50 h-50 bg-linear-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  )
}

export default Hero
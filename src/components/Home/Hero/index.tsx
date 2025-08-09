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
            <div className="flex items-center md:justify-start justify-center gap-6 mt-8">
              <Link 
                href="https://github.com/OpenVoiceX/DialogWeaver" 
                target="_blank"
                className="bg-primary hover:bg-primary/90 transition-colors duration-300 text-darkmode font-semibold px-6 py-3 rounded-lg text-lg"
              >
                DialogWeaver
              </Link>
              <Link 
                href="https://github.com/OpenVoiceX/Voice-Marketing-Agent" 
                target="_blank"
                className="border border-primary text-primary hover:bg-primary hover:text-darkmode transition-colors duration-300 font-semibold px-6 py-3 rounded-lg text-lg"
              >
                Voice Marketing Agent
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
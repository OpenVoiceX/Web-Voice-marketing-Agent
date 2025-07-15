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
                src="/images/icons/icon-bag.svg"
                alt="icon"
                width={40}
                height={40}
              />
              <p className="text-white sm:text-28 text-18 mb-0">
                Crypto On The <span className="text-primary">Go</span>
              </p>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Buy and Sell <span className="text-primary">Crypto</span> of your{' '}
              <span className="text-primary">choice</span>!
            </h1>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <button
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50"
              >
                Buy Crypto
              </button>
              <button
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-2 px-7"
              >
                Sell Crypto
              </button>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src="/images/hero/playstore.png"
                  alt="Play Store"
                  width={240}
                  height={70}
                />
              </Link>
              <Link href="#" className="hover:scale-110 duration-300">
                <Image
                  src="/images/hero/applestore.png"
                  alt="App Store"
                  width={240}
                  height={70}
                />
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
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      svg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11C9 12.6569 10.3431 14 12 14Z" fill="#4B5EFC"/>
          <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 16V20" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M15 20H9" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      text: 'Voice Agent Consulting',
    },
    {
      svg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 12H4" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 8H8" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 4H12" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 8H16" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 12H20" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 20V4" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      text: 'Voice Agent Solutions',
    },
    {
      svg: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V18" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 12H18" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 9H15" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 15H15" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      text: 'Custom Voice Development',
    },
  ]

  return (
    <section className="md:pt-28" id="work">
      <div className="container px-4 mx-auto lg:max-w-[1200px] px-4">
        <div ref={ref} className="grid grid-cols-12 items-center">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-28 text-18 text-white">
              Work with <span className="text-primary">us</span>
            </p>
            <h2 className="sm:text-40 text-30 text-white lg:w-full md:w-[70%] font-medium">
              Successfully launch your voice agent project.
            </h2>
            <div className="grid md:grid-cols-2 gap-7 mt-11">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="px-5 py-5 bg-light_grey/30 rounded-full">
                    {service.svg}
                  </div>
                  <p className="text-24 text-muted">{service.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src="/images/work/image.png"
                alt="Voice Agent Project"
                width={450} // Increased from 300 to 450
                height={319} // Increased from 213 to 319
                sizes="(max-width: 768px) 100vw, 450px" // Updated sizes prop
                style={{ maxWidth: '450px', height: 'auto' }} // Updated style prop
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work
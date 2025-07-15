'use client'
import Image from 'next/image'
import { timelineData } from '@/app/api/data'
import { motion } from 'framer-motion'

const TimeLine = () => {
  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Voice Agent <span className="text-primary">Timeline</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
              We guide you through every step of building your voice agent
              solution.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src="/images/timeline/ChatGPT Image Jul 14, 2025, 09_05_55 PM (1)-Photoroom.png"
                  alt="Voice Agent Timeline"
                  width={610}
                  height={500}
                  className="w-60% mx-auto"
                />
              </div>
              <div className="absolute lg:top-20 top-16 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Concept Design</h5>
                  <p className="text-18 text-muted/60">
                    Define the voice agent purpose and features
                  </p>
                </div>
                <div className="bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.38 9.38 11.5 12 11.5C14.62 11.5 16.75 9.38 16.75 6.75C16.75 4.13 14.62 2 12 2ZM12 9.5C10.34 9.5 8.75 7.91 8.75 6.25C8.75 4.59 10.34 3 12 3C13.66 3 15.25 4.59 15.25 6.25C15.25 7.91 13.66 9.5 12 9.5Z" fill="#4B5EFC"/>
                    <path d="M20.5 19C20.5 15.96 17.04 13.5 13 13.5C12.54 13.5 12.09 13.53 11.65 13.59C13.58 14.41 15 16.24 15 18.25V19C15 19.55 15.45 20 16 20H20C20.55 20 20.5 19.55 20.5 19Z" fill="#4B5EFC"/>
                    <path d="M8 13.5C3.96 13.5 0.5 15.96 0.5 19V20C0.5 20.55 0.95 21 1.5 21H8C8.55 21 9 20.55 9 20V18.25C9 16.24 10.42 14.41 12.35 13.59C11.91 13.53 11.46 13.5 11 13.5C9.89 13.5 8.82 13.67 7.82 13.95C8.38 13.65 8.74 13.5 8 13.5Z" fill="#4B5EFC"/>
                  </svg>
                </div>
              </div>
              <div className="absolute lg:top-20 top-16 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey/45 backdrop-blur-xs p-6 h-fit rounded-full">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11C9 12.6569 10.3431 14 12 14Z" fill="#4B5EFC"/>
                    <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 18V22" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Voice Training</h5>
                  <p className="text-18 text-muted/60">
                    Train the agent with natural language models
                  </p>
                </div>
              </div>
              <div className="absolute lg:bottom-24 bottom-16 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Testing</h5>
                  <p className="text-18 text-muted/60">
                    Test the voice agent performance and accuracy
                  </p>
                </div>
                <div className="bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="#4B5EFC" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              <div className="absolute lg:bottom-24 bottom-16 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey/45 backdrop-blur-xs px-6 py-2 h-fit rounded-full">
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#4B5EFC"/>
                    <path d="M12 15L13.65 17.65L12 18.5L10.35 17.65L12 15Z" fill="white"/>
                  </svg>
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap text-28 mb-3">
                    Deployment
                  </h5>
                  <p className="text-18 text-muted/60">
                    Launch the voice agent and provide ongoing support
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-light_grey/45 p-6 rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-muted mb-2">{item.title}</h4>
                    <p className="text-muted/60 text-18">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TimeLine
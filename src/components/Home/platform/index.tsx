'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const DialogWeaverFeatures = () => {
  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="features">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <Image
              src="/images/portfolio/ChatGPT Image Jul 14, 2025, 10_35_08 PM (1)-Photoroom.png"
              alt="DialogWeaver Features"
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              DialogWeaver <span className="text-primary">Features</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              Explore key features of
              <span className="text-primary">DialogWeaver</span>!
            </h2>
            <p className="text-muted/60 text-18">
              DialogWeaver empowers developers and businesses to
              <br className="md:block hidden" /> create sophisticated, real-time voice AI assistants with ease.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                <tr className="border-b border-dark_border/10">
                  <td className="py-5">
                    <div className="bg-primary/20 p-4 rounded-full w-fit">
                      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.38 9.38 11.5 12 11.5C14.62 11.5 16.75 9.38 16.75 6.75C16.75 4.13 14.62 2 12 2ZM12 9.5C10.34 9.5 8.75 7.91 8.75 6.25C8.75 4.59 10.34 3 12 3C13.66 3 15.25 4.59 15.25 6.25C15.25 7.91 13.66 9.5 12 9.5Z" fill="#4B5EFC"/>
                        <path d="M20.5 19C20.5 15.96 17.04 13.5 13 13.5C12.54 13.5 12.09 13.53 11.65 13.59C13.58 14.41 15 16.24 15 18.25V19C15 19.55 15.45 20 16 20H20C20.55 20 20.5 19.55 20.5 19Z" fill="#4B5EFC"/>
                      </svg>
                    </div>
                  </td>
                  <td className="py-5">
                    <h4 className="text-muted sm:text-28 text-22 ml-5">Real-Time Conversations</h4>
                  </td>
                </tr>
                <tr className="border-b border-dark_border/10">
                  <td className="py-5">
                    <div className="bg-primary/20 p-4 rounded-full w-fit">
                      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14C13.6569 14 15 12.6569 15 11V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V11C9 12.6569 10.3431 14 12 14Z" fill="#4B5EFC"/>
                        <path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 18V22" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </td>
                  <td className="py-5">
                    <h4 className="text-muted sm:text-28 text-22 ml-5">Provider-Agnostic Integration</h4>
                  </td>
                </tr>
                <tr className="border-b border-dark_border/10">
                  <td className="py-5">
                    <div className="bg-primary/20 p-4 rounded-full w-fit">
                      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="12" r="10" stroke="#4B5EFC" strokeWidth="2"/>
                      </svg>
                    </div>
                  </td>
                  <td className="py-5">
                    <h4 className="text-muted sm:text-28 text-22 ml-5">No-Code UI Playground</h4>
                  </td>
                </tr>
                <tr className="border-b border-dark_border/10">
                  <td className="py-5">
                    <div className="bg-primary/20 p-4 rounded-full w-fit">
                      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#4B5EFC"/>
                        <path d="M12 15L13.65 17.65L12 18.5L10.35 17.65L12 15Z" fill="white"/>
                      </svg>
                    </div>
                  </td>
                  <td className="py-5">
                    <h4 className="text-muted sm:text-28 text-22 ml-5">Telephony & Web Support</h4>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DialogWeaverFeatures
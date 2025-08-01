'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const VoiceMarketingPortfolio = () => {
  const portfolioItems = [
    {
      title: 'Blazing-Fast Conversations',
      svg: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4B5EFC"/>
          <path d="M2 17L12 22L22 17" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: '100% Open-Source',
      svg: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4C13.1 4 14 4.9 14 6C14 7.1 13.1 8 12 8C10.9 8 10 7.1 10 6C10 4.9 10.9 4 12 4Z" fill="#4B5EFC"/>
          <path d="M12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z" fill="#4B5EFC"/>
          <path d="M12 16C13.1 16 14 16.9 14 18C14 19.1 13.1 20 12 20C10.9 20 10 19.1 10 18C10 16.9 10.9 16 12 16Z" fill="#4B5EFC"/>
        </svg>
      ),
    },
    {
      title: 'Developer-First Experience',
      svg: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 8L3 12L7 16" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 8L21 12L17 16" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="#4B5EFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Simple Management UI',
      svg: (
        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#4B5EFC"/>
          <path d="M9 12H15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 9V15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="portfolio">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src="/images/portfolio/image3.png"
                  alt="Voice Marketing Agents Portfolio"
                  width={610}
                  height={500}
                  className="w-60% mx-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              Voice Marketing <span className="text-primary">Portfolio</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              Showcase your voice AI solutions with
              <span className="text-primary">Voice Marketing Agents</span>!
            </h2>
            <p className="text-muted/60 text-18">
              Voice Marketing Agents empowers you to build and present
              <br className="md:block hidden" /> high-performance voice AI projects for real-world calls.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioItems.map((item, index) => (
                  <tr key={index} className="border-b border-dark_border/10">
                    <td className="py-5">
                      <div className="bg-primary/20 p-4 rounded-full w-fit">
                        {item.svg}
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted sm:text-28 text-22 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VoiceMarketingPortfolio
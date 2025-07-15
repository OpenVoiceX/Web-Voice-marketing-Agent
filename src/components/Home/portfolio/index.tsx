'use client'
import Image from 'next/image'
import { portfolioData } from '@/app/api/data'
import { motion } from 'framer-motion'

const Portfolio = () => {
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
      alt="Voice Agent Portfolio"
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
              Voice Agent <span className="text-primary">Portfolio</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              Showcase your voice agent solutions with Voice
              <span className="text-primary">Go</span>!
            </h2>
            <p className="text-muted/60 text-18">
              VoiceGo enables you to build and present a comprehensive
              <br className="md:block hidden" /> portfolio of voice agent projects.
            </p>

            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
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

export default Portfolio
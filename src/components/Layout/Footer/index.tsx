// /ui/src/app/components/Layout/Footer.tsx
'use client'
import Link from 'next/link'
import { footerlabels } from '@/app/api/data'
import { headerData } from '../Header/Navigation/menuData'
import { Icon } from '@iconify/react'
import { Logo } from '../Header/Logo'

const Footer: React.FC = () => {
  return (
    <footer className="pt-16 bg-dark_grey/80 text-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
          <div className="lg:col-span-4 md:col-span-6 col-span-6">
            <Logo />
            <div className="flex gap-6 items-center mt-8 relative z-10">
              <Link href="#" className="group transition-colors">
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group transition-colors">
                <Icon
                  icon="fa6-brands:instagram"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="#" className="group transition-colors">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
            <p className="text-white text-18 font-medium mt-12">
              © {new Date().getFullYear()} Voice Marketing Agents. All rights reserved.
            </p>
            <Link
              href="https://getnextjstemplates.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-18 font-medium mt-4 hover:text-primary transition-colors block"
            >
              GetNextJs Templates
            </Link>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href || '#'}
                    className="text-white hover:text-primary text-17 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Information</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href || '#'} // Fixed typo from 'herf' to 'href'
                    className="text-white hover:text-primary text-17 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 md:col-span-4 col-span-6">
            <h3 className="text-white text-24 font-medium">Subscribe</h3>
            <p className="text-dark_border/60 text-18 mt-5">
              Subscribe to get the latest<br />news from us
            </p>
            <div className="relative lg:w-4/5 mt-6">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter Email"
                className="bg-transparent border border-dark_border/60 py-4 text-white rounded-lg w-full px-6 focus:border-primary focus:outline-none"
              />
              <Icon
                icon="tabler:send"
                width="24"
                height="24"
                className="text-primary absolute right-7 bottom-4 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
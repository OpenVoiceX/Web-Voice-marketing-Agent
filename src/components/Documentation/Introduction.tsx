         'use client'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useState } from 'react'
import { DocNavigation } from './DocNavigation'

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false)
  const PackageVersions = [
    {
      id: '1',
      packageName: 'NextJs',
      img: '/images/documentation/Categories=Nextjs.svg',
      version: '15.0.3',
    },
    {
      id: '2',
      packageName: 'React',
      img: '/images/documentation/Categories=React.svg',
      version: '18.3.1',
    },
    {
      id: '3',
      packageName: 'Tailwindcss',
      img: '/images/documentation/Categories=Tailwind.svg',
      version: '4+',
    },
    {
      id: '4',
      packageName: 'NextAuth',
      img: '/images/documentation/nextauth.png',
      version: '4.24.7',
    },
    {
      id: '5',
      packageName: 'Typescript',
      img: '/images/documentation/Categories=Typescript.svg',
      version: '5.6.3',
    },
  ]

  return (
    <>
      <div id='version' className='md:scroll-m-[180px] scroll-m-28'>
        {docNavbarOpen && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className='flex item-center justify-between'>
          <h3 className='text-2xl mt-4 font-semibold mb-6 text-white'>
            Developer Guide: Voice Marketing Agents Frontend
          </h3>
          <button onClick={() => setDocNavbarOpen(true)} className='p-0'>
            <Icon icon='gg:menu-right' className='text-3xl lg:hidden block' />
          </button>
        </div>

        <div className='w-full flex justify-between lg:gap-0 gap-6 lg:flex-nowrap flex-wrap p-6 rounded-md border border-dark_border/60'>
          {PackageVersions &&
            PackageVersions.map((item) => {
              return (
                <div
                  key={item.id}
                  className='lg:w-1/5 md:w-full text-center lg:border-b-0 border-b lg:border-e lg:last:border-e-0 last:border-b-0 border-dark_border/60'>
                  <Image
                    src={item.img}
                    width={64}
                    height={64}
                    alt='npm-package'
                    className='mx-auto w-10 h-10'
                  />
                  <h5 className='text-2xl font-bold mt-3.5 text-white'>{`v${item.version}`}</h5>
                  <p className='text-base font-medium text-muted'>
                    {item.packageName}
                  </p>
                </div>
              )
            })}
        </div>

        <div className='mt-8 text-muted/60'>
          <h4 className='text-xl font-semibold mb-4 text-white'>The Big Picture: Where You Fit In</h4>
          <p className='mb-4'>
            Our project is a multi-service application focused on Voice Marketing Agents. Your primary focus will be on the Frontend Dashboard - the user interface where clients manage their AI agents.
          </p>

          <h5 className='text-lg font-semibold mb-3 text-white'>Key Responsibilities:</h5>
          <ul className='list-disc pl-6 mb-6'>
            <li>Create and configure AI agents</li>
            <li>Manage call campaigns (future feature)</li>
            <li>View analytics and call logs (future feature)</li>
          </ul>

          <h4 className='text-xl font-semibold mb-4 text-white'>System Architecture</h4>
          <p className='mb-6'>
            The frontend communicates with our backend services through a REST API, managing agent configurations and user interactions.
          </p>

          <h4 className='text-xl font-semibold mb-4 text-white'>Development Stack</h4>
          <p className='mb-4'>
            We use a modern, high-performance frontend stack with the following key technologies:
          </p>
          <ul className='list-disc pl-6 mb-6'>
            <li>Next.js for server-side rendering and routing</li>
            <li>React for component-based UI development</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>NextAuth for authentication</li>
          </ul>
        </div>

        {docNavbarOpen && (
          <div className='lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs z-50'>
            <div className='flex items-center justify-between p-4'>
              <h2 className='text-lg font-bold text-midnight_text dark:text-white'>
                Docs Menu
              </h2>
              <button
                onClick={() => setDocNavbarOpen(false)}
                aria-label='Close mobile menu'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='dark:text-white'>
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <nav className='px-4'>
              <DocNavigation />
            </nav>
          </div>
        )}
      </div>
    </>
  )
}

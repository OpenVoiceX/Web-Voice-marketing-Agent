'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState('overview')

  function getNavItem(item: string) {
    setNavItem(item)
  }

  useEffect(() => {
    console.log(navItem)
  }, [navItem])

  const DocsNav = [
    {
      id: 1,
      navItem: 'Overview & Stack',
      hash: 'overview',
    },
    {
      id: 2,
      navItem: 'Getting Started',
      hash: 'start',
    },
    {
      id: 3,
      navItem: 'Project Structure',
      hash: 'structure',
    },
    {
      id: 4,
      navItem: 'Configuration',
      hash: 'configuration',
    },
    {
      id: 5,
      navItem: 'API Integration',
      hash: 'api',
    },
  ]

  return (
    <div className='flex flex-col gap-0.5 mt-4 items-start fixed pe-4'>
      {DocsNav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`#${item.hash}`}
            onClick={() => getNavItem(item.hash)}
            className={`py-2.5 hover:bg-primary/20 hover:text-primary dark:hover:text-primary xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-md text-base font-medium ${
              item.hash === navItem
                ? 'bg-primary text-darkmode'
                : 'text-muted/60'
            }`}>
            {item.navItem}
          </Link>
        )
      })}
    </div>
  )
}

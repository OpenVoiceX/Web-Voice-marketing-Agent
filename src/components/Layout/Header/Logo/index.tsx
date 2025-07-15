'use client'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image
        src='/images/logo/logo.png'
        alt='OpenVoiceX logo'
        width={120}
        height={40}
        className='w-[40px] h-auto md:w-[45px]'
        style={{ objectFit: 'contain' }}
        priority
      />
      <span className="text-xl font-semibold text-gray-800 dark:text-white">
        Open<span className="text-primary">Voice</span>X
      </span>
    </Link>
  )
}

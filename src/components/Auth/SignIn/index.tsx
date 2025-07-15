'use client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import SocialSignIn from '../SocialSignIn'
import { Logo } from '@/components/Layout/Header/Logo'
import Loader from '@/components/Common/Loader'

interface LoginData {
  email: string;
  password: string;
  checkboxToggle: boolean;
}

const SignIn = () => {
  const router = useRouter()

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
    checkboxToggle: false,
  })
  const [loading, setLoading] = useState(false)

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)
    try {
      const result = await signIn('credentials', { ...loginData, redirect: false })
      if (result?.error) {
        toast.error(result.error)
        console.log(result.error)
        setLoading(false)
        return
      }

      if (result?.ok && !result?.error) {
        toast.success('Login successful')
        setLoading(false)
        router.push('/')
      }
    } catch (err) {
      setLoading(false)
      if (err instanceof Error) {
        console.log(err.message)
        toast.error(err.message)
      } else {
        toast.error('An error occurred')
      }
    }
  }

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-white'>
          OR
        </span>
      </span>

      <form onSubmit={loginUser}>
        <div className='mb-[22px]'>
          <input
            type='email'
            placeholder='Email'
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            placeholder='Password'
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='bg-primary w-full py-3 rounded-lg text-18 font-medium border border-primary hover:text-primary hover:bg-transparent'>
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href='/forgot-password'
        className='mb-2 inline-block text-base text-dark hover:text-primary text-white dark:hover:text-primary'>
        Forgot Password?
      </Link>
      <p className='text-body-secondary text-white text-base'>
        Not a member yet?{' '}
        <Link href='/' className='text-primary hover:underline'>
          Sign Up
        </Link>
      </p>
    </>
  )
}

export default SignIn

// /app/layout.tsx
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'OpenVoiceX',
    template: '%s | OpenVoiceX'
  },
  description: 'Next generation voice agent platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-dark text-white`}>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          <Aoscompo>
            <Header />
            <main>{children}</main>
            <Footer />
          </Aoscompo>
          <ScrollToTop />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#333',
                color: '#fff',
                border: '1px solid #555',
              },
              success: {
                style: {
                  background: '#065f46',
                  color: '#fff',
                },
              },
              error: {
                style: {
                  background: '#dc2626',
                  color: '#fff',
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
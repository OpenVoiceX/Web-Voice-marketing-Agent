// /app/layout.tsx
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import { ThemeProvider } from 'next-themes'
import ScrollToTop from '@/components/ScrollToTop'
import Aoscompo from '@/utils/aos'
import { Metadata } from 'next'

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
        </ThemeProvider>
      </body>
    </html>
  )
}
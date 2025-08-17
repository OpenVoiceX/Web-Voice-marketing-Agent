import { Metadata } from 'next'
import Contributors from '@/components/Contributors'

export const metadata: Metadata = {
  title: 'Contributors | Voice Marketing Agents',
  description: 'Meet the amazing contributors who have helped build Voice Marketing Agents - a next-generation voice AI platform.',
  keywords: ['contributors', 'open source', 'voice AI', 'community', 'developers', 'Voice Marketing Agents'],
  authors: [{ name: 'Voice Marketing Agents Community' }],
  openGraph: {
    title: 'Contributors | Voice Marketing Agents',
    description: 'Meet the amazing contributors who have helped build Voice Marketing Agents',
    type: 'website',
    siteName: 'Voice Marketing Agents',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contributors | Voice Marketing Agents',
    description: 'Meet the amazing contributors who have helped build Voice Marketing Agents',
  },
}

export default function ContributorsPage() {
  return <Contributors />
}

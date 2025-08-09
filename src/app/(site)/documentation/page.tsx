import { Documentation } from '@/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Documentation | Voice Marketing Agents',
  description: 'Complete documentation for Voice Marketing Agents platform - setup, API reference, and development guides.',
}

export default function Page() {
  return (
    <>
      <Documentation />
    </>
  )
}

'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import toast from 'react-hot-toast'

interface Contributor {
  login: string
  id: number
  avatar_url: string
  html_url: string
  contributions: number
  type: string
  site_admin: boolean
  name?: string
  bio?: string
  company?: string
  location?: string
  blog?: string
  twitter_username?: string
  public_repos?: number
  followers?: number
}

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null)

  useEffect(() => {
    fetchContributors()
  }, [])

  const fetchContributors = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch contributors from GitHub API
      const contributorsResponse = await fetch(
        'https://api.github.com/repos/OpenVoiceX/Web-Voice-marketing-Agent/contributors?per_page=100'
      )

      if (!contributorsResponse.ok) {
        throw new Error('Failed to fetch contributors')
      }

      const contributorsData = await contributorsResponse.json()

      // Fetch detailed info for each contributor
      const detailedContributors = await Promise.all(
        contributorsData.map(async (contributor: Contributor) => {
          try {
            const userResponse = await fetch(`https://api.github.com/users/${contributor.login}`)
            if (userResponse.ok) {
              const userData = await userResponse.json()
              return { ...contributor, ...userData }
            }
            return contributor
          } catch (error) {
            console.warn(`Failed to fetch details for ${contributor.login}:`, error)
            return contributor
          }
        })
      )

      setContributors(detailedContributors)
    } catch (error) {
      console.error('Error fetching contributors:', error)
      setError('Failed to load contributors. Please try again later.')
      toast.error('Failed to load contributors')
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const handleContributorClick = (contributor: Contributor) => {
    setSelectedContributor(contributor)
  }

  const closeModal = () => {
    setSelectedContributor(null)
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
            <p className="mt-4 text-white/80">Loading our amazing contributors...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen bg-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Icon icon="mdi:alert-circle" className="text-error text-6xl mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Oops! Something went wrong</h2>
            <p className="text-white/80 mb-6">{error}</p>
            <button
              onClick={fetchContributors}
              className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="min-h-screen bg-dark text-white py-20">
        {/* Header Section */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6 mt-14">
              <Icon icon="mdi:account-group" className="text-primary text-5xl" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Our Amazing <span className="text-primary">Contributors</span>
              </h1>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Meet the incredible developers, designers, and community members who have contributed to making 
              Voice Marketing Agents a reality. Together, we're building the future of voice AI technology.
            </p>
            <div className="flex items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:github" className="text-2xl" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:heart" className="text-2xl text-error" />
                <span>Community Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:rocket-launch" className="text-2xl" />
                <span>Innovation Focused</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 bg-dark_grey/50 rounded-lg border border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-2">{contributors.length}</h3>
              <p className="text-white/80">Total Contributors</p>
            </div>
            <div className="text-center p-6 bg-dark_grey/50 rounded-lg border border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {contributors.reduce((sum, contributor) => sum + contributor.contributions, 0)}
              </h3>
              <p className="text-white/80">Total Contributions</p>
            </div>
            <div className="text-center p-6 bg-dark_grey/50 rounded-lg border border-primary/20">
              <h3 className="text-3xl font-bold text-primary mb-2">
                {contributors.filter(c => c.contributions >= 10).length}
              </h3>
              <p className="text-white/80">Core Contributors</p>
            </div>
          </motion.div>
        </div>

        {/* Contributors Grid */}
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {contributors.map((contributor) => (
              <motion.div
                key={contributor.id}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => handleContributorClick(contributor)}
              >
                <div className="bg-dark_grey/30 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center hover:border-primary/50 hover:bg-dark_grey/50 transition-all duration-300 hover:scale-105">
                  <div className="relative mb-4">
                    <Image
                      src={contributor.avatar_url}
                      alt={`${contributor.login}'s avatar`}
                      width={80}
                      height={80}
                      className="rounded-full mx-auto border-2 border-primary/30 group-hover:border-primary transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-dark text-xs font-bold px-2 py-1 rounded-full">
                      {contributor.contributions}
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-1 truncate">
                    {contributor.name || contributor.login}
                  </h3>
                  <p className="text-sm text-primary mb-2">@{contributor.login}</p>
                  {contributor.bio && (
                    <p className="text-xs text-white/60 line-clamp-2">{contributor.bio}</p>
                  )}
                  <div className="flex items-center justify-center gap-2 mt-3 text-xs text-white/60">
                    {contributor.location && (
                      <div className="flex items-center gap-1">
                        <Icon icon="mdi:map-marker" />
                        <span className="truncate">{contributor.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-12 border border-primary/30"
          >
            <h2 className="text-3xl font-bold mb-4">
              Want to Join Our <span className="text-primary">Community</span>?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate developers to help us build the future of voice AI. 
              Every contribution, no matter how small, makes a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://github.com/OpenVoiceX/Web-Voice-marketing-Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-dark px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Icon icon="mdi:github" className="text-xl" />
                View on GitHub
              </Link>
              <Link
                href="https://github.com/OpenVoiceX/Web-Voice-marketing-Agent/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors inline-flex items-center gap-2"
              >
                <Icon icon="mdi:bug" className="text-xl" />
                Report Issues
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contributor Detail Modal */}
      {selectedContributor && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-dark_grey border border-primary/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Image
                  src={selectedContributor.avatar_url}
                  alt={`${selectedContributor.login}'s avatar`}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-primary"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedContributor.name || selectedContributor.login}
                  </h3>
                  <p className="text-primary text-lg">@{selectedContributor.login}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-white/60">
                    <span>{selectedContributor.contributions} contributions</span>
                    {selectedContributor.public_repos && (
                      <span>{selectedContributor.public_repos} repositories</span>
                    )}
                    {selectedContributor.followers && (
                      <span>{selectedContributor.followers} followers</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-white/60 hover:text-white text-2xl"
              >
                <Icon icon="mdi:close" />
              </button>
            </div>

            {selectedContributor.bio && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">About</h4>
                <p className="text-white/80">{selectedContributor.bio}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {selectedContributor.company && (
                <div className="flex items-center gap-2 text-white/80">
                  <Icon icon="mdi:office-building" className="text-primary" />
                  <span>{selectedContributor.company}</span>
                </div>
              )}
              {selectedContributor.location && (
                <div className="flex items-center gap-2 text-white/80">
                  <Icon icon="mdi:map-marker" className="text-primary" />
                  <span>{selectedContributor.location}</span>
                </div>
              )}
              {selectedContributor.blog && (
                <div className="flex items-center gap-2 text-white/80">
                  <Icon icon="mdi:web" className="text-primary" />
                  <Link
                    href={selectedContributor.blog.startsWith('http') ? selectedContributor.blog : `https://${selectedContributor.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary truncate"
                  >
                    {selectedContributor.blog}
                  </Link>
                </div>
              )}
              {selectedContributor.twitter_username && (
                <div className="flex items-center gap-2 text-white/80">
                  <Icon icon="mdi:twitter" className="text-primary" />
                  <Link
                    href={`https://twitter.com/${selectedContributor.twitter_username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    @{selectedContributor.twitter_username}
                  </Link>
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Link
                href={selectedContributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-dark px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Icon icon="mdi:github" />
                View Profile
              </Link>
              <Link
                href={`https://github.com/OpenVoiceX/Web-Voice-marketing-Agent/commits?author=${selectedContributor.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-dark transition-colors inline-flex items-center gap-2"
              >
                <Icon icon="mdi:source-commit" />
                View Contributions
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </>
  )
}

export default Contributors

'use client'
import { useState, useEffect, useMemo } from 'react'
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

type FilterType = 'all' | 'core' | 'active' | 'new'
type ViewMode = 'latest' | 'compact' | 'full'

const Contributors = () => {
  const [contributors, setContributors] = useState<Contributor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedContributor, setSelectedContributor] = useState<Contributor | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<FilterType>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('latest')
  const [displayedCount, setDisplayedCount] = useState(8)

  useEffect(() => {
    fetchContributors()
  }, [])

  // Add Esc key handler for modal
  useEffect(() => {
    if (selectedContributor) {
      const handleEscKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setSelectedContributor(null)
        }
      }

      document.addEventListener('keydown', handleEscKey)
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      return () => {
        document.removeEventListener('keydown', handleEscKey)
        document.body.style.overflow = 'auto'
      }
    }
  }, [selectedContributor])

  const fetchContributors = async () => {
    try {
      setLoading(true)
      setError(null)

      // Fetch contributors from our API route
      const response = await fetch('/api/contributors')

      if (!response.ok) {
        throw new Error('Failed to fetch contributors')
      }

      const contributorsData = await response.json()
      setContributors(contributorsData)
    } catch (error) {
      console.error('Error fetching contributors:', error)
      setError('Failed to load contributors. Please try again later.')
      toast.error('Failed to load contributors')
    } finally {
      setLoading(false)
    }
  }

  // Get contributors based on view mode
  const getDisplayedContributors = useMemo(() => {
    let baseContributors = [...contributors]

    // Apply search filter first
    if (searchTerm) {
      baseContributors = baseContributors.filter(contributor =>
        contributor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contributor.login.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contributor.bio?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contributor.company?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Apply category filter
    switch (filterType) {
      case 'core':
        baseContributors = baseContributors.filter(c => c.contributions >= 10)
        break
      case 'active':
        baseContributors = baseContributors.filter(c => c.contributions >= 5 && c.contributions < 10)
        break
      case 'new':
        baseContributors = baseContributors.filter(c => c.contributions < 5)
        break
    }

    // Sort and apply view mode logic
    const sortedContributors = baseContributors.sort((a, b) => b.contributions - a.contributions)

    switch (viewMode) {
      case 'latest':
        // Show top contributors (most active) for latest view
        return sortedContributors.slice(0, 12)
      case 'compact':
        // Show more for compact horizontal view
        return sortedContributors.slice(0, 24)
      case 'full':
        // Show all with pagination
        return sortedContributors.slice(0, displayedCount)
      default:
        return sortedContributors.slice(0, displayedCount)
    }
  }, [contributors, searchTerm, filterType, viewMode, displayedCount])

  // Legacy filtered contributors for backward compatibility
  const filteredContributors = useMemo(() => {
    let filtered = [...contributors]

    if (searchTerm) {
      filtered = filtered.filter(contributor =>
        contributor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contributor.login.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contributor.bio?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contributor.company?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    switch (filterType) {
      case 'core':
        filtered = filtered.filter(c => c.contributions >= 10)
        break
      case 'active':
        filtered = filtered.filter(c => c.contributions >= 5 && c.contributions < 10)
        break
      case 'new':
        filtered = filtered.filter(c => c.contributions < 5)
        break
    }

    return filtered.sort((a, b) => b.contributions - a.contributions)
  }, [contributors, searchTerm, filterType])

  const displayedContributors = getDisplayedContributors

  const loadMore = () => {
    setDisplayedCount(prev => Math.min(prev + 8, filteredContributors.length))
  }

  const getContributorRole = (contributions: number) => {
    if (contributions >= 10) return 'Core Contributor'
    if (contributions >= 5) return 'Active Contributor'
    return 'New Contributor'
  }

  // Reusable Contributor Card Component
  const ContributorCard = ({ 
    contributor, 
    onClick, 
    getContributorRole, 
    compact = false 
  }: {
    contributor: Contributor
    onClick: () => void
    getContributorRole: (contributions: number) => string
    compact?: boolean
  }) => (
    <motion.div
      variants={itemVariants}
      className="group cursor-pointer"
      role="button"
      tabIndex={0}
      aria-label={`View details for ${contributor.name || contributor.login}, ${getContributorRole(contributor.contributions)}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <div className={`bg-dark_grey/30 backdrop-blur-sm border border-white/10 rounded-2xl ${compact ? 'p-4' : 'p-6'} text-center hover:border-primary/30 hover:bg-dark_grey/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10`}>
        {/* Profile Image with Border */}
        <div className="relative mb-4">
          <div className={`${compact ? 'w-16 h-16' : 'w-20 h-20'} mx-auto rounded-full p-1 bg-gradient-to-r from-primary to-secondary`}>
            <Image
              src={contributor.avatar_url}
              alt={`${contributor.login}'s avatar`}
              width={compact ? 60 : 76}
              height={compact ? 60 : 76}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name and Username */}
        <h3 className={`font-bold text-white ${compact ? 'text-base' : 'text-lg'} mb-1 truncate`}>
          {contributor.name || contributor.login}
        </h3>
        <p className={`text-primary font-medium mb-3 ${compact ? 'text-xs' : 'text-sm'}`}>
          {getContributorRole(contributor.contributions)}
        </p>

        {/* Bio if available and not compact */}
        {!compact && contributor.bio && (
          <p className="text-white/60 text-sm mb-4 line-clamp-2 leading-relaxed">
            {contributor.bio}
          </p>
        )}

        {/* Stats */}
        <div className={`flex items-center justify-center gap-4 ${compact ? 'text-xs' : 'text-xs'} text-white/50`}>
          <div className="flex items-center gap-1">
            <Icon icon="mdi:source-commit" />
            <span>{contributor.contributions}</span>
          </div>
          {contributor.public_repos && (
            <div className="flex items-center gap-1">
              <Icon icon="mdi:source-repository" />
              <span>{contributor.public_repos}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )

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
        {/* Header Section - Inspired by the image */}
        <div className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 mt-20">
              Contributor <span className="text-primary">Showcase</span>
            </h1>
            <p className="text-xl text-white/70 mb-8">
              {viewMode === 'latest' && 'Our most active contributors'}
              {viewMode === 'compact' && 'Browse contributors in compact view'}
              {viewMode === 'full' && 'Complete list of all contributors'}
            </p>
            
            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-sm text-white/60 mb-12">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:account-group" />
                <span>{contributors.length} Total Contributors</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="mdi:eye" />
                <span>Showing {displayedContributors.length}</span>
              </div>
              {viewMode === 'latest' && (
                <div className="flex items-center gap-2">
                  <Icon icon="mdi:star" />
                  <span>Top Active</span>
                </div>
              )}
            </div>

            {/* Search and Filter Section - Inspired by the image */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-4xl mx-auto">
              {/* View Mode Toggle */}
              <div className="flex bg-dark_grey/30 rounded-xl p-1 border border-white/10">
                <button
                  onClick={() => setViewMode('latest')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'latest' 
                      ? 'bg-primary text-dark' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Latest
                </button>
                <button
                  onClick={() => setViewMode('compact')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'compact' 
                      ? 'bg-primary text-dark' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Compact
                </button>
                <button
                  onClick={() => setViewMode('full')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === 'full' 
                      ? 'bg-primary text-dark' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  View All
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative flex-1 w-full md:w-auto">
                <Icon icon="mdi:magnify" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 text-xl" />
                <input
                  type="text"
                  placeholder="Search contributors"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-dark_grey/50 border border-white/20 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Filter Dropdown - Show only in full view */}
              {viewMode === 'full' && (
                <div className="relative">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value as FilterType)}
                    className="bg-dark_grey/50 border border-white/20 rounded-xl py-4 px-6 pr-12 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer min-w-[140px]"
                  >
                    <option value="all">All Contributors</option>
                    <option value="core">Core ({contributors.filter(c => c.contributions >= 10).length})</option>
                    <option value="active">Active ({contributors.filter(c => c.contributions >= 5 && c.contributions < 10).length})</option>
                    <option value="new">New ({contributors.filter(c => c.contributions < 5).length})</option>
                  </select>
                  <Icon icon="mdi:chevron-down" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 pointer-events-none" />
                </div>
              )}
            </div>

            {/* Results Count */}
            {searchTerm && (
              <p className="text-white/60 mt-4">
                Found {filteredContributors.length} contributor{filteredContributors.length !== 1 ? 's' : ''} matching "{searchTerm}"
              </p>
            )}
          </motion.div>
        </div>

        {/* Contributors Display - Dynamic Layout */}
        <div className="container mx-auto px-4">
          {/* Latest View - Clean Grid */}
          {viewMode === 'latest' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            >
              {displayedContributors.map((contributor) => (
                <ContributorCard 
                  key={contributor.id} 
                  contributor={contributor} 
                  onClick={() => handleContributorClick(contributor)}
                  getContributorRole={getContributorRole}
                />
              ))}
            </motion.div>
          )}

          {/* Compact View - Horizontal Scroll */}
          {viewMode === 'compact' && (
            <div className="overflow-x-auto pb-4">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex gap-6 w-max"
                style={{ minWidth: '100%' }}
              >
                {displayedContributors.map((contributor) => (
                  <div key={contributor.id} className="flex-shrink-0 w-64">
                    <ContributorCard 
                      contributor={contributor} 
                      onClick={() => handleContributorClick(contributor)}
                      getContributorRole={getContributorRole}
                      compact={true}
                    />
                  </div>
                ))}
              </motion.div>
              {/* Scroll indicator */}
              <div className="flex justify-center mt-4">
                <p className="text-white/50 text-sm flex items-center gap-2">
                  <Icon icon="mdi:arrow-left-right" />
                  Scroll horizontally to see more
                </p>
              </div>
            </div>
          )}

          {/* Full View - Grid with Pagination */}
          {viewMode === 'full' && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
            >
              {displayedContributors.map((contributor) => (
                <ContributorCard 
                  key={contributor.id} 
                  contributor={contributor} 
                  onClick={() => handleContributorClick(contributor)}
                  getContributorRole={getContributorRole}
                />
              ))}
            </motion.div>
          )}

          {/* Load More Button - Only show in full view */}
          {viewMode === 'full' && displayedCount < filteredContributors.length && (
            <div className="text-center mt-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={loadMore}
                className="bg-primary text-dark px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Load More ({filteredContributors.length - displayedCount} remaining)
              </motion.button>
            </div>
          )}

          {/* View All Button for Latest/Compact views */}
          {(viewMode === 'latest' || viewMode === 'compact') && filteredContributors.length > displayedContributors.length && (
            <div className="text-center mt-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setViewMode('full')}
                className="border border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-dark transition-all duration-300 hover:scale-105"
              >
                View All {contributors.length} Contributors
              </motion.button>
            </div>
          )}

          {/* No Results Message */}
          {filteredContributors.length === 0 && !loading && (
            <div className="text-center py-20">
              <Icon icon="mdi:account-search" className="text-white/30 text-6xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white/70 mb-2">No contributors found</h3>
              <p className="text-white/50">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 border border-primary/20 max-w-4xl mx-auto"
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
                href="https://github.com/Dharmi-dev/Web-Voice-marketing-Agent-dharmesh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-dark px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Icon icon="mdi:github" className="text-xl" />
                View on GitHub
              </Link>
              <Link
                href="https://github.com/Dharmi-dev/Web-Voice-marketing-Agent-dharmesh/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary hover:text-dark transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Icon icon="mdi:bug" className="text-xl" />
                Report Issues
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contributor Detail Modal with proper dialog semantics */}
      {selectedContributor && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedContributor(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-dark_grey border border-primary/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`contributor-${selectedContributor.id}-title`}
            aria-describedby={`contributor-${selectedContributor.id}-details`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-r from-primary to-secondary">
                  <Image
                    src={selectedContributor.avatar_url}
                    alt={`${selectedContributor.login}'s avatar`}
                    width={88}
                    height={88}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 
                    id={`contributor-${selectedContributor.id}-title`}
                    className="text-2xl font-bold text-white"
                  >
                    {selectedContributor.name || selectedContributor.login}
                  </h3>
                  <p className="text-primary text-lg">@{selectedContributor.login}</p>
                  <p className="text-white/60 text-sm mt-1">
                    {getContributorRole(selectedContributor.contributions)}
                  </p>
                  <div 
                    id={`contributor-${selectedContributor.id}-details`}
                    className="flex items-center gap-4 mt-2 text-sm text-white/60"
                  >
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
                className="text-white/60 hover:text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close contributor details"
              >
                <Icon icon="mdi:close" />
              </button>
            </div>

            {selectedContributor.bio && (
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">About</h4>
                <p className="text-white/80 leading-relaxed">{selectedContributor.bio}</p>
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
                    href={(() => {
                      const blog = selectedContributor.blog.trim()
                      const stripped = blog.replace(/^\/+/, '') // Remove leading slashes
                      const lowercased = stripped.toLowerCase()
                      
                      if (lowercased.startsWith('http://') || lowercased.startsWith('https://')) {
                        return stripped
                      }
                      return `https://${stripped}`
                    })()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary truncate transition-colors"
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
                    className="hover:text-primary transition-colors"
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
                className="bg-primary text-dark px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
              >
                <Icon icon="mdi:github" />
                View Profile
              </Link>
              <Link
                href={`https://github.com/Dharmi-dev/Web-Voice-marketing-Agent-dharmesh/commits?author=${selectedContributor.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-dark transition-colors inline-flex items-center gap-2"
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
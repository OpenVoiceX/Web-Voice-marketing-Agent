import { NextRequest, NextResponse } from 'next/server'

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

// Cache for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000
let cachedData: { contributors: Contributor[], timestamp: number } | null = null

async function fetchWithAuth(url: string) {
  const headers: Record<string, string> = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Web-Voice-Marketing-Agent'
  }

  // Add GitHub token if available
  if (process.env.GITHUB_TOKEN) {
    headers['Authorization'] = `token ${process.env.GITHUB_TOKEN}`
  }

  return fetch(url, { headers })
}

async function fetchUserDetails(usernames: string[], maxConcurrency = 5): Promise<Contributor[]> {
  const results: Contributor[] = []
  
  // Process in batches to avoid rate limiting
  for (let i = 0; i < usernames.length; i += maxConcurrency) {
    const batch = usernames.slice(i, i + maxConcurrency)
    
    const promises = batch.map(async (username) => {
      try {
        const response = await fetchWithAuth(`https://api.github.com/users/${username}`)
        if (response.ok) {
          return await response.json()
        }
        console.warn(`Failed to fetch details for ${username}: ${response.status}`)
        return null
      } catch (error) {
        console.warn(`Error fetching details for ${username}:`, error)
        return null
      }
    })

    const batchResults = await Promise.all(promises)
    results.push(...batchResults.filter(Boolean))
    
    // Add a small delay between batches to be respectful to the API
    if (i + maxConcurrency < usernames.length) {
      await new Promise(resolve => setTimeout(resolve, 100))
    }
  }

  return results
}

export async function GET(request: NextRequest) {
  try {
    // Check cache first
    if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
      return NextResponse.json(cachedData.contributors, {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
        }
      })
    }

    // Fetch contributors list
    const contributorsResponse = await fetchWithAuth(
      'https://api.github.com/repos/Dharmi-dev/Web-Voice-marketing-Agent-dharmesh/contributors?per_page=100'
    )

    if (!contributorsResponse.ok) {
      if (contributorsResponse.status === 403) {
        throw new Error('GitHub API rate limit exceeded')
      }
      throw new Error(`GitHub API error: ${contributorsResponse.status}`)
    }

    const contributorsData = await contributorsResponse.json()

    // Fetch detailed user information in batches
    const userDetails = await fetchUserDetails(
      contributorsData.map((c: Contributor) => c.login)
    )

    // Merge contributor data with user details
    const detailedContributors = contributorsData.map((contributor: Contributor) => {
      const userDetail = userDetails.find(user => user?.login === contributor.login)
      return userDetail ? { ...contributor, ...userDetail } : contributor
    })

    // Update cache
    cachedData = {
      contributors: detailedContributors,
      timestamp: Date.now()
    }

    return NextResponse.json(detailedContributors, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
      }
    })

  } catch (error) {
    console.error('Error fetching contributors:', error)
    
    // Return cached data if available, even if stale
    if (cachedData) {
      return NextResponse.json(cachedData.contributors, {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
        }
      })
    }

    return NextResponse.json(
      { error: 'Failed to fetch contributors' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-cache'
        }
      }
    )
  }
}

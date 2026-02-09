import type { CompetitionsApiResponse } from '~~/types/competition'

export default defineEventHandler(async (event): Promise<CompetitionsApiResponse> => {
  try {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    
    // Build the external API URL with query parameters
    const externalApiUrl = new URL(config.competitionsApiUrl || 'https://tradersyard.com/api/v3.0/competitions/competition-instances')
    
    // Add default status filter if not provided
    if (!query.status) {
      externalApiUrl.searchParams.set('status', 'upcoming|ongoing')
    } else {
      externalApiUrl.searchParams.set('status', query.status as string)
    }
    
    // Add any additional query parameters
    Object.entries(query).forEach(([key, value]) => {
      if (key !== 'status' && value !== undefined) {
        externalApiUrl.searchParams.set(key, value as string)
      }
    })

    // Make request to external Laravel API
    const response = await $fetch<CompetitionsApiResponse>(externalApiUrl.toString(), {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error: any) {
    console.error('Competitions API Error:', error)
    
    // Handle different types of errors
    if (error.statusCode === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Competitions not found'
      })
    }
    
    if (error.statusCode === 500) {
      throw createError({
        statusCode: 500,
        statusMessage: 'External API service unavailable'
      })
    }

    // Handle network timeout errors
    if (error.code === 'FETCH_ERROR' || error.message?.includes('timeout')) {
      throw createError({
        statusCode: 503,
        statusMessage: 'Service temporarily unavailable'
      })
    }

    // Handle other external API errors
    if (error.statusCode) {
      throw createError({
        statusCode: error.statusCode,
        statusMessage: error.statusMessage || 'Failed to fetch competitions'
      })
    }

    // Handle unexpected errors
    throw createError({
      statusCode: 500,
      statusMessage: 'An unexpected error occurred while fetching competitions'
    })
  }
})
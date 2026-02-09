import type { GameApiResponse } from '~~/types/game'

export default defineEventHandler(async (): Promise<GameApiResponse> => {
  try {
    // Make request to external Laravel API for Survivor Showdown game data
    const response = await $fetch<{ data: GameApiResponse }>('https://tradersyard.com/api/v3.0/games/tss2', {
      timeout: 10000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error: any) {
    console.error('Survivor Showdown API Error:', error)
    
    // Handle different types of errors
    if (error.statusCode === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Survivor Showdown game not found'
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
        statusMessage: error.statusMessage || 'Failed to fetch Survivor Showdown data'
      })
    }

    // Handle unexpected errors
    throw createError({
      statusCode: 500,
      statusMessage: 'An unexpected error occurred while fetching game data'
    })
  }
})
import type { BrevoEventRequest, BrevoEventResponse, BrevoApiEventPayload } from '~~/types/brevo'

export default defineEventHandler(async (event): Promise<BrevoEventResponse> => {
  try {
    const config = useRuntimeConfig()
    const body = await readBody<BrevoEventRequest>(event)

    // Validate request body
    if (!body.email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email is required'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid email format'
      })
    }

    // Check if an API key is configured
    if (!config.brevoApiKey) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Brevo API key not configured'
      })
    }

    // Prepare event data for Brevo API
    const eventData: BrevoApiEventPayload = {
      event_name: body.eventName || config.brevoEventName || 'newsletter_signup',
      identifiers: {
        email_id: body.email
      }
    }

    // Add properties if provided
    if (body.properties) {
      eventData.event_properties = body.properties
    }

    // Make request to Brevo Events API v3
    await $fetch('https://api.brevo.com/v3/events', {
      method: 'POST',
      headers: {
        'api-key': config.brevoApiKey,
        'Content-Type': 'application/json'
      },
      body: eventData
    })

    return {
      success: true,
      message: 'Newsletter signup successful'
    }

  } catch (error: any) {
    console.error('Newsletter API Error:', error)
    
    // Handle different types of errors
    if (error.statusCode) {
      throw error // Re-throw validation errors
    }

    // Handle Brevo API errors
    if (error.data) {
      return {
        success: false,
        error: error.data.message || 'Failed to subscribe to newsletter'
      }
    }

    // Handle network or other errors
    return {
      success: false,
      error: 'An unexpected error occurred'
    }
  }
})
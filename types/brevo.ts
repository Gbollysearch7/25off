export interface BrevoEventRequest {
  email: string
  eventName: string
  properties?: Record<string, any>
}

export interface BrevoEventResponse {
  success: boolean
  message?: string
  error?: string
}

export interface BrevoApiEventPayload {
  event_name: string
  identifiers: {
    email_id: string
  }
  event_date?: string
  contact_properties?: Record<string, any>
  event_properties?: Record<string, any>
}

export interface BrevoApiResponse {
  message?: string
  code?: string
}
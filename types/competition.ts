export interface CompetitionDefinition {
  key: string
  name: string
  prize: string
  description: string
}

export interface CompetitionCheckout {
  price: number
  provider: string
  checkout_url: string
}

export interface Competition {
  id: string
  status: 'upcoming' | 'ongoing'
  starts_at: string
  ends_at: string
  competition_definition: CompetitionDefinition
  competition_users_count: number
  current_competition_user: any | null
  checkout: CompetitionCheckout
  image: string
  user_can_join: boolean
}

export interface LaravelApiMeta {
  current_page: number
  from: number | null
  last_page: number
  per_page: number
  to: number | null
  total: number
  path: string
}

export interface LaravelApiLinks {
  first: string | null
  last: string | null
  prev: string | null
  next: string | null
}

export interface LaravelApiResponse<T> {
  data: T[]
  meta: LaravelApiMeta
  links: LaravelApiLinks
}

export interface CompetitionState {
  competitions: Competition[]
  loading: boolean
  error: ApiError | null
}

export interface ApiError {
  message: string
  statusCode?: number
  statusMessage?: string
}

export interface CompetitionsApiResponse extends LaravelApiResponse<Competition> {}
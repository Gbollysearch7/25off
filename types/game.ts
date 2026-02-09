export interface GameRound {
  id: number
  name: string
  key: string
  competition_instance_id: number | null
  starts_at: string
  ends_at: string
  url: string | null
  url_target: string | null
}

export interface Game {
  key: string
  name: string
  status: 'upcoming' | 'ongoing' | 'completed'
  rounds: GameRound[]
  url: string
  max_players: number
  player_count: number
  waitlist_url: string
  join_url: string
}

export interface GameState {
  game: Game | null
  loading: boolean
  error: ApiError | null
}

export interface ApiError {
  message: string
  statusCode?: number
  statusMessage?: string
}

export interface GameApiResponse extends Game {}
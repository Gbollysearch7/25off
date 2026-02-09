import type { GameApiResponse, GameState } from '~~/types/game'

export const useSurvivorShowdown = () => {
  const { t } = useI18n()
  const state = reactive<GameState>({
    game: null,
    loading: false,
    error: null
  })

  const fetchGame = async (): Promise<void> => {
    state.loading = true
    state.error = null

    try {
      state.game = await $fetch<GameApiResponse>('/landing-api/survivor-showdown')
    } catch (error: any) {
      console.error('Failed to fetch Survivor Showdown game:', error)
      
      state.error = {
        message: error.statusMessage || error.message || 'Failed to load Survivor Showdown game',
        statusCode: error.statusCode,
        statusMessage: error.statusMessage
      }
      
      state.game = null
    } finally {
      state.loading = false
    }
  }

  const refreshGame = async (): Promise<void> => {
    await fetchGame()
  }

  const clearError = (): void => {
    state.error = null
  }

  // Calculate available spots
  const availableSpots = computed(() => {
    if (!state.game) return 0
    return state.game.max_players - state.game.player_count
  })

  // Join button text based on game status and available spots
  const getJoinButtonText = () => {
    if (state.loading) return t('pages.survivorShowdown.joinButton.loading')
    if (state.error || !state.game) return t('pages.survivorShowdown.joinButton.registrationClosed')
    
    const spots = availableSpots.value
    if (spots <= 0) return t('pages.survivorShowdown.joinButton.joinWaitlist')
    
    return t('pages.survivorShowdown.joinButton.joinWithSpots', { spots })
  }

  // Join button URL
  const joinButtonUrl = computed(() => {
    if (!state.game) return '#'
    return availableSpots.value > 0 ? state.game.join_url : state.game.waitlist_url
  })

  return {
    // Reactive state
    game: readonly(toRef(state, 'game')),
    loading: readonly(toRef(state, 'loading')),
    error: readonly(toRef(state, 'error')),
    
    // Computed values
    availableSpots,
    joinButtonUrl,
    
    // Actions
    fetchGame,
    refreshGame,
    clearError,
    getJoinButtonText
  }
}
import type { Competition, CompetitionState, ApiError, CompetitionsApiResponse } from '~~/types/competition'

export const useCompetitions = () => {
  const state = reactive<CompetitionState>({
    competitions: [],
    loading: false,
    error: null
  })

  const fetchCompetitions = async (status?: string): Promise<void> => {
    state.loading = true
    state.error = null

    try {
      const queryParams = status ? { status } : {}
      
      const response = await $fetch<CompetitionsApiResponse>('/landing-api/competitions', {
        query: queryParams
      })

      state.competitions = response.data
    } catch (error: any) {
      console.error('Failed to fetch competitions:', error)
      
      state.error = {
        message: error.statusMessage || error.message || 'Failed to load competitions',
        statusCode: error.statusCode,
        statusMessage: error.statusMessage
      }
      
      state.competitions = []
    } finally {
      state.loading = false
    }
  }

  const refreshCompetitions = async (status?: string): Promise<void> => {
    await fetchCompetitions(status)
  }

  const clearError = (): void => {
    state.error = null
  }

  return {
    // Reactive state
    competitions: readonly(toRef(state, 'competitions')),
    loading: readonly(toRef(state, 'loading')),
    error: readonly(toRef(state, 'error')),
    
    // Actions
    fetchCompetitions,
    refreshCompetitions,
    clearError
  }
}
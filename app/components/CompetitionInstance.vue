<template>
	<div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl md:rounded-3xl p-3 md:p-4 space-y-4 dark:text-white relative overflow-hidden">
		<div class="space-y-2">
			<!-- Status -->
			<CompetitionStatus :status="competition.status" />

			<!-- Tournament Title -->
			<h3 class="text-2xl md:text-3xl font-clash font-semibold leading-tight">
				{{ competition.competition_definition.name }}
			</h3>
		</div>

		<!-- Reward Section -->
		<div class="space-y-1">
			<div class="text-gray-400 text-sm">
				{{ t("pages.tournaments.latest.reward") }}
			</div>
			<div class="text-lg font-semibold">
				{{ competition.competition_definition.prize }}
			</div>
		</div>

		<div class="bg-neutral-200 dark:bg-neutral-800 rounded-2xl md:rounded-2xl">
			<!-- Date Section -->
			<div class="grid grid-cols-2 gap-6 p-3">
				<div class="space-y-1">
					<div class="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
						{{ t("pages.tournaments.latest.startDate")}}
					</div>
					<div class="font-clash font-medium text-lg">
						{{ formatDateLong(competition.starts_at) }}
					</div>
				</div>
				<div class="space-y-1 text-right">
					<div class="text-neutral-600 dark:text-neutral-400 text-sm mb-1">
						{{ t("pages.tournaments.latest.endDate") }}
					</div>
					<div class="font-clash font-medium text-lg">
						{{ formatDateLong(competition.ends_at) }}
					</div>
				</div>
			</div>

			<!-- Timer and Participants -->
			<div class="grid grid-cols-2 gap-6 p-3">
				<div class="space-y-1">
					<div class="text-neutral-600 dark:text-neutral-400 text-sm">
						{{ timeLabel }}
					</div>
					<div class="font-clash text-2xl font-medium">
						{{ formattedTimeLeft }}
					</div>
				</div>
				<div class="space-y-1 text-right">
					<div class="text-neutral-600 dark:text-neutral-400 text-sm">
						{{ t("pages.tournaments.latest.participants") }}
					</div>
					<div class="font-clash text-2xl font-medium">
						{{ competition.competition_users_count.toLocaleString() }}
					</div>
				</div>
			</div>
		</div>

		<!-- Action Button -->
		<Button
			:href="`/tournaments/${competition.id}/rules-and-prizes`"
			target="_blank"
		>
			{{ t("pages.tournaments.latest.cta") }}
		</Button>
	</div>
</template>

<script setup lang="ts">
import type { Competition } from '~~/types/competition'
import CompetitionStatus from "~/components/CompetitionStatus.vue";

interface Props {
	competition: Competition
	startingBalance?: number
}

const { competition } = defineProps<Props>()

const { t } = useI18n()

const timeLabel = computed(() => {
	if (competition.status === 'upcoming') return t("pages.tournaments.latest.startsIn")

	return t("pages.tournaments.latest.endsIn")
})

const formatDateLong = (dateString: string): string => {
	return new Date(dateString).toLocaleDateString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZoneName: 'short'
	})
}

// Timer calculation
const timeLeft = ref('')

const calculateTimeLeft = () => {
	const now = new Date().getTime()
	const targetDate = competition.status === 'upcoming'
		? new Date(competition.starts_at).getTime()
		: new Date(competition.ends_at).getTime()
	
	const difference = targetDate - now
	
	if (difference > 0) {
		const days = Math.floor(difference / (1000 * 60 * 60 * 24))
		const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
		const seconds = Math.floor((difference % (1000 * 60)) / 1000)
		
		if (days > 0) {
			timeLeft.value = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
		} else {
			timeLeft.value = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
		}
	} else {
		timeLeft.value = '00:00:00'
	}
}

const formattedTimeLeft = computed(() => timeLeft.value)

// Update timer every second
let intervalId: NodeJS.Timeout | null = null

onMounted(() => {
	calculateTimeLeft()
	intervalId = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
	if (intervalId) {
		clearInterval(intervalId)
	}
})
</script>
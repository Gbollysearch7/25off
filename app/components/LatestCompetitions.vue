<template>
	<div class="space-y-8 md:space-y-16">
		<div class="flex flex-col justify-center items-center space-y-3">
			<ChipLabel>
				{{ t('pages.tournaments.latest.chip') }}
			</ChipLabel>
			<h2 class="dark:text-white font-clash text-center text-2xl sm:text-4xl md:text-5xl font-semibold">
				{{ t('pages.tournaments.latest.heading') }}
			</h2>
		</div>

		<!-- Loading State -->
		<div v-if="loading" class="flex items-center justify-center py-12">
			<IconLoader2 class="animate-spin text-primary size-16"/>
		</div>

		<!-- Error State -->
		<div v-else-if="error" class="flex flex-col gap-4 items-center justify-center py-12">
			<div class="dark:text-white text-xl font-medium">
				{{ t("pages.tournaments.latest.error.message") }}
			</div>
			<Button @click="refreshCompetitions()" variant="light" size="sm" :icon="IconReload">
				{{ t("pages.tournaments.latest.error.button") }}
			</Button>
		</div>

		<!-- Empty State -->
		<div v-else-if="competitions.length === 0" class="flex items-center justify-center py-12">
			<div class="dark:text-white text-xl font-medium">
				{{ t("pages.tournaments.latest.empty") }}
			</div>
		</div>

		<!-- Competitions Grid -->
		<div v-else class="grid lg:grid-cols-2 gap-6">
			<CompetitionInstance
				v-for="competition in competitions" 
				:key="competition.id"
				:competition="competition"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconLoader2, IconReload } from "@tabler/icons-vue";
import { useCompetitions } from "~~/composables/useCompetitions";
import CompetitionInstance from "~/components/CompetitionInstance.vue";

const { t } = useI18n()
const { competitions, loading, error, fetchCompetitions, refreshCompetitions } = useCompetitions()

onMounted(() => {
	fetchCompetitions('upcoming|ongoing')
})
</script>
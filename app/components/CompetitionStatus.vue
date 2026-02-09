<template>
	<div
		class="max-w-fit px-3 py-1.5 rounded-lg flex items-center"
		:class="{
			'bg-green-500 text-white': status === 'ongoing',
			'bg-blue-500 text-white': status === 'upcoming'
		}"
	>
		<div
			v-if="status === 'ongoing'"
			class="size-2 animate-pulse rounded-full bg-white mr-1"
		/>
		<div class="text-xs font-medium">
			{{ label[status] }}
		</div>
	</div>
</template>

<script setup lang="ts">
import type { Competition } from "~~/types/competition";
import { useI18n } from "#imports";

const { status } = defineProps<{
	status: Competition['status']
}>()

const { t } = useI18n()

const label = computed(() => ({
	ongoing: t('pages.tournaments.latest.status.ongoing'),
	upcoming: t('pages.tournaments.latest.status.upcoming'),
}))
</script>
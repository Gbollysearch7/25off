<template>
	<div class="rounded-3xl space-y-4">
		<div
			v-for="item in timeline"
			:key="item.year"
			class="py-4 rounded-xl flex flex-col justify-center bg-neutral-100 dark:bg-neutral-900 dark:text-white px-5 hover:bg-primary hover:text-white transition-colors"
		>
			<div class="text-xl font-semibold font-clash">{{ item.year }}</div>
			<div class="text-sm">{{ item.text }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const { t } = useI18n()

// Timeline data
const timeline = computed(() => [
	{
		year: "2015-2020",
		text: t('pages.about.timeline.2015')
	},
	{
		year: "2022",
		text: t('pages.about.timeline.2022')
	},
	{
		year: "2023",
		text: t('pages.about.timeline.2023')
	},
	{
		year: "2024",
		text: t('pages.about.timeline.2024')
	},
	{
		year: "2025",
		text: t('pages.about.timeline.2025')
	}
])
</script>
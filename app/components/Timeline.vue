<template>
	<div class="flex gap-6 p-6 rounded-3xl border border-neutral-200 bg-white dark:bg-neutral-900 dark:border-transparent">
		<div class="h-44 overflow-hidden w-full">
			<div ref="timelineContainer" class="space-y-4 transition-transform duration-300" :style="transformStyle">
				<div
					v-for="item in timeline"
					:key="item.year"
					class="rounded-xl h-20 flex flex-col justify-center bg-neutral-100 dark:bg-neutral-800 dark:text-white px-5 hover:bg-primary hover:text-white transition-colors"
				>
					<div class="text-lg font-semibold font-clash">{{ item.year }}</div>
					<div class="text-xs">{{ item.text }}</div>
				</div>
			</div>
		</div>

		<div class="space-y-2">
			<button
				@click="scrollUp"
				:disabled="canScrollUp"
				class="size-9 rounded-full dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-all duration-200 disabled:opacity-50"
			>
				<IconArrowUp :size="20" />
			</button>
			<button
				@click="scrollDown"
				:disabled="canScrollDown"
				class="size-9 rounded-full dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center justify-center transition-all duration-200 disabled:opacity-50"
			>
				<IconArrowDown :size="20" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconArrowUp, IconArrowDown } from "@tabler/icons-vue";
import { ref, computed } from "vue";

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

const timelineContainer = ref<HTMLElement | null>(null)
const currentIndex = ref(0)
const visibleCount = 2

const transformStyle = computed(() => ({
	transform: `translateY(-${currentIndex.value * 96}px)`
}))

const canScrollUp = computed(() => currentIndex.value <= 0)
const canScrollDown = computed(() => currentIndex.value >= timeline.value.length - visibleCount)

function scrollUp() {
	if (currentIndex.value > 0) {
		currentIndex.value--
	}
}

function scrollDown() {
	if (currentIndex.value < timeline.value.length - visibleCount) {
		currentIndex.value++
	}
}
</script>
<template>
	<Container class="pt-20 space-y-10 md:space-y-32">
		<div class="flex flex-col items-center justify-center -space-y-4 lg:-space-y-36">
			<div class="relative z-10 space-y-2">
				<div class="text-center">
					<img class="mx-auto h-10" src="/landing/survivor-showdown/gbe-broker.webp" alt="gbe broker">
				</div>
				<h1 class="font-clash text-center text-white font-semibold text-5xl xl:text-7xl">
					{{ t('pages.survivorShowdown.heading') }}
				</h1>
			</div>

			<div>
				<img class="object-contain" src="/landing/survivor-showdown/warriors.webp" alt="">
			</div>

			<div class="flex flex-col items-center justify-center space-y-10">
				<h3 class="relative z-10 font-clash text-center text-white font-semibold text-2xl xl:text-4xl">
					{{ t('pages.survivorShowdown.description') }}
				</h3>
				<SocialProof />
			</div>
		</div>

		<CompanyLogos />

		<!-- Intro Section -->
		<div class="flex flex-col gap-8 justify-center items-center bg-primary rounded-3xl p-8">
			<p class="text-white text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-clash font-medium leading-relaxed">
				{{ t('pages.survivorShowdown.intro.text') }}
			</p>

			<Button
				:href="joinButtonUrl"
				target="_blank"
				variant="light"
			>
				{{ joinButtonText }}
			</Button>
		</div>

		<!-- Prize Structure Section -->
		<div class="space-y-8">
			<div class="flex flex-col justify-center items-center space-y-6 text-center">
				<h2 class="dark:text-white font-clash text-3xl text-center sm:text-4xl md:text-5xl font-semibold">
					{{ t('pages.survivorShowdown.prizes.mainHeading') }}
				</h2>
				<h3 class="dark:text-white font-clash text-xl text-center sm:text-2xl md:text-3xl font-semibold">
					{{ t('pages.survivorShowdown.prizes.subHeading') }}
				</h3>
				<p class="dark:text-neutral-300 text-neutral-700 max-w-4xl leading-relaxed">
					{{ t('pages.survivorShowdown.prizes.description') }}
				</p>
			</div>

			<div class="overflow-x-auto space-y-2">
				<!-- Table Header -->
				<div class="bg-neutral-100 rounded-xl sm:rounded-2xl dark:bg-neutral-900 grid grid-cols-4 bg-primary-500">
					<div
						v-for="header in headers"
						:key="header.key"
						class="p-2 sm:p-4 text-center font-clash dark:text-white font-medium sm:text-lg"
					>
						{{ header.label }}
					</div>
				</div>

				<!-- Prize Rows -->
				<div
					v-for="prize in prizes"
					:key="prize.key"
					:class="[
						'grid grid-cols-4 rounded-xl sm:rounded-2xl',
						prize.bgClass
					]"
				>
					<div :class="['p-2 sm:p-4 text-center font-medium sm:text-lg font-clash', prize.textClass]">
						{{ prize.place }}
					</div>
					<div class="p-2 sm:p-4 text-center text-neutral-900 dark:text-white">
						{{ prize.cash }}
					</div>
					<div class="p-2 sm:p-4 text-center text-neutral-900 dark:text-white">
						{{ prize.challenge }}
					</div>
					<div :class="['p-2 sm:p-4 text-center font-semibold', prize.textClass]">
						{{ prize.total }}
					</div>
				</div>
			</div>
		</div>

		<!-- How It Works Section -->
		<div class="space-y-8">
			<div class="flex flex-col justify-center items-center space-y-3">
				<h2 class="dark:text-white font-clash text-3xl text-center sm:text-4xl md:text-5xl font-semibold">
					{{ t('pages.survivorShowdown.howItWorks.heading') }}
				</h2>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
				<div
					v-for="step in howItWorksSteps"
					:key="step.key"
					class="relative overflow-hidden rounded-2xl p-4 bg-neutral-100 dark:bg-neutral-900"
				>
					<div class="text-2xl mb-2 font-medium font-clash text-neutral-900 dark:text-white">
						{{ step.title }}
					</div>
					<div class="text-sm text-neutral-700 dark:text-neutral-300">
						{{ step.description }}
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import SocialProof from "~/components/SocialProof.vue";
import CompanyLogos from "~/components/CompanyLogos.vue";
import { useSurvivorShowdown } from "~~/composables/useSurvivorShowdown";

const { t } = useI18n()

const { 
  joinButtonUrl, 
  fetchGame, 
  getJoinButtonText 
} = useSurvivorShowdown()

// Computed join button text
const joinButtonText = computed(() => getJoinButtonText())

// Fetch game data on component mount
onMounted(() => {
  fetchGame()
})

useHead({
	title: t('pages.survivorShowdown.title')
})

const headers = computed(() => [
	{ key: 'place', label: t('pages.survivorShowdown.prizes.headers.place') },
	{ key: 'cash', label: t('pages.survivorShowdown.prizes.headers.cash') },
	{ key: 'challenge', label: t('pages.survivorShowdown.prizes.headers.challenge') },
	{ key: 'total', label: t('pages.survivorShowdown.prizes.headers.total') }
])

const prizes = computed(() => [
	{
		key: 'first',
		place: t('pages.survivorShowdown.prizes.firstPlace.title'),
		cash: t('pages.survivorShowdown.prizes.firstPlace.cash'),
		challenge: t('pages.survivorShowdown.prizes.firstPlace.challenge'),
		total: '€3749',
		bgClass: 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20',
		textClass: 'text-yellow-600 dark:text-yellow-400'
	},
	{
		key: 'second',
		place: t('pages.survivorShowdown.prizes.secondPlace.title'),
		cash: t('pages.survivorShowdown.prizes.secondPlace.cash'),
		challenge: t('pages.survivorShowdown.prizes.secondPlace.challenge'),
		total: '€1799',
		bgClass: 'bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20',
		textClass: 'text-gray-600 dark:text-gray-400'
	},
	{
		key: 'third',
		place: t('pages.survivorShowdown.prizes.thirdPlace.title'),
		cash: t('pages.survivorShowdown.prizes.thirdPlace.cash'),
		challenge: t('pages.survivorShowdown.prizes.thirdPlace.challenge'),
		total: '€649',
		bgClass: 'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
		textClass: 'text-orange-600 dark:text-orange-400'
	},
	{
		key: 'fourth',
		place: t('pages.survivorShowdown.prizes.fourthToTenth.title'),
		cash: t('pages.survivorShowdown.prizes.fourthToTenth.cash'),
		challenge: t('pages.survivorShowdown.prizes.fourthToTenth.challenge'),
		total: '€49 each',
		bgClass: 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
		textClass: 'text-blue-600 dark:text-blue-400'
	}
])

const howItWorksSteps = computed(() => [
	{
		key: 'stages',
		title: t('pages.survivorShowdown.howItWorks.stages.title'),
		description: t('pages.survivorShowdown.howItWorks.stages.description')
	},
	{
		key: 'tradingDays',
		title: t('pages.survivorShowdown.howItWorks.tradingDays.title'),
		description: t('pages.survivorShowdown.howItWorks.tradingDays.description')
	},
	{
		key: 'gamingDays',
		title: t('pages.survivorShowdown.howItWorks.gamingDays.title'),
		description: t('pages.survivorShowdown.howItWorks.gamingDays.description')
	},
	{
		key: 'eliminations',
		title: t('pages.survivorShowdown.howItWorks.eliminations.title'),
		description: t('pages.survivorShowdown.howItWorks.eliminations.description')
	}
])
</script>
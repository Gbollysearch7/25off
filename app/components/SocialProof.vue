<template>
	<div class="relative z-10 flex flex-col gap-4 sm:gap-0 sm:flex-row items-center sm:divide-x dark:divide-neutral-800 rtl:sm:divide-x-reverse">
		<!-- Stacked Trader Avatars -->
		<div class="sm:pr-12 rtl:sm:pr-0 rtl:sm:pl-12 flex items-center justify-center">
			<div class="flex -space-x-2 rtl:space-x-reverse rtl:-space-x-2">
				<div v-for="avatar in avatars" :key="avatar">
					<img
						:src="avatar"
						:alt="$t('common.accessibility.traderAvatar')"
						class="size-9 rounded-full border border-neutral-100 dark:border-neutral-900"
						width="36"
						height="36"
						loading="eager"
					>
				</div>
			</div>
			<div class="ml-4 rtl:ml-0 rtl:mr-4 text-sm text-neutral-600 dark:text-neutral-400" v-html="$t('pages.home.hero.tradersAlreadyFunded')">
			</div>
		</div>

		<!-- Trustpilot Widget -->
		<div>
			<TrustpilotWidget key="hero" />
		</div>
	</div>
</template>

<script setup lang="ts">
const avatars = [
	"/landing/trader-avatars/trader-01.webp",
	"/landing/trader-avatars/trader-02.webp",
	"/landing/trader-avatars/trader-03.webp"
]
</script>
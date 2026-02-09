<template>
	<div class="space-y-16">
		<div class="flex flex-col items-center space-y-4">
			<ChipLabel>
				{{ $t('pages.about.footprint.chip') }}
			</ChipLabel>
			<h1 class="dark:text-white text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold">
				{{ $t('pages.about.footprint.heading') }}
			</h1>
			<p class="dark:text-neutral-400 text-neutral-600 text-center font-medium text-sm sm:text-base">
				{{ $t('pages.about.footprint.description') }}
			</p>
		</div>
		<div class="space-y-4">
			<div class="flex justify-center flex-wrap gap-8">
				<div v-for="(color, key) in countries" :key="key" class="flex items-center gap-3">
					<div class="shrink-0 size-4 rounded-full" :class="color" />
					<div class="dark:text-white font-medium min-w-fit">
						{{ $t(`pages.about.footprint.countries.${key}`)}}
					</div>
				</div>
			</div>

			<!-- World map SVGs are 634KB each! Using Weserv to convert to WebP (~50KB) -->
			<div>
				<img 
					v-if="theme === 'dark'" 
					class="w-full" 
					:src="darkMapSrc" 
					alt="World map showing TradersYard global presence"
					loading="lazy"
					decoding="async"
				>
				<img 
					v-else 
					class="w-full" 
					:src="lightMapSrc" 
					alt="World map showing TradersYard global presence"
					loading="lazy"
					decoding="async"
				>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

import { useTheme } from "~~/composables/useTheme";

const { theme } = useTheme()

// Production URL for Weserv CDN
const prodBaseUrl = 'https://tradersyard.com'
const isDev = process.dev

// Use pre-optimized WebP versions (634KB SVG → 16KB WebP each!)
const darkMapSrc = '/world-map.webp'
const lightMapSrc = '/world-map-light.webp'

const countries = {
	"au": "bg-[#E64B3B]",
	"pl": "bg-[#A4D3C6]",
	"ua": "bg-[#FFC757]",
	"in": "bg-[#FF9F47]",
	"az": "bg-[#2C5C9F]",
	"pa": "bg-[#16A34A]",
	"de": "bg-[#5865F2]",
	"sa": "bg-[#461303]",
	"us": "bg-[#3FA3E1]",
	"is": "bg-[#7E83BA]"
}
</script>
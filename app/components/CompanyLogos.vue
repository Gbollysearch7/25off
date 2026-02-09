<template>
	<div class="grid grid-cols-2 lg:flex gap-10 lg:gap-16 items-center justify-center">
		<div v-for="company in companyLogos" :key="company.key">
			<img 
				:src="company.src" 
				:alt="company.key" 
				class="invert dark:invert-[0%] lg:h-12 h-8 w-auto"
				:width="company.width"
				:height="company.height"
				loading="lazy"
				decoding="async"
			>
		</div>
	</div>
</template>

<script setup lang="ts">

const companyLogos = [
	{
		key: "fintech-magnates",
		src: "/landing/company-logos/fintech-magnates.svg",
		width: 150,
		height: 48
	},
	{
		key: "traders",
		src: "/landing/company-logos/traders.svg",
		width: 120,
		height: 48
	},
	{
		key: "yahoo-finance",
		src: "/landing/company-logos/yahoo-finance.svg",
		width: 140,
		height: 48
	},
	{
		key: "ceo-weekly",
		src: "/landing/company-logos/ceo-weekly.png",
		width: 130,
		height: 48
	},
	{
		key: "benzinga",
		src: "/landing/company-logos/benzinga.png",
		width: 140,
		height: 48
	}
]

</script>
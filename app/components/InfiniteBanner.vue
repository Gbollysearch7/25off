<template>
	<div class="banner-container overflow-hidden bg-gradient-to-r bg-primary py-3">
		<div class="banner-scroll flex gap-6 md:gap-12 animate-scroll whitespace-nowrap">
			<div v-for="i in repeat" :key="i" class="banner-item flex items-center w-fit">
				<slot />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	repeat: number
}>()
</script>

<style scoped>
@keyframes scroll {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(-50%);
	}
}

.animate-scroll {
	animation: scroll 30s linear infinite;
}

/* Pause animation on hover for better UX */
.banner-container:hover .animate-scroll {
	animation-play-state: paused;
}
</style>
<template>
	<div class="space-y-10 md:space-y-32">
		<Hero />

		<PayoutsSlider />

		<VideoIntro />

		<HowItWorks />

		<Products />

		<AvailablePaymentMethods />

		<Reviews />

		<DiscordServer />

		<FAQ />
	</div>
</template>

<script setup>
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

// Initialize scroll reveal animations
useScrollReveal();

useHead({
  title: t("pages.home.title"),
});
</script>

<template>
	<Container class="space-y-8">
    <h2
      class="scroll-reveal fade-up text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold dark:text-white"
    >
      {{ t("paymentMethods.heading") }}
		</h2>

		<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
			<div
        v-for="(method, index) in optimizedPaymentMethods"
				:key="method.name"
        class="scroll-reveal zoom-in w-full rounded-lg bg-neutral-100 flex items-center justify-center px-6 h-16 dark:bg-neutral-900 hover:scale-105 transition-transform"
        :class="[`delay-${Math.min((index + 1) * 100, 500)}`]"
			>
				<img 
					:src="method.src" 
					:alt="method.name" 
					class="h-8 object-contain"
					loading="lazy"
					decoding="async"
					width="100"
					height="32"
        />
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
const { t } = useI18n();

// Pre-optimized WebP payment method icons (served directly)
const paymentMethods: Record<string, string> = {
  bitcoin: "/landing/payment-methods/bitcoin.webp",
  ethereum: "/landing/payment-methods/ethereum.webp",
  ripple: "/landing/payment-methods/ripple.webp",
  solana: "/landing/payment-methods/solana.webp",
  doge: "/landing/payment-methods/doge.webp",
  mastercard: "/landing/payment-methods/mastercard.webp",
  visa: "/landing/payment-methods/visa.webp",
  skrill: "/landing/payment-methods/skrill.webp",
};

// Simple mapping for template
const optimizedPaymentMethods = computed(() => {
	return Object.entries(paymentMethods).map(([name, src]) => ({
		name,
    src,
  }));
});
</script>

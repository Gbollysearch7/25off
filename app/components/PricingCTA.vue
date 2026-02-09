<template>
	<div class="flex flex-col lg:flex-row justify-center items-center mt-8">
		<div class="lg:order-1 order-2 w-full">
			<Button
				href="/get-funded"
				class="w-full flex items-center justify-between gap-3 py-4"
			>
				<span>{{ $t('products.cta.button') }}</span>
				<IconCircleArrowUpRightFilled :size="32" />
			</Button>
		</div>
		
		<div class="lg:order-2 order-1 w-full flex items-center justify-center mb-8 md:mb-0 gap-4">
			<span class="font-clash text-neutral-500 line-through text-xl">€{{ originalPrice }}</span>
			<span class="font-clash dark:text-white text-5xl font-semibold">${{ currentPrice }}</span>
			<span class="text-sm text-neutral-400">{{ $t('products.cta.moneyBackGuarantee') }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconCircleArrowUpRightFilled } from '@tabler/icons-vue'

const props = defineProps<{
	accountSize: number
	phase: string
}>()

const pricingMap = {
	'1-phase': {
		5000: { current: 99, original: 149 },
		10000: { current: 159, original: 199 },
		20000: { current: 299, original: 349 },
		50000: { current: 499, original: 599 },
		100000: { current: 799, original: 899 }
	},
	'2-phase': {
		5000: { current: 79, original: 129 },
		10000: { current: 139, original: 179 },
		20000: { current: 259, original: 309 },
		50000: { current: 459, original: 549 },
		100000: { current: 759, original: 849 }
	}
}

const currentPrice = computed(() => {
	return pricingMap[props.phase as keyof typeof pricingMap]?.[props.accountSize as keyof typeof pricingMap[1]]?.current || 99
})

const originalPrice = computed(() => {
	return pricingMap[props.phase as keyof typeof pricingMap]?.[props.accountSize as keyof typeof pricingMap[1]]?.original || 149
})
</script>
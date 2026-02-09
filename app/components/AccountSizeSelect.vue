<template>
	<div class="space-y-4">
		<h3 class="font-clash text-xl font-medium dark:text-white mb-6">
			{{ t('accountSelect.heading') }}
		</h3>
		
		<div class="grid m:grid-cols-5 gap-3">
			<button
				v-for="size in accountSizes"
				:key="size.value"
				@click="selectSize(size.value)"
				:class="[
					'flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer transition-all font-semibold',
					selectedSize === size.value 
						? 'bg-primary text-white'
						: 'bg-neutral-100 dark:bg-neutral-800 dark:text-white'
				]"
			>
				<div class="font-clash text-semibold text-xl">{{ size.label }}</div>

				<IconCircleDotFilled v-if="selectedSize === size.value" :size="20" />
				<IconCircle v-else :size="20" class="dark:text-neutral-600 text-neutral-400" />
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconCircle, IconCircleDotFilled } from '@tabler/icons-vue'

const { t } = useI18n()

const props = defineProps<{
	modelValue: number
}>()

const emit = defineEmits<{
	'update:modelValue': [value: number]
}>()

const accountSizes = [
	{ value: 5000, label: '$5K' },
	{ value: 10000, label: '$10K' },
	{ value: 20000, label: '$20K' },
	{ value: 50000, label: '$50K' },
	{ value: 100000, label: '$100' }
]

const selectedSize = computed({
	get: () => props.modelValue,
	set: (value) => emit('update:modelValue', value)
})

const selectSize = (size: number) => {
	selectedSize.value = size
}
</script>
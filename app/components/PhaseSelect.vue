<template>
	<div class="space-y-4">
		<h3 class="font-clash text-xl font-medium dark:text-white mb-6">Select your challenge account</h3>
		
		<div class="grid grid-cols-2 gap-4">
			<div
				v-for="product in products"
				:key="product.key"
				:class="[
					'flex justify-between p-6 rounded-2xl cursor-pointer transition-all',
					selectedPhase === product.key
						? 'bg-primary text-white'
						: 'bg-neutral-100 dark:bg-neutral-800'
				]"
				@click="selectPhase(product.key)"
			>
				<div>
					<div class="font-clash text-2xl font-semibold dark:text-white">
						{{ product.name }}
					</div>
					<div :class="selectedPhase === product.key ? 'text-neutral-200' : 'text-neutral-400'">
						{{ product.description }}
					</div>
				</div>
				<div class="flex items-center gap-3 mb-2">
					<IconCircleDotFilled
						v-if="selectedPhase === product.key"
						:size="24"
						class="text-white"
					/>
					<IconCircle v-else class="dark:text-neutral-600 text-neutral-400" :size="24" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconCircle, IconCircleDotFilled } from '@tabler/icons-vue'

const props = defineProps<{
	modelValue: string
}>()

const emit = defineEmits<{
	'update:modelValue': [value: string]
}>()

const selectedPhase = computed({
	get: () => props.modelValue,
	set: (value) => emit('update:modelValue', value)
})

const products = computed(() => [
	{
		key: "1-phase",
		name: "1 Phase",
		description: "Perfect for new traders"
	},
	{
		key: "2-phase",
		name: "2 Phase",
		description: "For experienced traders"
	}
])

const selectPhase = (phase: string) => {
	selectedPhase.value = phase
}
</script>
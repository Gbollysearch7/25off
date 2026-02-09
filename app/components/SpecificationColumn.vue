<template>
	<div class="font-medium flex items-center gap-2">
		<IconInfoCircle
			v-if="tooltip"
			class="w-4 h-4 text-neutral-600 dark:text-neutral-400 cursor-help"
			:title="tooltip"
		/>
		<slot />
	</div>
</template>

<script setup lang="ts">
import { IconInfoCircle } from '@tabler/icons-vue'

defineProps<{
	tooltip?: string
}>()
</script>
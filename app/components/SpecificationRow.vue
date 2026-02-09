<template>
	<div class="grid grid-cols-4 rounded-xl px-4 py-3 bg-neutral-100 dark:bg-neutral-800 dark:text-white">
		<div class="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
			<slot name="label" />
		</div>
		<div class="font-medium">
			<slot name="phase1" />
		</div>
		<div class="font-medium">
			<slot name="phase2" />
		</div>
		<div class="font-medium">
			<slot name="funded" />
		</div>
	</div>
</template>

<script setup lang="ts">
// No props needed - everything comes through slots
</script>
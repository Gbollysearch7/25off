<template>
	<div class="space-y-4 text-center">
		<h1 class="font-clash text-center dark:text-white font-semibold text-4xl xl:text-5xl">
			<slot />
		</h1>
		<p class="mx-auto font-medium text-lg xl:text-xl text-neutral-600 dark:text-neutral-400">
			<slot name="text" />
		</p>
	</div>
</template>

<script setup lang="ts">

</script>
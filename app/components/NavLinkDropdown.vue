<template>
	<div
		class="border border-neutral-200 dark:border-neutral-900 absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-lg p-1 z-50"
	>
		<component
			v-for="item in items"
			:key="item.key"
			:is="item.href ? 'a' : NuxtLink"
			v-bind="item.href
		    ? { href: item.href, target: item.external ? '_blank' : '_self', rel: 'noopener noreferrer' }
		    : { to: item.to }"
					class="cursor-pointer group flex items-center justify-between px-2 py-1 rounded-md text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-primary hover:text-white dark:hover:text-white transition-colors duration-200"
				>
					<span class="pointer-events-none">{{ item.label }}</span>

					<IconCircleArrowUpRightFilled
						v-if="item.external"
						class="opacity-0 group-hover:opacity-100 transition-opacity"
					/>
		</component>
	</div>
</template>

<script setup lang="ts">
import { IconCircleArrowUpRightFilled } from "@tabler/icons-vue"
import { NuxtLink } from "#components";

defineProps<{
	items: {
		label: string
		href?: string
		to?: string
		key: string,
		external?: boolean
	}[]
}>()

</script>
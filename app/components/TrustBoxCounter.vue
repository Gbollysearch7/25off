<template>
	<div
		class="trustpilot-count"
		data-locale="en-US"
		data-template-id="5419b732fbfb950b10de65e5"
		data-businessunit-id="635a8c09a788ce9b49e05562"
		data-style-height="24px"
		data-style-width="100%"
		data-token="500303d8-0d36-4288-b070-3fa6fb8575e8"
	>
		<a href="https://www.trustpilot.com/review/tradersyard.com" target="_blank" rel="noopener">Trustpilot</a>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Function to initialize widget
const initializeWidget = () => {
	if (typeof window !== 'undefined' && (window as any).Trustpilot) {
		const widgetElement = document.querySelector('.trustpilot-count')
		if (widgetElement) {
			(window as any).Trustpilot.loadFromElement(widgetElement)
		}
	}
}

onMounted(() => {
	initializeWidget()
})
</script>
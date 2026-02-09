<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Theme initialization is now handled in the default layout

// RTL support for Arabic
const { locale, locales } = useI18n()

// Set the document direction based on locale
const setDocumentDirection = () => {
  const currentLocale = locales.value.find(l => l.code === locale.value)
  const direction = currentLocale?.dir || 'ltr'
  
  if (process.client) {
    document.documentElement.setAttribute('dir', direction)
    document.documentElement.setAttribute('lang', locale.value)
  }
}

// Watch for locale changes
watch(locale, () => {
  setDocumentDirection()
})

// Set initial direction
onMounted(() => {
  setDocumentDirection()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(.75rem);
}
</style>
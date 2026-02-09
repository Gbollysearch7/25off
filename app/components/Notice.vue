<template>
  <Teleport to="body">
    <Transition
      name="slide-up"
      appear
    >
      <div
        v-if="showNotice"
        class="pl-4 pr-2 py-2 flex flex-col md:flex-row items-start md:items-center gap-4 rounded-xl fixed bottom-2 md:bottom-4 left-2 right-2 md:right-auto md:left-4 z-50 bg-white border border-neutral-200 dark:bg-neutral-900 dark:border-neutral-800 dark:text-white"
      >
	      <p class="text-xs">
		      {{ t('notice.text') }}
	      </p>
	      <Button
		      @click="dismissNotice"
		      variant="dark"
		      aria-label="Dismiss notice"
		      size="xs"
	      >
		      {{ t('notice.button') }}
	      </Button>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";

const NOTICE_DISMISSED_KEY = 'tradersyard-notice-dismissed'

const showNotice = ref(false)

const { t } = useI18n()

onMounted(() => {
  // Check if notice was previously dismissed
  const isDismissed = localStorage.getItem(NOTICE_DISMISSED_KEY) === 'true'
  
  if (!isDismissed) {
    // Show notice after 3 seconds
    setTimeout(() => {
      showNotice.value = true
    }, 3000)
  }
})

const dismissNotice = () => {
  showNotice.value = false
  localStorage.setItem(NOTICE_DISMISSED_KEY, 'true')
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
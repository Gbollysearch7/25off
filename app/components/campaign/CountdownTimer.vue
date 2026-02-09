<template>
  <div v-if="!isExpired" class="flex gap-3 sm:gap-4 justify-center">
    <div v-for="unit in timeUnits" :key="unit.label" class="text-center">
      <div class="bg-campaign text-white rounded-xl px-3 py-2.5 sm:px-5 sm:py-4 font-clash text-2xl sm:text-3xl md:text-5xl font-semibold min-w-[60px] sm:min-w-[80px] md:min-w-[100px] tabular-nums">
        {{ unit.value }}
      </div>
      <div class="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-medium uppercase tracking-wider">
        {{ unit.label }}
      </div>
    </div>
  </div>
  <div v-else class="text-center">
    <div class="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl px-6 py-3">
      <span class="text-neutral-600 dark:text-neutral-400 font-clash font-medium">This offer has ended.</span>
      <a href="https://tradersyard.com/#pricing" class="text-campaign font-clash font-semibold hover:underline">See current challenges &rarr;</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { CAMPAIGN_CONFIG } from '~/data/gift-a-challenge'

const now = ref(Date.now())
let interval: ReturnType<typeof setInterval> | null = null

const endDate = new Date(CAMPAIGN_CONFIG.endDate).getTime()

const isExpired = computed(() => now.value >= endDate)

const remaining = computed(() => {
  const diff = Math.max(0, endDate - now.value)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
})

const pad = (n: number) => String(n).padStart(2, '0')

const timeUnits = computed(() => [
  { label: 'Days', value: pad(remaining.value.days) },
  { label: 'Hours', value: pad(remaining.value.hours) },
  { label: 'Minutes', value: pad(remaining.value.minutes) },
  { label: 'Seconds', value: pad(remaining.value.seconds) },
])

onMounted(() => {
  interval = setInterval(() => {
    now.value = Date.now()
    // Stop ticking once expired
    if (isExpired.value && interval) {
      clearInterval(interval)
      interval = null
    }
  }, 1000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

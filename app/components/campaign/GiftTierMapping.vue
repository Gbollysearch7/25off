<template>
  <section class="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
    <Container>
      <div class="space-y-10">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              Gift Tiers
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            What Gift Does Your Purchase Unlock?
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Every challenge you buy unlocks a FREE challenge for someone you choose. The bigger your challenge, the bigger the gift.
          </p>
        </div>

        <!-- Desktop Table -->
        <div class="hidden md:block max-w-3xl mx-auto">
          <div class="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800">
            <table class="w-full">
              <thead>
                <tr class="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50">
                  <th class="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">Challenge Type</th>
                  <th class="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">You Buy</th>
                  <th class="text-center px-4 py-4"></th>
                  <th class="text-left px-6 py-4 text-xs font-semibold uppercase tracking-wider text-green-600 dark:text-green-400">They Get FREE</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="mapping in giftMappings"
                  :key="`${mapping.type}-${mapping.buyTier}`"
                  class="border-b border-neutral-100 dark:border-neutral-800 last:border-0 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/30"
                >
                  <td class="px-6 py-3.5 text-sm text-neutral-600 dark:text-neutral-400">{{ mapping.type }}</td>
                  <td class="px-6 py-3.5 text-sm font-semibold text-neutral-900 dark:text-white">{{ mapping.buyTier }}</td>
                  <td class="px-4 py-3.5 text-center">
                    <IconArrowRight class="w-4 h-4 text-campaign inline-block" />
                  </td>
                  <td class="px-6 py-3.5 text-sm font-semibold text-green-600 dark:text-green-400">{{ mapping.giftTier }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Mobile Cards -->
        <div class="md:hidden space-y-3 max-w-md mx-auto">
          <div
            v-for="mapping in giftMappings"
            :key="`mobile-${mapping.type}-${mapping.buyTier}`"
            class="bg-white dark:bg-neutral-900 rounded-xl p-4 ring-1 ring-neutral-200 dark:ring-neutral-800"
          >
            <div class="text-xs text-neutral-500 mb-2">{{ mapping.type }}</div>
            <div class="flex items-center gap-3">
              <div class="flex-1">
                <div class="text-xs text-neutral-500">You buy</div>
                <div class="font-clash font-semibold text-neutral-900 dark:text-white">{{ mapping.buyTier }}</div>
              </div>
              <IconArrowRight class="w-5 h-5 text-campaign flex-shrink-0" />
              <div class="flex-1 text-right">
                <div class="text-xs text-neutral-500">They get FREE</div>
                <div class="font-clash font-semibold text-green-600 dark:text-green-400">{{ mapping.giftTier }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { IconArrowRight } from '@tabler/icons-vue'
import { giftMappings } from '~/data/gift-a-challenge'
</script>

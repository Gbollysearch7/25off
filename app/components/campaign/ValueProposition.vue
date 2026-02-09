<template>
  <section class="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
    <Container>
      <div class="space-y-12">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              Double the Value
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            Two Accounts. One Purchase. Zero Catch.
          </h2>
        </div>

        <!-- Cards -->
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- What YOU Get -->
          <div class="bg-white dark:bg-neutral-900 rounded-3xl p-8 border-2 border-campaign relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-reveal">
            <div class="absolute -top-3 left-6 bg-campaign text-white text-[10px] font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
              You Get
            </div>
            <div class="space-y-5 mt-4">
              <h3 class="font-clash text-2xl font-semibold text-neutral-900 dark:text-white">
                Your Discounted Challenge
              </h3>
              <ul class="space-y-3">
                <li v-for="item in buyerBenefits" :key="item" class="flex items-start gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span class="text-neutral-700 dark:text-neutral-300 text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- What THEY Get -->
          <div class="bg-white dark:bg-neutral-900 rounded-3xl p-8 border-2 border-campaign/40 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl scroll-reveal" style="--delay: 100ms">
            <div class="absolute -top-3 left-6 bg-gradient-to-r from-campaign to-red-500 text-white text-[10px] font-semibold px-4 py-1 rounded-full uppercase tracking-wider">
              They Get (FREE)
            </div>
            <div class="space-y-5 mt-4">
              <h3 class="font-clash text-2xl font-semibold text-neutral-900 dark:text-white">
                Their FREE Gift Challenge
              </h3>
              <ul class="space-y-3">
                <li v-for="item in giftBenefits" :key="item" class="flex items-start gap-3">
                  <IconGift class="w-5 h-5 text-campaign flex-shrink-0 mt-0.5" />
                  <span class="text-neutral-700 dark:text-neutral-300 text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Heart connector + connecting text + CTA -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <svg class="w-10 h-10 text-campaign fill-current animate-heartbeat" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </div>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            You save 25%. They start for free. Both of you get a shot at funded capital.
          </p>
          <div class="pt-2">
            <Button variant="campaign" size="default" href="#pricing">
              Choose Your Challenge
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { IconCheck, IconGift } from '@tabler/icons-vue'

const buyerBenefits = [
  '25% off any challenge (CFD or Futures, any size)',
  'Full challenge account with all standard features',
  'Up to 95% profit split when funded',
  'No time limit to pass your evaluation',
  'Instant account delivery after purchase',
  'A unique gift code to share with someone',
]

const giftBenefits = [
  'A completely FREE lower-tier challenge account',
  'Full evaluation access with identical trading rules',
  'Same path to funded — pass, trade, earn',
  'Up to 95% profit split when funded',
  'No strings attached, no payment required',
]
</script>

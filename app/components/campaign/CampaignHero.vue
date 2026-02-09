<template>
  <section class="relative overflow-hidden py-12 md:py-24">
    <!-- Background gradient -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-campaign/5 via-campaign/3 to-transparent dark:from-campaign/10 dark:via-campaign/5" />

    <!-- Floating hearts background (decorative) -->
    <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg class="absolute top-10 left-[10%] w-6 h-6 text-campaign/10 fill-current animate-float" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <svg class="absolute top-32 right-[15%] w-8 h-8 text-campaign/8 fill-current animate-float" style="animation-delay: 2s" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <svg class="absolute bottom-20 left-[20%] w-5 h-5 text-campaign/6 fill-current animate-float" style="animation-delay: 4s" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
      <svg class="absolute bottom-32 right-[8%] w-4 h-4 text-campaign/10 fill-current animate-float" style="animation-delay: 6s" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    </div>

    <Container>
      <div class="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
        <!-- Chip -->
        <div class="inline-block">
          <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase transition-transform duration-300 hover:scale-105">
            Limited: Feb 9-18 Only
          </div>
        </div>

        <!-- Headline -->
        <h1 class="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-neutral-900 dark:text-white leading-tight">
          Buy a Challenge.<br />
          <span class="text-campaign">Gift One Free.</span>
        </h1>

        <!-- Subheadline — split into two clear lines for mobile readability -->
        <div class="space-y-1 max-w-2xl mx-auto">
          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Save 25% on any challenge with code <span class="font-semibold text-campaign">LOVE25</span>.
          </p>
          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
            We'll send a <span class="font-semibold">FREE</span> challenge to someone you choose.
          </p>
        </div>

        <!-- Promo Code Badge -->
        <div class="flex justify-center">
          <button
            @click="copyCode"
            class="inline-flex items-center gap-3 bg-campaign/10 dark:bg-campaign/20 border-2 border-campaign border-dashed rounded-xl px-6 py-3 transition-all duration-300 hover:bg-campaign/15 dark:hover:bg-campaign/25 group cursor-pointer"
          >
            <span class="text-campaign font-clash font-semibold text-2xl sm:text-3xl tracking-wider">LOVE25</span>
            <span class="text-campaign transition-transform duration-200 group-hover:scale-110">
              <IconCheck v-if="copied" class="w-5 h-5" />
              <IconCopy v-else class="w-5 h-5" />
            </span>
            <span v-if="copied" class="text-campaign text-sm font-medium">Copied!</span>
            <span v-else class="text-campaign/70 text-sm font-medium">Click to copy</span>
          </button>
        </div>

        <!-- Countdown Timer -->
        <div class="space-y-3">
          <p class="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-medium">Offer ends in</p>
          <CountdownTimer />
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <Button variant="campaign" size="lg" href="#pricing">
            Claim 25% Off Now
          </Button>
          <Button variant="dark" size="default" href="#how-it-works" :no-icon="true">
            See How It Works
          </Button>
        </div>

        <!-- Trust Badges — hide third badge on small mobile to reduce hero height -->
        <div class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-neutral-600 dark:text-neutral-400 pt-4">
          <div class="flex items-center gap-2">
            <IconPercentage class="w-5 h-5 text-campaign" />
            <span>25% Off All Challenges</span>
          </div>
          <div class="flex items-center gap-2">
            <IconGift class="w-5 h-5 text-campaign" />
            <span>Free Gift Account Included</span>
          </div>
          <div class="hidden sm:flex items-center gap-2">
            <IconClock class="w-5 h-5 text-campaign" />
            <span>Gift Code Within 48hrs</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconCopy, IconCheck, IconPercentage, IconGift, IconClock } from '@tabler/icons-vue'
import CountdownTimer from '~/components/campaign/CountdownTimer.vue'
import { CAMPAIGN_CONFIG } from '~/data/gift-a-challenge'

const copied = ref(false)

function copyCode() {
  navigator.clipboard.writeText(CAMPAIGN_CONFIG.promoCode)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

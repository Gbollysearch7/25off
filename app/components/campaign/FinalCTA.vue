<template>
  <section class="py-16 md:py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-campaign/5 via-campaign/8 to-campaign/5 dark:from-campaign/10 dark:via-campaign/15 dark:to-campaign/10" />

    <Container>
      <div class="text-center max-w-3xl mx-auto space-y-8">
        <!-- Headline -->
        <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
          This Offer Disappears February 18th
        </h2>

        <!-- Subtext -->
        <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
          25% off your challenge. A free account for someone you choose. Once it ends, full pricing returns and the gift mechanic goes away. Lock it in now.
        </p>

        <!-- Countdown -->
        <CountdownTimer />

        <!-- Primary CTA -->
        <div class="pt-2">
          <Button variant="campaign" size="lg" href="#pricing">
            Claim Your 25% Off Now
          </Button>
        </div>

        <!-- Trust micro-copy -->
        <div class="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
          <div class="flex items-center gap-1.5">
            <IconLock class="w-4 h-4" />
            <span>Secure Checkout</span>
          </div>
          <div class="flex items-center gap-1.5">
            <IconBolt class="w-4 h-4" />
            <span>Instant Account Delivery</span>
          </div>
          <div class="flex items-center gap-1.5">
            <IconClock class="w-4 h-4" />
            <span>Gift Code Within 48hrs</span>
          </div>
        </div>

        <!-- Secondary action for non-converters -->
        <div class="pt-4 border-t border-neutral-200 dark:border-neutral-800">
          <p class="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Not ready yet? Have questions?</p>
          <div class="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/tradersyard"
              target="_blank"
              class="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-campaign transition-colors"
            >
              <IconBrandDiscord class="w-5 h-5" />
              Ask us on Discord
            </a>
            <a
              href="https://tradersyard.com/support"
              target="_blank"
              class="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-campaign transition-colors"
            >
              <IconMessageCircle class="w-5 h-5" />
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { IconLock, IconBolt, IconClock, IconBrandDiscord, IconMessageCircle } from '@tabler/icons-vue'
import CountdownTimer from '~/components/campaign/CountdownTimer.vue'
</script>

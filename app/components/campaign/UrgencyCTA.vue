<template>
  <section class="py-14 md:py-20 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-campaign/5 via-campaign/8 to-campaign/5 dark:from-campaign/10 dark:via-campaign/15 dark:to-campaign/10" />

    <Container>
      <div class="text-center max-w-3xl mx-auto space-y-6">
        <!-- Headline -->
        <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
          This Offer Disappears February 18th
        </h2>

        <!-- Subtext -->
        <p class="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
          25% off your challenge + a free account for someone you choose. Once it ends, full pricing returns.
        </p>

        <!-- Countdown -->
        <CountdownTimer />

        <!-- CTA -->
        <div class="pt-2">
          <Button variant="campaign" size="lg" href="#pricing">
            Claim 25% Off Now
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import CountdownTimer from '~/components/campaign/CountdownTimer.vue'
</script>

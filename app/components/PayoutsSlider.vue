<template>
  <div class="relative overflow-hidden py-8">
    <!-- Slider Container -->
    <div class="hidden md:flex animate-slide gap-12">
      <div
        v-for="(image, index) in optimizedImages"
        :key="image.original"
        class="w-64 sm:w-[320px] shrink-0 snap-center md:snap-none"
      >
        <img
          class="w-full h-auto"
          :src="image.src"
          :loading="index < 5 ? 'eager' : 'lazy'"
          decoding="async"
          alt="Trader payout screenshot"
        />
      </div>
    </div>

    <!--	  Scroll Container - ALL lazy on mobile since it's below the fold -->
    <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory md:hidden">
      <div
        v-for="(image, index) in optimizedImages"
        :key="image.original + '-mobile'"
        class="w-64 sm:w-[320px] shrink-0 snap-center"
      >
        <img
          class="w-full h-auto"
          :src="image.src"
          loading="lazy"
          decoding="async"
          alt="Trader payout screenshot"
        />
      </div>
    </div>

    <!-- Left fade gradient -->
    <div
      class="absolute top-0 left-0 h-full w-16 md:w-32 bg-gradient-to-r from-white dark:from-dark to-transparent pointer-events-none z-10"
    ></div>

    <!-- Right fade gradient -->
    <div
      class="absolute top-0 right-0 h-full w-16 md:w-32 bg-gradient-to-l from-white dark:from-dark to-transparent pointer-events-none z-10"
    ></div>
  </div>
</template>

<script setup>
// Pre-optimized WebP payout images (served directly, no CDN needed)
const payoutImages = [
  "/landing/payouts/tss-payout-01.webp",
  "/landing/payouts/tss-payout-02.webp",
  "/landing/payouts/tss-payout-03.webp",
  "/landing/payouts/tournament-payout-02.webp",
  "/landing/payouts/tournament-payout-03.webp",
  "/landing/payouts/tournament-payout-01.webp",
  "/landing/payouts/tournament-payout-02.webp",
  "/landing/payouts/tournament-payout-03.webp",
  "/landing/payouts/tournament-payout-04.webp",
  "/landing/payouts/tournament-payout-05.webp",
  "/landing/payouts/tss-02-payout-01.webp",
  "/landing/payouts/tss-02-payout-02.webp",
  "/landing/payouts/tss-02-payout-03.webp",
  "/landing/payouts/payout-01.webp",
  "/landing/payouts/payout-02.webp",
  "/landing/payouts/payout-03.webp",
  "/landing/payouts/payout-04.webp",
  "/landing/payouts/payout-05.webp",
  "/landing/payouts/payout-06.webp",
  "/landing/payouts/payout-07.webp",
  "/landing/payouts/payout-08.webp",
  "/landing/payouts/payout-09.webp",
  "/landing/payouts/payout-10.webp",
  "/landing/payouts/payout-11.webp",
];

// Simple mapping for template
const optimizedImages = computed(() => {
  return payoutImages.map((path) => ({
    original: path,
    src: path,
  }));
});
</script>

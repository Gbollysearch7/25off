<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <Container class="py-16 md:py-24">
        <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
          <ChipLabel class="mb-6">
            CHOOSE YOUR PATH
          </ChipLabel>

          <h1 class="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold dark:text-white mb-6">
            Trading Challenges
            <span class="block text-primary">For Every Level</span>
          </h1>

          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            From $5,000 to $200,000 in trading capital. Pick your account size, pass our evaluation, and start earning 80% of your profits.
          </p>
        </div>
      </Container>

      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
    </section>

    <!-- Challenge Cards -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <!-- 5K Challenge -->
          <NuxtLink
            to="/challenges/5k"
            class="group bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02]"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded-full">BEGINNER</span>
            </div>
            <h3 class="font-clash text-2xl font-semibold dark:text-white mb-2">5K Challenge</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Perfect for testing the waters. Low risk entry point.</p>
            <div class="flex items-center justify-between">
              <span class="font-clash text-3xl font-semibold text-primary">$55</span>
              <span class="text-sm text-neutral-500">$5,000 capital</span>
            </div>
          </NuxtLink>

          <!-- 25K Challenge -->
          <NuxtLink
            to="/challenges/25k"
            class="group bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02]"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-medium text-blue-500 bg-blue-500/10 px-2 py-1 rounded-full">BEST VALUE</span>
            </div>
            <h3 class="font-clash text-2xl font-semibold dark:text-white mb-2">25K Challenge</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Best cost-to-capital ratio for serious beginners.</p>
            <div class="flex items-center justify-between">
              <span class="font-clash text-3xl font-semibold text-primary">$141</span>
              <span class="text-sm text-neutral-500">$25,000 capital</span>
            </div>
          </NuxtLink>

          <!-- 50K Challenge -->
          <NuxtLink
            to="/challenges/50k"
            class="group bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02]"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-medium text-purple-500 bg-purple-500/10 px-2 py-1 rounded-full">PART-TIME</span>
            </div>
            <h3 class="font-clash text-2xl font-semibold dark:text-white mb-2">50K Challenge</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Where part-time trading becomes real income.</p>
            <div class="flex items-center justify-between">
              <span class="font-clash text-3xl font-semibold text-primary">$225</span>
              <span class="text-sm text-neutral-500">$50,000 capital</span>
            </div>
          </NuxtLink>

          <!-- 100K Challenge - Featured -->
          <NuxtLink
            to="/challenges/100k"
            class="group bg-primary/10 border-2 border-primary rounded-2xl p-6 hover:bg-primary/20 transition-all hover:scale-[1.02] md:col-span-2 lg:col-span-1"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded-full">#1 BEST SELLER</span>
              <IconStar class="w-5 h-5 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 class="font-clash text-2xl font-semibold dark:text-white mb-2">100K Challenge</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">The account where pros trade. 71% pass rate.</p>
            <div class="flex items-center justify-between">
              <span class="font-clash text-3xl font-semibold text-primary">$283</span>
              <span class="text-sm text-neutral-500">$100,000 capital</span>
            </div>
          </NuxtLink>

          <!-- 200K Challenge -->
          <NuxtLink
            to="/challenges/200k"
            class="group bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.02] md:col-span-2 lg:col-span-2"
          >
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full">MAXIMUM CAPITAL</span>
              <span class="text-xs text-orange-500">For experienced traders</span>
            </div>
            <h3 class="font-clash text-2xl font-semibold dark:text-white mb-2">200K Challenge</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Our largest account for traders who want maximum earning potential. $16,000 profit targets.</p>
            <div class="flex items-center justify-between">
              <span class="font-clash text-3xl font-semibold text-primary">$488</span>
              <span class="text-sm text-neutral-500">$200,000 capital</span>
            </div>
          </NuxtLink>
        </div>
      </Container>
    </section>

    <!-- Quick Comparison -->
    <section class="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900">
      <Container>
        <div class="text-center mb-12">
          <h2 class="font-clash text-3xl sm:text-4xl font-semibold dark:text-white">
            Quick Comparison
          </h2>
        </div>

        <div class="max-w-5xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-neutral-200 dark:border-neutral-700">
                <th class="text-left py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Account</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Price</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Capital</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Phase 1 Target</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Avg Monthly Profit</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 font-medium dark:text-white">5K</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$55</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$5,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$400</td>
                <td class="py-4 px-4 text-center text-green-500">$400</td>
                <td class="py-4 px-4 text-center">
                  <NuxtLink to="/challenges/5k" class="text-primary hover:underline text-sm">View →</NuxtLink>
                </td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 font-medium dark:text-white">25K</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$141</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$25,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$2,000</td>
                <td class="py-4 px-4 text-center text-green-500">$1,600</td>
                <td class="py-4 px-4 text-center">
                  <NuxtLink to="/challenges/25k" class="text-primary hover:underline text-sm">View →</NuxtLink>
                </td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 font-medium dark:text-white">50K</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$225</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$50,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$4,000</td>
                <td class="py-4 px-4 text-center text-green-500">$3,200</td>
                <td class="py-4 px-4 text-center">
                  <NuxtLink to="/challenges/50k" class="text-primary hover:underline text-sm">View →</NuxtLink>
                </td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800 bg-primary/5">
                <td class="py-4 px-4 font-medium text-primary">100K ⭐</td>
                <td class="py-4 px-4 text-center font-semibold text-primary">$283</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$100,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$8,000</td>
                <td class="py-4 px-4 text-center font-semibold text-green-500">$6,400</td>
                <td class="py-4 px-4 text-center">
                  <NuxtLink to="/challenges/100k" class="text-primary hover:underline text-sm font-semibold">View →</NuxtLink>
                </td>
              </tr>
              <tr>
                <td class="py-4 px-4 font-medium dark:text-white">200K</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$488</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$200,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$16,000</td>
                <td class="py-4 px-4 text-center text-green-500">$12,800</td>
                <td class="py-4 px-4 text-center">
                  <NuxtLink to="/challenges/200k" class="text-primary hover:underline text-sm">View →</NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-center text-sm text-neutral-500 mt-6">
          All challenges include 80% profit split, no time limits, and instant account access.
        </p>
      </Container>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="text-center max-w-2xl mx-auto">
          <h2 class="font-clash text-3xl sm:text-4xl font-semibold dark:text-white mb-4">
            Not Sure Which to Choose?
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 mb-8">
            Start with the 100K — it's our best seller for a reason. Highest pass rate (71%), best cost-per-capital ratio, and meaningful profit potential.
          </p>
          <Button
            variant="primary"
            size="lg"
            href="/challenges/100k"
          >
            View 100K Challenge Details
          </Button>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import { IconStar } from "@tabler/icons-vue";

useHead({
  title: "Trading Challenges - Choose Your Account Size | TradersYard",
  meta: [
    {
      name: "description",
      content: "Choose from 5K to 200K trading challenges. Pass our evaluation, get funded, and keep 80% of your profits. No time limits. Instant access.",
    },
  ],
});
</script>

<template>
  <section class="py-16 md:py-24">
    <Container>
      <div class="space-y-12">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              Why TradersYard
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            Built for Serious Traders
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            We don't set you up to fail. TradersYard is designed so traders who are consistent and disciplined can get funded and get paid.
          </p>
        </div>

        <!-- USP Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            v-for="(usp, index) in usps"
            :key="usp.title"
            class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 scroll-reveal"
            :style="{ '--delay': `${index * 80}ms` }"
          >
            <div class="w-12 h-12 rounded-xl bg-campaign/10 dark:bg-campaign/20 flex items-center justify-center mb-4">
              <component :is="usp.icon" class="w-6 h-6 text-campaign" :stroke-width="1.5" />
            </div>
            <h3 class="font-clash font-semibold text-lg text-neutral-900 dark:text-white mb-2">
              {{ usp.title }}
            </h3>
            <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ usp.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import {
  IconCash,
  IconPercentage,
  IconClockHour4,
  IconShieldCheck,
  IconHeadset,
  IconChartLine,
} from '@tabler/icons-vue'

const usps = [
  {
    icon: IconPercentage,
    title: '95% Profit Split',
    description: 'Keep almost everything you earn. One of the highest splits in the industry — because the money should go to the trader.',
  },
  {
    icon: IconClockHour4,
    title: 'Payouts in Under 4 Hours',
    description: 'No waiting days or weeks. Request a payout and see it in your account the same day. We process withdrawals fast.',
  },
  {
    icon: IconShieldCheck,
    title: 'Transparent Rules',
    description: 'No hidden clauses, no surprise disqualifications. Our rules are public, clear, and the same for everyone. What you see is what you get.',
  },
  {
    icon: IconCash,
    title: 'No Recurring Fees',
    description: 'Pay once for your challenge. No monthly subscriptions, no platform fees, no data fees. One purchase, full access.',
  },
  {
    icon: IconChartLine,
    title: 'Accounts Up to $200K',
    description: 'Choose from $5K to $200K account sizes across CFD and Futures. Pick the capital that fits your trading style.',
  },
  {
    icon: IconHeadset,
    title: 'Real Human Support',
    description: 'Questions? Our support team responds in minutes — not days. Available via live chat, email, and Discord.',
  },
]
</script>

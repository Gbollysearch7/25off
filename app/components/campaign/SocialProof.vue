<template>
  <section class="py-16 md:py-24">
    <Container>
      <div class="space-y-12">
        <!-- Header -->
        <div class="text-center">
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            Trusted by Traders Worldwide
          </h2>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center scroll-reveal"
          >
            <div class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-campaign">
              {{ stat.value }}
            </div>
            <div class="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </Container>

    <!-- Reviews marquee — full width, overflows container -->
    <div class="mt-12 overflow-hidden">
      <div class="reviews-scroll flex gap-4">
        <div
          v-for="(review, i) in doubledReviews"
          :key="i"
          class="flex-shrink-0 w-[320px] sm:w-[360px] bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-5"
        >
          <!-- Stars -->
          <div class="flex gap-0.5 mb-3">
            <svg v-for="s in review.rating" :key="s" class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-4">
            "{{ review.text }}"
          </p>

          <!-- Attribution -->
          <div class="flex items-center gap-3">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs"
              :style="{ backgroundColor: review.color }"
            >
              {{ review.initials }}
            </div>
            <div>
              <div class="font-medium text-neutral-900 dark:text-white text-sm">{{ review.name }}</div>
              <div class="text-xs text-neutral-500">{{ review.location }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured In logos -->
    <Container>
      <div class="mt-12 space-y-4">
        <p class="text-xs text-center text-neutral-500 dark:text-neutral-400 uppercase tracking-widest font-medium">As Featured In</p>
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-70">
          <img
            v-for="logo in featuredLogos"
            :key="logo.name"
            :src="logo.src"
            :alt="logo.name"
            class="h-6 dark:invert"
            loading="lazy"
          />
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const stats = [
  { value: '<4hrs', label: 'Avg. Payout Speed' },
  { value: '95%', label: 'Profit Split' },
  { value: '22+', label: 'Countries' },
  { value: '109+', label: 'Funded Traders' },
]

const reviews = [
  {
    name: 'Will M.',
    location: 'Monaco',
    rating: 5,
    text: 'Very nice prop firm, they paid me today my first payout, so they are legit and the rules are simple. I like TradersYard.',
    initials: 'WM',
    color: '#8B5CF6',
  },
  {
    name: 'Dominic M.',
    location: 'Austria',
    rating: 5,
    text: 'Trading with TradersYard has been a game-changer for me. Their clear rules and no hidden fees made it easy to focus on growing my account. Plus, the support team is always there when I need them.',
    initials: 'DM',
    color: '#10B981',
  },
  {
    name: 'Alex K.',
    location: 'Germany',
    rating: 5,
    text: 'Got my payout within 3 hours. The process was smooth and transparent. No hidden rules, no surprises. Exactly what a prop firm should be.',
    initials: 'AK',
    color: '#F59E0B',
  },
  {
    name: 'Samuel O.',
    location: 'Nigeria',
    rating: 5,
    text: 'TradersYard gave me the opportunity to trade with real capital without risking my own savings. The challenge rules are fair and straightforward.',
    initials: 'SO',
    color: '#3B82F6',
  },
  {
    name: 'Luca R.',
    location: 'Italy',
    rating: 5,
    text: 'I\'ve tried several prop firms before. TradersYard stands out with their fast payouts and honest rules. 95% profit split is hard to beat.',
    initials: 'LR',
    color: '#EF4444',
  },
  {
    name: 'James T.',
    location: 'United Kingdom',
    rating: 5,
    text: 'Support team responded in minutes. Got funded on my second attempt and the payout was processed the same day. Highly recommend.',
    initials: 'JT',
    color: '#6366F1',
  },
  {
    name: 'Carlos P.',
    location: 'Spain',
    rating: 5,
    text: 'Clean dashboard, simple rules, fast payouts. TradersYard doesn\'t overcomplicate things. Just trade well and you get paid. That\'s how it should be.',
    initials: 'CP',
    color: '#14B8A6',
  },
  {
    name: 'Mohammed A.',
    location: 'UAE',
    rating: 5,
    text: 'The swing trading option is perfect for my style. No time pressure, fair drawdown rules, and the 95% split makes it very attractive compared to competitors.',
    initials: 'MA',
    color: '#EC4899',
  },
]

// Double the reviews so the marquee loops seamlessly
const doubledReviews = computed(() => [...reviews, ...reviews])

const featuredLogos = [
  { name: 'Benzinga', src: '/landing/company-logos/benzinga.png' },
  { name: 'Yahoo Finance', src: '/landing/company-logos/yahoo-finance.svg' },
  { name: 'Fintech Magnates', src: '/landing/company-logos/fintech-magnates.svg' },
]
</script>

<style scoped>
@keyframes scroll-reviews {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.reviews-scroll {
  animation: scroll-reviews 40s linear infinite;
}

.reviews-scroll:hover {
  animation-play-state: paused;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

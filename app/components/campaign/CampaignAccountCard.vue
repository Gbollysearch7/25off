<template>
  <div
    class="rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
    :class="isPopular
      ? 'bg-campaign text-white ring-2 ring-campaign'
      : 'bg-neutral-100 dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800'"
  >
    <!-- Popular badge -->
    <div v-if="isPopular" class="text-center py-1.5 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider">
      Most Popular
    </div>

    <div class="p-5 md:p-6 space-y-5">
      <!-- Account Label -->
      <div class="font-clash text-xl md:text-2xl font-semibold" :class="isPopular ? 'text-white' : 'text-neutral-900 dark:text-white'">
        {{ account.label }} Account
      </div>

      <!-- Pricing Display -->
      <div class="space-y-1">
        <div class="text-base line-through" :class="isPopular ? 'text-white/60' : 'text-neutral-400'">
          ${{ account.originalPrice }}
        </div>
        <div class="flex items-end gap-2">
          <span class="font-clash text-3xl md:text-4xl font-semibold" :class="isPopular ? 'text-white' : 'text-campaign'">
            ${{ account.discountedPrice }}
          </span>
          <span class="text-sm pb-1" :class="isPopular ? 'text-white/70' : 'text-neutral-500'">one-time</span>
        </div>
        <div
          class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
          :class="isPopular ? 'bg-white/20 text-white' : 'bg-green-500/10 text-green-600 dark:text-green-400'"
        >
          Save ${{ account.savings }}
        </div>
      </div>

      <!-- Features -->
      <div class="space-y-2.5" v-if="features.length">
        <div
          v-for="feature in features"
          :key="feature.label"
          class="flex items-center justify-between text-sm"
          :class="isPopular ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'"
        >
          <span>{{ feature.label }}</span>
          <span class="font-medium" :class="isPopular ? 'text-white' : 'text-neutral-900 dark:text-white'">{{ feature.value }}</span>
        </div>
      </div>

      <!-- Gift Tier -->
      <div
        class="rounded-xl p-3 flex items-center gap-3"
        :class="isPopular ? 'bg-white/15' : 'bg-campaign/10 dark:bg-campaign/20 border border-campaign/20'"
      >
        <IconGift class="w-5 h-5 flex-shrink-0" :class="isPopular ? 'text-white' : 'text-campaign'" />
        <div>
          <div class="text-[11px]" :class="isPopular ? 'text-white/60' : 'text-neutral-500'">They receive FREE:</div>
          <div class="font-semibold text-sm" :class="isPopular ? 'text-white' : 'text-campaign'">{{ account.giftTier }} Challenge</div>
        </div>
      </div>

      <!-- CTA Button — shorter text for mobile -->
      <a
        :href="account.cartUrl"
        @click="trackClick"
        class="flex gap-2 justify-center items-center relative group overflow-hidden font-clash font-medium tracking-wide transition-all border duration-300 text-sm sm:text-base py-3 px-4 rounded-xl w-full"
        :class="isPopular
          ? 'bg-white text-campaign border-white hover:bg-neutral-100'
          : 'bg-campaign text-white border-campaign hover:bg-campaign-dark'"
      >
        <span class="transition-all ease-in-out duration-300 translate-x-4 group-hover:translate-x-0">
          Get This + Free Gift
        </span>
        <span class="transition-all ease-in-out rotate-45 group-hover:rotate-0 duration-300 opacity-0 translate-x-6 group-hover:translate-x-0 group-hover:opacity-100">
          <IconArrowRight class="w-5 h-5" />
        </span>
      </a>

      <!-- Small print -->
      <p class="text-[11px] text-center" :class="isPopular ? 'text-white/50' : 'text-neutral-400'">
        Code LOVE25 auto-applied &mdash; includes FREE gift challenge
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconGift, IconArrowRight } from '@tabler/icons-vue'
import type { CampaignAccount } from '~/data/gift-a-challenge'
import { useGTM } from '~~/composables/useGTM'

const props = defineProps<{
  account: CampaignAccount
  features: { label: string; value: string }[]
  isPopular?: boolean
}>()

const { trackCustomEvent } = useGTM()

function trackClick() {
  trackCustomEvent({
    event: 'campaign_cta_click',
    campaign: 'gift-a-challenge',
    accountSize: props.account.label,
    accountValue: props.account.value,
    price: props.account.discountedPrice,
    giftTier: props.account.giftTier,
  })
}
</script>

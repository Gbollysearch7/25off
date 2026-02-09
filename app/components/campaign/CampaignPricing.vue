<template>
  <section id="pricing" class="py-16 md:py-24">
    <Container>
      <div class="space-y-10">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              Valentine's Pricing
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            Save 25% on Every Challenge
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            All prices below reflect your LOVE25 discount &mdash; already applied. Pick your challenge and a gift code is generated automatically after purchase.
          </p>
        </div>

        <!-- Asset Class Tabs (CFD / Futures) -->
        <div class="flex justify-center">
          <div class="inline-flex bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 gap-1">
            <button
              v-for="asset in assetClasses"
              :key="asset.key"
              @click="selectedAsset = asset.key"
              class="px-5 py-2.5 rounded-lg text-sm font-clash font-medium transition-all duration-200"
              :class="selectedAsset === asset.key
                ? 'bg-campaign text-white shadow-sm'
                : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'"
            >
              {{ asset.label }}
            </button>
          </div>
        </div>

        <!-- Product Type Tabs -->
        <div class="flex justify-center">
          <div class="inline-flex flex-wrap justify-center gap-2">
            <button
              v-for="type in currentProductTypes"
              :key="type.key"
              @click="selectedType = type.key"
              class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              :class="selectedType === type.key
                ? 'bg-campaign/10 text-campaign dark:bg-campaign/20 ring-1 ring-campaign/30'
                : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'"
            >
              {{ type.label }}
            </button>
          </div>
        </div>

        <!-- Pricing Cards — horizontal scroll on mobile, grid on desktop -->
        <div
          class="md:grid md:gap-6 md:max-w-6xl md:mx-auto"
          :class="gridColsClass"
        >
          <!-- Mobile horizontal scroll wrapper -->
          <div class="flex md:contents gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            <CampaignAccountCard
              v-for="account in currentAccounts"
              :key="account.label"
              :account="account"
              :features="currentFeatures"
              :is-popular="isPopularAccount(account)"
              class="min-w-[280px] sm:min-w-[300px] md:min-w-0 snap-center flex-shrink-0 md:flex-shrink md:w-auto"
            />
          </div>
        </div>

        <!-- Mobile scroll hint -->
        <div class="flex md:hidden justify-center gap-1.5 -mt-2">
          <div
            v-for="(account, i) in currentAccounts"
            :key="i"
            class="w-1.5 h-1.5 rounded-full"
            :class="isPopularAccount(account) ? 'bg-campaign' : 'bg-neutral-300 dark:bg-neutral-600'"
          />
        </div>

        <!-- Payment Methods & Trust -->
        <div class="space-y-4 pt-4">
          <div class="flex flex-wrap justify-center items-center gap-4">
            <div class="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <IconLock class="w-4 h-4" />
              <span>Secure Checkout</span>
            </div>
            <div class="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <IconShieldCheck class="w-4 h-4" />
              <span>256-bit SSL</span>
            </div>
            <div class="flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <IconReceipt class="w-4 h-4" />
              <span>One-time fee, no recurring charges</span>
            </div>
          </div>
          <div class="flex flex-wrap justify-center items-center gap-3">
            <div
              v-for="method in paymentMethods"
              :key="method.name"
              class="rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center px-4 h-10"
            >
              <img
                :src="method.src"
                :alt="method.name"
                class="h-6 object-contain"
                loading="lazy"
                width="80"
                height="24"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { IconLock, IconShieldCheck, IconReceipt } from '@tabler/icons-vue'
import CampaignAccountCard from '~/components/campaign/CampaignAccountCard.vue'
import { challengeTypes, type CampaignAccount } from '~/data/gift-a-challenge'

const paymentMethods = [
  { name: 'Visa', src: '/landing/payment-methods/visa.webp' },
  { name: 'Mastercard', src: '/landing/payment-methods/mastercard.webp' },
  { name: 'Skrill', src: '/landing/payment-methods/skrill.webp' },
  { name: 'Bitcoin', src: '/landing/payment-methods/bitcoin.webp' },
  { name: 'Ethereum', src: '/landing/payment-methods/ethereum.webp' },
]

const assetClasses = [
  { key: 'cfd', label: 'CFD' },
  { key: 'futures', label: 'Futures' },
]

const selectedAsset = ref('cfd')

const productTypeMap: Record<string, { key: string; label: string }[]> = {
  cfd: [
    { key: 'cfd-2-phase-swing', label: '2 Phase Swing' },
    { key: 'cfd-1-phase', label: '1 Phase' },
  ],
  futures: [
    { key: 'futures-static', label: 'Static Drawdown' },
    { key: 'futures-eod', label: 'EoD Drawdown' },
  ],
}

const currentProductTypes = computed(() => productTypeMap[selectedAsset.value] || [])

const selectedType = ref('cfd-2-phase-swing')

watch(selectedAsset, (val) => {
  const types = productTypeMap[val]
  if (types && types.length > 0) {
    selectedType.value = types[0].key
  }
})

const currentChallenge = computed(() =>
  challengeTypes.find(t => t.key === selectedType.value)
)

const currentAccounts = computed(() => currentChallenge.value?.accounts || [])
const currentFeatures = computed(() => currentChallenge.value?.features || [])

const gridColsClass = computed(() => {
  const count = currentAccounts.value.length
  if (count <= 3) return 'md:grid-cols-3'
  if (count <= 4) return 'md:grid-cols-2 lg:grid-cols-4'
  if (count <= 5) return 'md:grid-cols-3 xl:grid-cols-5'
  return 'md:grid-cols-3'
})

function isPopularAccount(account: CampaignAccount): boolean {
  if (selectedAsset.value === 'cfd' && account.value === 100000) return true
  if (selectedAsset.value === 'futures' && account.value === 50000) return true
  return false
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>

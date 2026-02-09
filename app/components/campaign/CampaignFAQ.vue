<template>
  <section class="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-950">
    <Container>
      <div class="space-y-10 max-w-3xl mx-auto">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              FAQ
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            Your Questions Answered
          </h2>
        </div>

        <!-- Accordion -->
        <div class="space-y-3">
          <div
            v-for="(item, index) in faqs"
            :key="index"
            class="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden ring-1 ring-neutral-200 dark:ring-neutral-800 transition-all duration-200 scroll-reveal"
            :style="{ '--delay': `${index * 50}ms` }"
          >
            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between px-6 py-4 text-left group transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
            >
              <span class="font-clash font-medium text-neutral-900 dark:text-white pr-4">
                {{ item.question }}
              </span>
              <IconChevronDown
                class="w-5 h-5 text-campaign flex-shrink-0 transition-transform duration-300"
                :class="{ 'rotate-180': openIndex === index }"
              />
            </button>
            <div
              class="overflow-hidden transition-all duration-300"
              :style="{ maxHeight: openIndex === index ? '800px' : '0px' }"
            >
              <div v-if="item.isHtml" class="px-6 pb-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed" v-html="item.answer" />
              <div v-else class="px-6 pb-5 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {{ item.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { IconChevronDown } from '@tabler/icons-vue'
import { challengeTypes } from '~/data/gift-a-challenge'

const openIndex = ref(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}

const giftTierHtml = computed(() => {
  const groups = challengeTypes.map(type => {
    const rows = type.accounts.map(a =>
      `<div class="flex items-center justify-between py-1.5 border-b border-neutral-100 dark:border-neutral-800 last:border-0">
        <span class="font-medium text-neutral-900 dark:text-white">${a.label}</span>
        <span class="text-green-600 dark:text-green-400 font-medium">${a.giftTier} FREE</span>
      </div>`
    ).join('')

    return `<div class="mb-4 last:mb-0">
      <div class="text-xs font-semibold uppercase tracking-wider text-campaign mb-2">${type.shortName}</div>
      <div class="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg px-4 py-2">${rows}</div>
    </div>`
  }).join('')

  return `<p class="mb-4">You get one gift code per customer, based on your highest-tier purchase. The bigger your challenge, the bigger the gift:</p>${groups}<p class="mt-4 text-xs text-neutral-500">All gift challenges are fully functional with the same rules and path to funded.</p>`
})

const faqs = computed(() => [
  {
    question: 'How does Gift-a-Challenge work?',
    answer: 'When you buy any challenge during Feb 9-18 using code LOVE25, you get 25% off your purchase. After checkout, we\'ll send you a quick form to fill in the recipient\'s name and email. We then generate a unique gift code and send it to them within 48 hours.',
  },
  {
    question: 'What is the promo code and how do I use it?',
    answer: 'The promo code is LOVE25. It gives you 25% off any challenge type (CFD or Futures) at any account size. The code is auto-applied when you use the links on this page. If checking out elsewhere, enter LOVE25 at checkout.',
  },
  {
    question: 'What gift tier does each challenge unlock?',
    answer: giftTierHtml.value,
    isHtml: true,
  },
  {
    question: 'Can I redeem the gift code myself?',
    answer: 'No. The gift code is tied to a different email address than the one used for purchase. This promotion is designed so you can share the gift of funded trading with someone else — a friend, partner, or fellow trader.',
  },
  {
    question: 'What exactly does the gift recipient get?',
    answer: 'They receive a fully functional challenge account at a lower tier based on your purchase. For example, if you buy a 100K challenge, they get a FREE 25K challenge. The gift account has the same rules, same path to funded, and the same profit split potential.',
  },
  {
    question: 'How does the recipient get their free challenge?',
    answer: 'After you fill in the gift form, we send the recipient a unique gift code within 48 hours. They then have 48 hours after receiving it to claim their account. No payment information is required from them.',
  },
  {
    question: 'What happens if the gift code expires?',
    answer: 'If the recipient doesn\'t claim the code within 48 hours of receiving it, it expires permanently. Your own challenge account is unaffected — you keep your 25% discounted challenge regardless of whether the gift is claimed.',
  },
  {
    question: 'Does the gift recipient need to complete KYC?',
    answer: 'Yes. Like all TradersYard traders, the gift recipient must complete KYC verification before any payouts can be processed. KYC is not required to start the challenge — only to withdraw profits once funded.',
  },
  {
    question: 'If I buy multiple challenges, do I get multiple gift codes?',
    answer: 'No. The gift mechanic is limited to one gift code per customer, regardless of how many challenges you purchase. You can still buy multiple challenges at 25% off with LOVE25, but only your highest-tier purchase will generate a gift code.',
  },
  {
    question: 'Can I get a refund?',
    answer: 'Please refer to our refund policy for details. Your challenge account is delivered instantly after purchase. The gift code is a bonus generated after your purchase and does not affect the standard refund terms.',
  },
  {
    question: 'When does the campaign end?',
    answer: 'Gift-a-Challenge runs from February 9 through February 18, 2026. After February 18, the LOVE25 code and the gift mechanic will no longer be available. Gift codes already sent during the campaign remain valid for their 48-hour claim window.',
  },
  {
    question: 'Can I stack LOVE25 with another promo code?',
    answer: 'No. LOVE25 cannot be combined with any other coupon code or promotion. The 25% discount plus the free gift challenge is exclusive to this campaign.',
  },
  {
    question: 'I already have a TradersYard account. Can I still participate?',
    answer: 'Yes. Existing TradersYard traders can buy a new challenge using LOVE25 and receive a gift code just like any new customer. This is a great opportunity to add another challenge at 25% off while sharing a free account with someone in your trading circle.',
  },
])
</script>

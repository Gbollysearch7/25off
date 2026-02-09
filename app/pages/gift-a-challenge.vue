<template>
  <div>
    <CampaignHero />
    <CampaignHowItWorks />
    <ValueProposition />
    <WhoToGift />
    <CampaignPricing />
    <SocialShare />
    <SocialProof />
    <WhyTradersYard />
    <FinalCTA />
    <CampaignFAQ />
  </div>
</template>

<script setup lang="ts">
import CampaignHero from '~/components/campaign/CampaignHero.vue'
import CampaignHowItWorks from '~/components/campaign/CampaignHowItWorks.vue'
import ValueProposition from '~/components/campaign/ValueProposition.vue'
import WhoToGift from '~/components/campaign/WhoToGift.vue'
import CampaignPricing from '~/components/campaign/CampaignPricing.vue'
import SocialShare from '~/components/campaign/SocialShare.vue'
import SocialProof from '~/components/campaign/SocialProof.vue'
import CampaignFAQ from '~/components/campaign/CampaignFAQ.vue'
import WhyTradersYard from '~/components/campaign/WhyTradersYard.vue'
import FinalCTA from '~/components/campaign/FinalCTA.vue'
import { useScrollReveal } from '~~/composables/useScrollReveal'

definePageMeta({
  layout: 'campaign',
})

useScrollReveal()

useHead({
  title: 'Gift a Challenge — Valentine\'s Special | 25% Off + FREE Gift | TradersYard',
  meta: [
    {
      name: 'description',
      content: 'Buy any trading challenge at 25% off with code LOVE25. Your gift recipient gets a FREE challenge. Two traders, one purchase. Feb 9-18 only.',
    },
    { property: 'og:title', content: 'Gift a Challenge — Valentine\'s Special | TradersYard' },
    { property: 'og:description', content: '25% off + gift a FREE challenge to someone you care about. Use code LOVE25. Feb 9-18 only.' },
    { property: 'og:image', content: 'https://tradersyard.com/landing/og-gift-a-challenge.png' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Gift a Challenge — Valentine\'s Special | TradersYard' },
    { name: 'twitter:description', content: '25% off + gift a FREE challenge to someone you care about. Use code LOVE25.' },
    { name: 'twitter:image', content: 'https://tradersyard.com/landing/og-gift-a-challenge.png' },
  ],
})
</script>

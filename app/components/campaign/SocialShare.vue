<template>
  <section class="py-12 md:py-16">
    <Container>
      <div class="max-w-2xl mx-auto text-center space-y-6 bg-campaign/5 dark:bg-campaign/10 rounded-2xl p-8">
        <h3 class="font-clash text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white">
          Know a trader who'd want a free challenge?
        </h3>
        <p class="text-sm text-neutral-600 dark:text-neutral-400">
          Share this page and let them know about the deal.
        </p>

        <!-- Share buttons -->
        <div class="flex flex-wrap justify-center gap-3">
          <a
            :href="whatsappUrl"
            target="_blank"
            class="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <IconBrandWhatsapp class="w-5 h-5" />
            WhatsApp
          </a>
          <a
            :href="telegramUrl"
            target="_blank"
            class="inline-flex items-center gap-2 bg-[#0088cc] text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <IconBrandTelegram class="w-5 h-5" />
            Telegram
          </a>
          <a
            :href="twitterUrl"
            target="_blank"
            class="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white dark:text-neutral-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <IconBrandX class="w-5 h-5" />
            Post
          </a>
          <button
            @click="copyLink"
            class="inline-flex items-center gap-2 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <IconCheck v-if="linkCopied" class="w-5 h-5" />
            <IconLink v-else class="w-5 h-5" />
            {{ linkCopied ? 'Copied!' : 'Copy Link' }}
          </button>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconBrandWhatsapp, IconBrandTelegram, IconBrandX, IconLink, IconCheck } from '@tabler/icons-vue'

const pageUrl = 'https://tradersyard.com/gift-a-challenge'
const shareText = 'TradersYard has a Valentine\'s deal — buy a challenge at 25% off and gift a FREE one to a friend. Check it out:'

const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + pageUrl)}`
const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`

const linkCopied = ref(false)

function copyLink() {
  navigator.clipboard.writeText(pageUrl)
  linkCopied.value = true
  setTimeout(() => {
    linkCopied.value = false
  }, 2000)
}
</script>

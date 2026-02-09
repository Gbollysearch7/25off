<template>
  <section class="py-16 md:py-24">
    <Container>
      <div class="space-y-10">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              Gift Ideas
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            Who Should You Gift?
          </h2>
          <p class="text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            Know a trader — or someone who wants to start? Here are a few ideas.
          </p>
        </div>

        <!-- Gift idea cards -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div
            v-for="(idea, index) in giftIdeas"
            :key="idea.title"
            class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg scroll-reveal"
            :style="{ '--delay': `${index * 100}ms` }"
          >
            <component :is="idea.icon" class="w-10 h-10 text-campaign mx-auto mb-4" :stroke-width="1.5" />
            <h4 class="font-clash font-semibold text-lg text-neutral-900 dark:text-white mb-2">
              {{ idea.title }}
            </h4>
            <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {{ idea.description }}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { IconUsers, IconSchool, IconDeviceGamepad2, IconHeart } from '@tabler/icons-vue'

const giftIdeas = [
  {
    icon: IconUsers,
    title: 'Your Trading Partner',
    description: 'Trade together and both get funded. Accountability meets opportunity.',
  },
  {
    icon: IconSchool,
    title: 'A Friend Who Wants to Start',
    description: 'Give them a risk-free entry into funded trading. No cost, no catch.',
  },
  {
    icon: IconDeviceGamepad2,
    title: 'Your Community Member',
    description: 'Reward someone in your Discord, Telegram, or trading group.',
  },
  {
    icon: IconHeart,
    title: 'Your Partner or Sibling',
    description: 'It\'s Valentine\'s — gift them something that could actually make money.',
  },
]
</script>

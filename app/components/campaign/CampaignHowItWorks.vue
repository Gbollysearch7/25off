<template>
  <section id="how-it-works" class="py-16 md:py-24">
    <Container>
      <div class="space-y-12">
        <!-- Header -->
        <div class="text-center space-y-4">
          <div class="flex justify-center">
            <div class="rounded-full text-center bg-campaign text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] uppercase">
              4 Simple Steps
            </div>
          </div>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white">
            How Gift-a-Challenge Works
          </h2>
        </div>

        <!-- Steps — desktop: 4-col grid with chevrons, mobile: vertical with connectors -->
        <div class="grid md:grid-cols-4 gap-0 md:gap-6 max-w-6xl mx-auto">
          <template v-for="(step, index) in steps" :key="step.title">
            <!-- Step card -->
            <div
              class="relative text-center scroll-reveal"
              :style="{ '--delay': `${index * 100}ms` }"
            >
              <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <!-- Step number -->
                <div class="w-12 h-12 bg-campaign text-white rounded-full flex items-center justify-center mx-auto mb-4 font-clash font-semibold text-lg">
                  {{ index + 1 }}
                </div>
                <!-- Icon -->
                <component :is="step.icon" class="w-8 h-8 text-campaign mx-auto mb-4" :stroke-width="1.5" />
                <!-- Title -->
                <h4 class="font-clash font-semibold text-lg md:text-xl text-neutral-900 dark:text-white mb-2">
                  {{ step.title }}
                </h4>
                <!-- Description -->
                <p class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {{ step.description }}
                </p>
              </div>

              <!-- Desktop arrow connector -->
              <div v-if="index < 3" class="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <IconChevronRight class="w-6 h-6 text-campaign" />
              </div>
            </div>

            <!-- Mobile vertical connector between steps -->
            <div v-if="index < 3" class="flex md:hidden justify-center py-2">
              <div class="flex flex-col items-center gap-0.5">
                <div class="w-0.5 h-3 bg-campaign/30 rounded-full" />
                <IconChevronDown class="w-4 h-4 text-campaign" />
              </div>
            </div>
          </template>
        </div>
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { IconShoppingCart, IconFileText, IconGift, IconUsers, IconChevronRight, IconChevronDown } from '@tabler/icons-vue'

const steps = [
  {
    icon: IconShoppingCart,
    title: 'Choose Your Challenge',
    description: 'Pick any CFD or Futures challenge at any account size — code LOVE25 gives you 25% off at checkout.',
  },
  {
    icon: IconFileText,
    title: 'Tell Us Who to Gift',
    description: 'After purchase, we send you a quick form — just enter your friend\'s name and email. Takes 30 seconds.',
  },
  {
    icon: IconGift,
    title: 'They Get a Free Code',
    description: 'We send your recipient a unique gift code within 48 hours. They\'ll have 48 hours after receiving it to claim their account.',
  },
  {
    icon: IconUsers,
    title: 'Both Start Trading',
    description: 'You begin your discounted challenge immediately, and they claim their FREE challenge — two traders, one purchase.',
  },
]
</script>

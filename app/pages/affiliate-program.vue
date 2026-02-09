<template>
  <div class="pt-20 space-y-10 md:space-y-32">
    <Container class="space-y-10 md:space-y-32">
      <div class="space-y-12">
        <PageHeading>
          <template #default>
            {{ t("pages.affiliate.heading") }}
          </template>
          <template #text>
            {{ t("pages.affiliate.description") }}
          </template>
        </PageHeading>

        <div
          class="flex gap-12 justify-center flex-col md:flex-row items-center"
        >
          <div
            class="scroll-reveal zoom-in text-center"
            v-for="(stat, index) in stats"
            :key="stat.key"
            :class="[`delay-${(index + 1) * 100}`]"
          >
            <div
              class="font-clash font-semibold text-primary text-5xl xl:text-4xl"
            >
              {{ stat.value }}
            </div>
            <div class="dark:text-white text-sm xl:text-base">
              {{ stat.label }}
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <Button
            variant="light"
            href="https://shop.tradersyard.com/affiliate-registration/"
            target="_blank"
          >
            {{ t("pages.affiliate.button") }}
          </Button>
        </div>
      </div>

      <!-- Tiered System Section -->
      <div class="scroll-reveal fade-up space-y-8">
        <div class="text-center space-y-2">
          <h2
            class="font-clash text-2xl sm:text-4xl md:text-5xl font-semibold dark:text-white"
          >
            {{ t("pages.affiliate.tiers.heading") }}
          </h2>
          <p class="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400">
            {{ t("pages.affiliate.tiers.description") }}
          </p>
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
          <div
            v-for="(tier, index) in tiers"
            :key="tier.key"
            class="scroll-reveal fade-up rounded-2xl p-6 border bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-primary dark:hover:border-primary hover:-translate-y-2 cursor-pointer group"
            :class="[`delay-${(index + 1) * 100}`]"
          >
            <div class="flex items-center gap-2 mb-4">
              <component
                :is="tier.icon"
                :size="24"
                class="text-neutral-600 dark:text-neutral-400 transition-all duration-300 group-hover:text-primary group-hover:scale-110"
              />
              <h3
                class="font-clash font-semibold text-xl text-neutral-900 dark:text-white transition-colors duration-300 group-hover:text-primary"
              >
                {{ tier.name }}
              </h3>
            </div>

            <div class="space-y-3">
              <div
                class="font-clash font-semibold text-3xl text-neutral-900 dark:text-white transition-all duration-300 group-hover:text-primary group-hover:scale-110"
              >
                {{ tier.commission }}
              </div>

              <div
                class="text-sm text-neutral-500 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-200"
              >
                {{ tier.requirement }}
              </div>

              <ul class="space-y-2 text-sm">
                <li
                  v-for="(benefit, i) in tier.benefits"
                  :key="i"
                  class="flex items-start gap-2 text-neutral-600 dark:text-neutral-300 transition-all duration-300 group-hover:text-neutral-900 dark:group-hover:text-white"
                >
                  <IconCheck
                    :size="16"
                    class="text-green-500 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-125 group-hover:text-green-600"
                  />
                  <span>{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="hidden lg:block absolute top-0 -translate-y-1/2 right-0 translate-x-1/3 w-80 rotate-12 opacity-90"
        >
          <img
            class="animate-float"
            src="/landing/3d-icons/megaphone.webp"
            alt=""
          />
        </div>

        <div
          class="scroll-reveal fade-up relative z-10 space-y-8 border border-neutral-200 dark:border-white bg-white p-8 rounded-3xl"
        >
          <div class="space-y-1">
            <h2
              class="font-clash text-2xl sm:text-4xl md:text-5xl font-semibold"
            >
              {{ t("pages.affiliate.cta.heading") }}
            </h2>
            <p class="text-sm sm:text-lg text-neutral-600">
              {{ t("pages.affiliate.cta.description") }}
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="(step, index) in steps"
              :key="step.key"
              class="scroll-reveal fade-up rounded-2xl bg-neutral-100 p-4"
              :class="[`delay-${(index + 1) * 100}`]"
            >
              <div
                class="flex items-center justify-center size-12 rounded-xl bg-primary mb-4"
              >
                <component :is="step.icon" :size="24" class="text-white" />
              </div>
              <div class="text-xl mb-1 font-medium font-clash">
                {{ step.title }}
              </div>
              <div class="text-sm text-neutral-400">
                {{ step.text }}
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 md:w-1/3">
            <Button
              href="https://shop.tradersyard.com/affiliate-registration/"
              target="_blank"
            >
              {{ t("pages.affiliate.cta.button") }}
            </Button>
          </div>
        </div>
      </div>
    </Container>

    <FAQ />
  </div>
</template>

<script setup>
import {
  IconUserFilled,
  IconSpeakerphone,
  IconCurrencyDollar,
  IconMedal,
  IconTrophy,
  IconCrown,
  IconDiamond,
  IconStar,
  IconCheck,
} from "@tabler/icons-vue";
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

// Initialize scroll reveal animations
useScrollReveal();

useHead({
  title: t("pages.affiliate.title"),
});

const stats = computed(() => [
  {
    key: "revenue-split",
    value: "12-25%",
    label: t("pages.affiliate.stats.revenueSplit"),
  },
  {
    key: "cookie-retention",
    value: "30 days",
    label: t("pages.affiliate.stats.cookieRetention"),
  },
]);

const tiers = computed(() => [
  {
    key: "bronze",
    name: t("pages.affiliate.tiers.bronze.name"),
    icon: IconMedal,
    commission: "12%",
    requirement: t("pages.affiliate.tiers.bronze.requirement"),
    benefits: [
      t("pages.affiliate.tiers.bronze.benefit1"),
      t("pages.affiliate.tiers.bronze.benefit2"),
    ],
    featured: false,
  },
  {
    key: "silver",
    name: t("pages.affiliate.tiers.silver.name"),
    icon: IconTrophy,
    commission: "15%",
    requirement: t("pages.affiliate.tiers.silver.requirement"),
    benefits: [
      t("pages.affiliate.tiers.silver.benefit1"),
      t("pages.affiliate.tiers.silver.benefit2"),
      t("pages.affiliate.tiers.silver.benefit3"),
    ],
    featured: false,
  },
  {
    key: "gold",
    name: t("pages.affiliate.tiers.gold.name"),
    icon: IconCrown,
    commission: "18%",
    requirement: t("pages.affiliate.tiers.gold.requirement"),
    benefits: [
      t("pages.affiliate.tiers.gold.benefit1"),
      t("pages.affiliate.tiers.gold.benefit2"),
      t("pages.affiliate.tiers.gold.benefit3"),
    ],
    featured: false,
  },
  {
    key: "diamond",
    name: t("pages.affiliate.tiers.diamond.name"),
    icon: IconDiamond,
    commission: "20%",
    requirement: t("pages.affiliate.tiers.diamond.requirement"),
    benefits: [
      t("pages.affiliate.tiers.diamond.benefit1"),
      t("pages.affiliate.tiers.diamond.benefit2"),
      t("pages.affiliate.tiers.diamond.benefit3"),
    ],
    featured: false,
  },
  {
    key: "elite",
    name: t("pages.affiliate.tiers.elite.name"),
    icon: IconStar,
    commission: "25%",
    requirement: t("pages.affiliate.tiers.elite.requirement"),
    benefits: [
      t("pages.affiliate.tiers.elite.benefit1"),
      t("pages.affiliate.tiers.elite.benefit2"),
      t("pages.affiliate.tiers.elite.benefit3"),
      t("pages.affiliate.tiers.elite.benefit4"),
    ],
    featured: false,
  },
]);

const steps = computed(() => [
  {
    key: "register",
    title: t("pages.affiliate.steps.register.title"),
    icon: IconUserFilled,
    text: t("pages.affiliate.steps.register.text"),
  },
  {
    key: "share-code",
    title: t("pages.affiliate.steps.shareCode.title"),
    icon: IconSpeakerphone,
    text: t("pages.affiliate.steps.shareCode.text"),
  },
  {
    key: "earn",
    title: t("pages.affiliate.steps.earn.title"),
    icon: IconCurrencyDollar,
    text: t("pages.affiliate.steps.earn.text"),
  },
]);
</script>

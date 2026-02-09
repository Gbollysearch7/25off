<template>
  <div class="pt-20 space-y-10 md:space-y-32 overflow-hidden">
    <Container class="space-y-10 md:space-y-32">
      <div class="space-y-4 text-center">
        <PageHeading>
          <template #default>
            {{ t("pages.tournaments.heading") }}
          </template>

          <template #text>
            {{ t("pages.tournaments.description") }}
          </template>
        </PageHeading>
      </div>

      <div class="flex flex-col md:flex-row gap-12 justify-center items-center">
        <div
          class="scroll-reveal zoom-in text-center"
          v-for="(stat, index) in stats"
          :key="stat.key"
          :class="[`delay-${(index + 1) * 100}`]"
        >
          <div
            class="font-clash font-semibold text-primary text-7xl md:text-5xl"
          >
            {{ stat.value }}
          </div>
          <div class="dark:text-white">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <div class="relative">
        <div
          class="hidden lg:block absolute top-0 -translate-y-2/3 right-0 translate-x-1/4 w-[500px] rotate-12"
        >
          <img
            class="animate-float"
            src="/landing/3d-icons/trophy.webp"
            alt=""
          />
        </div>

        <div
          class="scroll-reveal fade-up relative z-10 space-y-16 bg-white p-8 rounded-3xl"
        >
          <div class="flex flex-col justify-center items-center space-y-3">
            <ChipLabel>
              {{ t("pages.tournaments.cta.chip") }}
            </ChipLabel>
            <div class="text-center space-y-2">
              <h2
                class="font-clash text-2xl sm:text-4xl md:text-5xl font-semibold"
              >
                {{ t("pages.tournaments.cta.heading") }}
              </h2>
              <p class="text-lg text-neutral-600">
                {{ t("pages.tournaments.cta.description") }}
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-4">
            <div
              v-for="(feature, index) in features"
              :key="feature.key"
              class="scroll-reveal fade-up rounded-2xl bg-neutral-100 p-4"
              :class="[`delay-${(index + 1) * 100}`]"
            >
              <div
                class="flex items-center justify-center size-12 rounded-xl bg-primary mb-4"
              >
                <component :is="feature.icon" :size="24" class="text-white" />
              </div>
              <div class="text-xl mb-1 font-medium font-clash">
                {{ feature.title }}
              </div>
              <div class="text-sm text-neutral-400">
                {{ feature.text }}
              </div>
            </div>
          </div>

          <div class="flex justify-center max-w-xs mx-auto">
            <Button href="/tournaments">
              {{ t("pages.tournaments.cta.button") }}
            </Button>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div
          class="scroll-reveal fade-up flex flex-col justify-center items-center space-y-3"
        >
          <ChipLabel>
            {{ t("pages.tournaments.howItWorks.chip") }}
          </ChipLabel>
          <h2
            class="dark:text-white font-clash text-3xl text-center sm:text-4xl md:text-5xl font-semibold"
          >
            {{ t("pages.tournaments.howItWorks.heading") }}
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-4">
          <div
            v-for="(step, index) in steps"
            :key="step.key"
            :class="[
              'scroll-reveal fade-up relative overflow-hidden rounded-2xl p-8 border',
              index === 1
                ? 'bg-white border-neutral-200 dark:border-transparent'
                : 'bg-neutral-900 border-transparent',
              `delay-${(index + 1) * 100}`,
            ]"
          >
            <div
              :class="[
                'text-2xl mb-1 font-medium font-clash',
                index === 1 ? 'text-black' : 'text-white',
              ]"
            >
              {{ step.title }}
            </div>
            <div
              :class="[
                'w-2/3 text-sm',
                index === 1 ? 'text-neutral-600' : 'text-neutral-400',
              ]"
            >
              {{ step.text }}
            </div>

            <div
              class="w-44 absolute bottom-0 translate-y-10 right-0 translate-x-6"
            >
              <img :src="step.img" alt="" />
            </div>
          </div>
        </div>
      </div>

      <LatestCompetitions />
    </Container>

    <DiscordServer />

    <FAQ />
  </div>
</template>

<script setup>
import {
  IconShieldCheckFilled,
  IconStarsFilled,
  IconCash,
} from "@tabler/icons-vue";
import PageHeading from "~/components/PageHeading.vue";
import LatestCompetitions from "~/components/LatestCompetitions.vue";
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

// Initialize scroll reveal animations
useScrollReveal();

useHead({
  title: t("pages.tournaments.title"),
});

const stats = computed(() => [
  {
    key: "traders",
    value: "21K+",
    label: t("pages.tournaments.stats.traders"),
  },
  {
    key: "prizes",
    value: "$250K",
    label: t("pages.tournaments.stats.prizes"),
  },
  {
    key: "countries",
    value: "120+",
    label: t("pages.tournaments.stats.countries"),
  },
]);

const steps = computed(() => [
  {
    key: "join",
    title: t("pages.tournaments.howItWorks.steps.join.title"),
    text: t("pages.tournaments.howItWorks.steps.join.text"),
    img: "/landing/3d-icons/cursor-click.webp",
  },
  {
    key: "no-risk",
    title: t("pages.tournaments.howItWorks.steps.noRisk.title"),
    text: t("pages.tournaments.howItWorks.steps.noRisk.text"),
    img: "/landing/3d-icons/shield-check.webp",
  },
  {
    key: "rise",
    title: t("pages.tournaments.howItWorks.steps.rise.title"),
    text: t("pages.tournaments.howItWorks.steps.rise.text"),
    img: "/landing/3d-icons/rising-bars-star.webp",
  },
]);

const features = computed(() => [
  {
    key: "cashPrize",
    title: t("pages.tournaments.features.f1.title"),
    icon: IconCash,
    text: t("pages.tournaments.features.f1.text"),
  },
  {
    key: "fintechXP",
    title: t("pages.tournaments.features.f2.title"),
    icon: IconStarsFilled,
    text: t("pages.tournaments.features.f2.text"),
  },
  {
    key: "trust",
    title: t("pages.tournaments.features.f3.title"),
    icon: IconShieldCheckFilled,
    text: t("pages.tournaments.features.f3.text"),
  },
]);
</script>

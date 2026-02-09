<template>
  <Container class="pt-20 space-y-10 md:space-y-32">
    <PageHeading>
      <template #default>
        {{ $t("pages.about.heading") }}
      </template>

      <template #text>
        {{ $t("pages.about.description") }}
      </template>
    </PageHeading>

    <div class="space-y-8">
      <div class="scroll-reveal fade-up relative rounded-xl md:rounded-3xl">
        <div>
          <img
            class="rounded-xl md:rounded-3xl"
            src="/landing/about/gilbert.webp"
            alt=""
          />
        </div>

        <div
          class="rounded-t-xl md:rounded-t-3xl rounded-bl-xl md:rounded-bl-3xl absolute w-1/2 bg-primary/80 h-[110%] left-0 bottom-0"
        >
          <div
            class="h-full mt-auto flex flex-col items-start justify-end p-4 md:p-8 space-y-4"
          >
            <div
              class="rounded-full text-center bg-white text-primary px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[3px]"
            >
              {{ t("pages.about.pivot.chip") }}
            </div>
            <h1
              class="text-white font-clash text-3xl sm:text-4xl md:text-7xl font-semibold"
            >
              {{ t("pages.about.pivot.heading") }}
            </h1>
          </div>
        </div>

        <div class="w-1/2 absolute top-0 right-0">
          <img class="rounded-tr-3xl" src="/landing/about/hike.webp" alt="" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 items-start gap-6">
        <div class="scroll-reveal fade-up space-y-8 dark:text-white">
          <p>
            {{ t("pages.about.timeline.story.intro") }}
          </p>

          <p>
            {{ t("pages.about.timeline.story.present") }}
          </p>

          <p>
            {{ t("pages.about.timeline.story.future") }}
          </p>

          <p>
            {{ t("pages.about.timeline.story.cta") }}
          </p>
        </div>

        <TimelineFull />
      </div>
    </div>

    <div
      class="scroll-reveal fade-up relative overflow-hidden p-4 sm:p-8 md:p-16 rounded-3xl bg-white border border-neutral-200 dark:border-transparent space-y-4"
    >
      <div class="flex flex-col items-start space-y-4">
        <ChipLabel>
          {{ t("pages.about.mission.chip") }}
        </ChipLabel>
        <h1
          class="text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold"
        >
          {{ t("pages.about.mission.heading") }}
        </h1>
      </div>

      <div class="space-y-2">
        <div
          v-for="(item, index) in missionItems"
          :key="item.key"
          class="scroll-reveal fade-left flex gap-2 items-center"
          :class="[`delay-${(index + 1) * 100}`]"
        >
          <component :is="item.icon" :size="24" class="text-primary" />
          <div class="font-medium text-lg">
            {{ item.label }}
          </div>
        </div>
      </div>

      <div class="hidden lg:block absolute w-96 right-10 -bottom-24 -rotate-12">
        <img
          src="/landing/3d-icons/mountain-flag.webp"
          alt="flag on mountain"
        />
      </div>
    </div>

    <CompanyLogos />
  </Container>
</template>

<script setup lang="ts">
import { IconBulb, IconCurrencyDollar, IconStar } from "@tabler/icons-vue";
import Container from "~/components/Container.vue";
import TimelineFull from "~/components/TimelineFull.vue";
import CompanyLogos from "~/components/CompanyLogos.vue";
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

// Initialize scroll reveal animations
useScrollReveal();

// Meta
useHead({
  title: t("pages.about.title"),
});

const missionItems = computed(() => [
  {
    key: "item-1",
    label: t("pages.about.mission.items.i1"),
    icon: IconBulb,
  },
  {
    key: "item-2",
    label: t("pages.about.mission.items.i2"),
    icon: IconCurrencyDollar,
  },
  {
    key: "item-3",
    label: t("pages.about.mission.items.i3"),
    icon: IconStar,
  },
]);
</script>

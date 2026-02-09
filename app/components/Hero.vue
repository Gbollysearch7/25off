<template>
  <Container class="sm:py-12">
    <div
      class="mx-auto rounded-[48px] overflow-hidden lg:py-12 lg:bg-gradient-to-b from-transparent dark:to-neutral-900 to-neutral-100 relative lg:px-4 flex flex-col gap-12 items-center justify-center"
    >
      <!-- Mobile hero image (LCP element) - High quality WebP with preload -->
      <div class="lg:hidden -mb-12">
        <img
          class="w-72 sm:w-80 h-auto"
          src="/landing/vienno/arms-crossed-mobile.webp"
          alt="TradersYard mascot"
          width="320"
          height="400"
          fetchpriority="high"
          decoding="sync"
        />
      </div>

      <div
        class="relative z-10 flex flex-col gap-4 items-center justify-center"
      >
        <ChipLabel class="flex items-center gap-2" :uppercase="false">
          {{ t("pages.home.hero.chip") }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            class="w-3 h-3 rounded-[1px]"
          >
            <path fill="#d52b1e" d="M0 0h32v32H0z" />
            <path fill="#fff" d="M13 6h6v20h-6z" />
            <path fill="#fff" d="M6 13h20v6H6z" />
          </svg>
        </ChipLabel>

        <h1
          class="font-clash text-center dark:text-white font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {{ t("pages.home.hero.heading") }}
        </h1>

        <p
          class="text-center font-medium text-lg md:text-xl text-neutral-600 dark:text-neutral-400"
        >
          {{ t("pages.home.hero.description") }}
        </p>
      </div>

      <div
        class="relative z-10 flex flex-col items-center justify-center md:flex-row gap-4 w-full"
      >
        <HeroCTA
          href="/auth/register"
          :text="t('common.buttons.getFundedNow')"
          class="w-full md:w-auto md:min-w-64"
        />
        <Button
          variant="dark"
          :href="config.public.discordUrl"
          target="_blank"
          class="flex justify-center w-full md:w-64"
          :icon="IconBrandDiscord"
        >
          {{ t("common.buttons.joinDiscord") }}
        </Button>
      </div>

      <SocialProof />

      <!-- Desktop hero image - lazy loaded, not LCP -->
      <div
        class="hidden lg:block absolute left-0 top-0 translate-y-10 -translate-x-10"
      >
        <img
          class="w-96 h-auto"
          src="/landing/vienno/arms-crossed.webp"
          alt="TradersYard mascot"
          width="384"
          height="480"
          loading="lazy"
          decoding="async"
        />
      </div>

      <!--			<FloatingCandles class="lg:w-64 xl:w-80 absolute right-2 xl:right-10 -bottom-24" />-->
    </div>
  </Container>
</template>

<script setup lang="ts">
import { IconBrandDiscord } from "@tabler/icons-vue";
import SocialProof from "~/components/SocialProof.vue";
import HeroCTA from "~/components/HeroCTA.vue";

const { t } = useI18n();
const config = useRuntimeConfig();

// Preload the hero image for mobile
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/landing/vienno/arms-crossed-mobile.webp',
      media: '(max-width: 1023px)',
      fetchpriority: 'high'
    }
  ]
});
</script>

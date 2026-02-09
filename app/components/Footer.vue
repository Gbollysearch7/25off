<template>
  <footer
    class="bg-neutral-100 dark:bg-neutral-900 xl:mx-12 rounded-t-3xl xl:rounded-3xl"
  >
    <Container class="pt-40 md:pt-48 pb-12">
      <div
        class="flex flex-col xl:flex-row xl:justify-between gap-12 xl:gap-0 mb-12 border-b border-neutral-200 dark:border-neutral-800"
      >
        <div class="space-y-12 lg:space-y-6">
          <div
            class="flex flex-col justify-center items-center md:justify-start md:items-start gap-6 l:gap-2"
          >
            <div>
              <Logo />
            </div>

            <div class="flex flex-col sm:flex-row gap-2">
              <a
                v-for="link in appLinks"
                :key="link.key"
                :href="link.href"
                class="flex bg-white dark:bg-neutral-800 items-center gap-2 rounded-xl px-4 py-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <component :is="link.icon" :size="36" class="dark:text-white" />
                <div>
                  <div class="text-xs dark:text-neutral-400 text-neutral-900">
                    {{ link.label }}
                  </div>
                  <div class="text-lg font-semibold dark:text-white">
                    {{ link.platform }}
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Social Icons -->
          <div class="flex justify-center md:justify-start gap-6">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :class="[
                social.color,
                'hover:scale-110 transition-all duration-200',
              ]"
              target="_blank"
            >
              <component :is="social.icon" :size="24" />
              <span class="sr-only">{{ social.name }}</span>
            </a>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Quick Links -->
          <div
            v-for="column in linkColumns"
            :key="column.title"
            class="space-y-2"
          >
            <h3 class="font-clash font-medium dark:text-white">
              {{ column.title }}
            </h3>
            <ul class="flex md:flex-col flex-wrap gap-2">
              <li v-for="link in column.links" :key="link.label">
                <component
                  :is="link.href ? 'a' : NuxtLink"
                  v-bind="
                    link.href
                      ? {
                          href: link.href,
                          target: link.href ? '_blank' : '_self',
                          rel: 'noopener noreferrer',
                        }
                      : { to: link.to }
                  "
                  class="text-sm hover:text-primary text-neutral-600 dark:text-neutral-400 transition-colors"
                >
                  {{ link.label }}
                </component>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Large Disclaimer Section -->
      <div class="space-y-8 mb-8">
        <div
          v-for="disclaimer in disclaimers"
          :key="disclaimer.id"
          class="text-xs text-neutral-600"
        >
          <h4 class="font-semibold">{{ disclaimer.title }}</h4>
          <p class="leading-relaxed">{{ disclaimer.content }}</p>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <p class="text-center text-neutral-400 text-sm">
          {{ $t("footer.copyright") }}
        </p>
      </div>
    </Container>
  </footer>
</template>

<script setup lang="ts">
import {
  IconBrandAppleFilled,
  IconBrandGooglePlay,
  IconBrandDiscordFilled,
  IconBrandYoutubeFilled,
  IconBrandInstagramFilled,
  IconBrandXFilled,
  IconBrandTiktokFilled,
  IconBrandLinkedinFilled,
  IconBrandFacebookFilled,
} from "@tabler/icons-vue";
import Container from "~/components/Container.vue";
import { NuxtLink } from "#components";

const { t } = useI18n();

const localePath = useLocalePath();
const config = useRuntimeConfig();

const appLinks = computed(() => [
  {
    key: "app-store",
    href: config.public.appStoreUrl,
    icon: IconBrandAppleFilled,
    label: "Download on the",
    platform: "App Store",
  },
  {
    key: "google-play",
    href: config.public.playStoreUrl,
    icon: IconBrandGooglePlay,
    label: "Get it on",
    platform: "Google Play",
  },
]);

// Link columns data structure
const linkColumns = computed(() => [
  {
    title: t("footer.resources.title"),
    links: [
      {
        label: t("footer.resources.affiliate"),
        to: localePath("/affiliate-program"),
      },
      { label: t("footer.resources.about"), to: localePath("/about") },
      { label: t("footer.resources.support"), to: localePath("/support") },
      { label: t("footer.resources.rules"), to: localePath("/rules") },
      {
        label: t("footer.resources.accountScaling"),
        to: localePath("/account-scaling"),
      },
      {
        label: t("footer.resources.docs"),
        href: "https://docs.tradersyard.com/",
        external: true,
      },
      {
        label: t("footer.resources.blog"),
        href: "https://blog.tradersyard.com/",
        external: true,
      },
    ],
  },
  {
    title: t("footer.products.title"),
    links: [
      {
        label: t("footer.products.webTrader"),
        href: config.public.webTraderUrl,
      },
      { label: t("footer.products.agenaTrader"), href: config.public.agenaUrl },
      {
        label: t("footer.products.agenaBroker"),
        href: config.public.agenaBrokerUrl,
      },
    ],
  },
  {
    title: t("footer.legal.title"),
    links: [
      {
        label: t("footer.legal.terms"),
        to: localePath("/legal/terms-conditions"),
      },
      {
        label: t("footer.legal.privacy"),
        to: localePath("/legal/privacy-policy"),
      },
      {
        label: t("footer.legal.cookies"),
        to: localePath("/legal/cookie-declaration"),
      },
      {
        label: t("footer.legal.riskDisclaimer"),
        to: localePath("/legal/risk-disclaimer"),
      },
      { label: t("footer.legal.imprint"), to: localePath("/legal/imprint") },
    ],
  },
]);

// Social media links
const socialLinks = computed(() => [
  {
    name: "Discord",
    icon: IconBrandDiscordFilled,
    href: config.public.discordUrl,
    color: "text-discord",
  },
  {
    name: "YouTube",
    icon: IconBrandYoutubeFilled,
    href: config.public.youtubeUrl,
    color: "text-youtube",
  },
  {
    name: "Instagram",
    icon: IconBrandInstagramFilled,
    href: config.public.instagramUrl,
    color: "text-instagram",
  },
  {
    name: "X (Twitter)",
    icon: IconBrandXFilled,
    href: config.public.xUrl,
    color: "text-twitter dark:text-white",
  },
  {
    name: "TikTok",
    icon: IconBrandTiktokFilled,
    href: config.public.tiktokUrl,
    color: "text-tiktok dark:text-white",
  },
  {
    name: "LinkedIn",
    icon: IconBrandLinkedinFilled,
    href: config.public.linkedinUrl,
    color: "text-linkedin",
  },
  {
    name: "Facebook",
    icon: IconBrandFacebookFilled,
    href: config.public.facebookUrl,
    color: "text-facebook",
  },
]);

// Disclaimer sections
const disclaimers = computed(() => [
  {
    id: "general",
    title: t("footer.disclaimers.generalDisclosure.title"),
    content: t("footer.disclaimers.generalDisclosure.content"),
  },
  {
    id: "risk",
    title: t("footer.disclaimers.riskDisclosure.title"),
    content: t("footer.disclaimers.riskDisclosure.content"),
  },
  {
    id: "hypothetical",
    title: t("footer.disclaimers.hypotheticalPerformance.title"),
    content: t("footer.disclaimers.hypotheticalPerformance.content"),
  },
  {
    id: "compensation",
    title: t("footer.disclaimers.customerCompensation.title"),
    content: t("footer.disclaimers.customerCompensation.content"),
  },
  {
    id: "cftc",
    title: t("footer.disclaimers.cftcCompliance.title"),
    content: t("footer.disclaimers.cftcCompliance.content"),
  },
]);
</script>

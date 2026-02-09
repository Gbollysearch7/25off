<template>
  <div class="pt-12 space-y-10 md:space-y-32">
    <Container class="space-y-10 md:space-y-32">
      <PageHeading class="space-y-4 text-center">
        <template #default>
          {{ t("pages.contact.heading") }}
        </template>
        <template #text>
          {{ t("pages.contact.description") }}
        </template>
      </PageHeading>

      <div class="grid md:grid-cols-3 gap-4">
        <div
          class="scroll-reveal fade-up rounded-2xl p-6 border border-neutral-900 bg-neutral-900 space-y-8"
        >
          <div class="space-y-3">
            <div class="text-white text-2xl font-medium font-clash">
              {{ t("pages.contact.email.title") }}
            </div>
            <div class="text-neutral-400">
              {{ t("pages.contact.email.description") }}
            </div>
          </div>
          <div>
            <Button
              class="text-center w-full block"
              variant="light"
              :href="`mailto:${config.public.supportEmail}`"
              :icon="IconMail"
            >
              {{ config.public.supportEmail }}
            </Button>
          </div>
        </div>

        <div
          class="scroll-reveal fade-up delay-100 rounded-2xl p-6 border dark:border-transparent bg-white border-neutral-200 space-y-8"
        >
          <div class="space-y-3">
            <div class="text-2xl font-medium font-clash">
              {{ t("pages.contact.liveChat.title") }}
            </div>
            <div class="text-neutral-600">
              {{ t("pages.contact.liveChat.description") }}
            </div>
          </div>
          <div>
            <Button
              class="text-center w-full block"
              :icon="IconMessageCircle"
              @click="openLiveChat"
            >
              {{ t("pages.contact.liveChat.button") }}
            </Button>
          </div>
        </div>

        <div
          class="scroll-reveal fade-up delay-200 rounded-2xl p-6 border border-neutral-900 bg-neutral-900 space-y-8"
        >
          <div class="space-y-3">
            <div class="text-white text-2xl font-medium font-clash">
              {{ t("pages.contact.discord.title") }}
            </div>
            <div class="text-neutral-400">
              {{ t("pages.contact.discord.description") }}
            </div>
          </div>
          <div>
            <Button
              class="text-center w-full block"
              variant="light"
              :href="config.public.discordUrl"
              :icon="IconBrandDiscord"
              target="_blank"
            >
              {{ t("pages.contact.discord.button") }}
            </Button>
          </div>
        </div>
      </div>
    </Container>

    <FAQ />
  </div>
</template>

<script setup>
import PageHeading from "~/components/PageHeading.vue";
import {
  IconBrandDiscord,
  IconMail,
  IconMessageCircle,
} from "@tabler/icons-vue";
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

const config = useRuntimeConfig();

// Initialize scroll reveal animations
useScrollReveal();

const openLiveChat = () => {
  if (import.meta.client && window.Intercom) {
    window.Intercom("show");
  }
};

useHead({
  title: t("pages.contact.title"),
});
</script>

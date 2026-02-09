<template>
	<Container>
    <div
      class="scroll-reveal fade-up overflow-hidden relative flex flex-col items-center p-8 md:p-16 rounded-3xl bg-[#5865F2] space-y-12"
    >
			<div class="relative z-10 flex flex-col items-center gap-3">
        <div
          class="flex items-center justify-center bg-white rounded-full size-12 lg:size-20 hover:scale-110 transition-transform"
        >
					<IconBrandDiscordFilled class="size-8 lg:size-12 text-[#5865F2]" />
				</div>
        <h1
          class="text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold text-white"
        >
          {{ t("discord.heading") }}
				</h1>
				<p class="text-center text-neutral-200 text-sm sm:text-base">
          {{ t("discord.description") }}
				</p>
			</div>

			<div>
        <Button
          variant="light"
          :href="config.public.discordUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:scale-105 transition-transform"
        >
          {{ t("common.buttons.joinOurDiscord") }}
				</Button>
			</div>

      <div
        class="hidden lg:block absolute bottom-0 w-[556px] translate-y-32 -translate-x-20 left-0"
      >
				<img 
					src="/landing/vienno/inviting.webp" 
					alt="TradersYard mascot inviting to Discord"
					width="556"
					height="600"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import { IconBrandDiscordFilled } from "@tabler/icons-vue";
import Container from "~/components/Container.vue";

const { t } = useI18n();

const config = useRuntimeConfig();
</script>

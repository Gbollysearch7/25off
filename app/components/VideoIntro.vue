<template>
	<Container>
    <div
      class="scroll-reveal fade-up dark:bg-neutral-900 bg-neutral-100 rounded-3xl p-4 sm:p-8 md:p-16 space-y-4 md:space-y-12"
    >
      <div
        class="rounded-xl lg:rounded-2xl lg:h-[720px] h-64 md:h-80 bg-neutral-200 dark:bg-neutral-800 overflow-hidden relative"
      >
				<!-- YouTube Facade: Show thumbnail until user clicks to play -->
				<template v-if="!isPlaying">
					<button 
						@click="isPlaying = true"
						class="w-full h-full relative group cursor-pointer"
						:aria-label="t('common.accessibility.playVideo')"
					>
						<!-- YouTube Thumbnail -->
						<img 
							:src="thumbnailUrl"
							:alt="t('common.accessibility.videoThumbnail')"
							class="w-full h-full object-cover"
							loading="lazy"
							decoding="async"
							width="1280"
							height="720"
            />
						<!-- Play Button Overlay -->
            <div
              class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
            >
              <div
                class="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
              >
                <svg
                  class="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</div>
					</button>
				</template>
				<!-- Actual YouTube iframe (only loads when clicked) -->
				<template v-else>
					<iframe 
						class="w-full h-64 md:h-80 lg:h-[720px]" 
						:src="config.public.promoVideoUrl + '&autoplay=1'" 
						title="YouTube video player" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen
					></iframe>
				</template>
			</div>

			<div class="flex justify-center w-full">
				<Button href="/auth/register">
          {{ t("common.buttons.getFundedNow") }}
				</Button>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
const { t } = useI18n();

const config = useRuntimeConfig();

const isPlaying = ref(false);

// Extract video ID and generate thumbnail URL
const videoId = computed(() => {
  const url = config.public.promoVideoUrl;
  const match = url.match(/embed\/([^?]+)/);
  return match ? match[1] : "";
});

// Use hq720 (1280x720) from i.ytimg.com - higher quality and more reliable than maxresdefault
const thumbnailUrl = computed(() => {
  return `https://i.ytimg.com/vi/${videoId.value}/hq720.jpg`;
});
</script>

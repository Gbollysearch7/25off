<template>
	<Container class="py-16 space-y-12">
    <div class="scroll-reveal fade-up flex flex-col items-center space-y-4">
			<ChipLabel>
        {{ t("pages.home.howItWorks.chip") }}
			</ChipLabel>
      <h2
        class="font-clash text-2xl sm:text-4xl md:text-5xl font-semibold dark:text-white"
      >
        {{ t("pages.home.howItWorks.heading") }}
			</h2>
		</div>

		<div class="grid lg:grid-cols-2 items-center gap-8">
			<!-- Desktop only mascot - NOT rendered on mobile to prevent 959KB download -->
			<div v-if="isDesktop" class="hidden lg:block space-y-8 rtl:order-2">
				<div class="flex justify-center rtl:justify-start">
					<img 
						src="/landing/vienno/peaking.webp" 
						alt="" 
						class="max-w-full h-auto"
						loading="lazy"
						decoding="async"
          />
				</div>
				
				<div class="flex rtl:justify-start">
					<Button href="/auth/register" class="max-w-fit">
            {{ t("pages.home.howItWorks.cta") }}
					</Button>
				</div>
			</div>

      <div
        class="flex flex-col gap-4 lg:gap-0 justify-between self-stretch rtl:order-1"
      >
				<div
					v-for="(step, index) in steps"
					:key="step.key"
          class="scroll-reveal fade-up flex flex-col lg:flex-row gap-2 lg:gap-8 bg-neutral-100 dark:bg-neutral-900 p-6 rounded-3xl lg:p-0 lg:bg-transparent dark:lg:bg-transparent rtl:lg:flex-row-reverse rtl:text-right"
          :class="[`delay-${(index + 1) * 100}`]"
				>
					<div class="flex lg:items-center lg:justify-center relative">
            <div
              class="size-10 lg:size-12 lg:text-xl font-semibold font-clash rounded-full shrink-0 flex items-center justify-center bg-primary text-white"
            >
              0{{ index + 1 }}
						</div>

            <div
              v-if="index < steps.length - 1"
              class="hidden lg:block absolute left-1/2 rtl:right-1/2 rtl:left-auto top-10 translate-y-10 lg:top-12 lg:translate-y-12 -translate-x-1/2 rtl:translate-x-1/2"
            >
              <svg
                width="12"
                height="268"
                viewBox="0 0 12 268"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="lg:w-2 xl:w-[10px] 2xl:w-3 h-auto"
              >
                <path
                  opacity="0.5"
                  d="M5.46968 267.53C5.76257 267.823 6.23745 267.823 6.53034 267.53L11.3033 262.757C11.5962 262.464 11.5962 261.99 11.3033 261.697C11.0104 261.404 10.5355 261.404 10.2427 261.697L6.00001 265.939L1.75737 261.697C1.46448 261.404 0.989604 261.404 0.696711 261.697C0.403817 261.99 0.403817 262.464 0.696711 262.757L5.46968 267.53ZM6 0L5.25 3.27835e-08L5.25001 267L6.00001 267L6.75001 267L6.75 -3.27835e-08L6 0Z"
                  fill="url(#paint0_linear_arrow)"
                />
								<defs>
                  <linearGradient
                    id="paint0_linear_arrow"
                    x1="5.5"
                    y1="1.38949e-06"
                    x2="6"
                    y2="149"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      :stop-color="theme === 'dark' ? '#0D0D0D' : '#ffffff'"
                    />
                    <stop offset="1" stop-color="#4250EB" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>

					<div class="self-stretch w-full space-y-1 md:space-y-3">
            <h4
              class="font-clash font-semibold text-2xl md:text-4xl dark:text-white"
            >
              {{ t(`pages.home.howItWorks.steps.${step.key}.title`) }}
            </h4>
            <p
              class="text-xl md:text-lg dark:text-neutral-400 text-neutral-600"
            >
              {{ t(`pages.home.howItWorks.steps.${step.key}.description`) }}
            </p>
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import { useTheme } from "~~/composables/useTheme";

const { t } = useI18n();

const { theme } = useTheme();

// Only render desktop-only images on desktop to prevent mobile downloads
const isDesktop = ref(false);
onMounted(() => {
  isDesktop.value = window.matchMedia("(min-width: 1024px)").matches;
});

const steps = computed(() => [
	{
		key: "evaluation",
    image: "",
	},
	{
		key: "verification",
    image: "",
	},
	{
		key: "fundedAccount",
    image: "",
  },
]);
</script>

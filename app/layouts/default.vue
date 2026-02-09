<template>
  <div class="min-h-screen bg-white dark:bg-dark transition-colors duration-200 relative xl:pb-12">
    <div class="relative z-10">
	    <InfiniteBanner :repeat="100">
		    <div class="font-clash flex items-center gap-6 md:gap-12 py-2">
			    <div class="tracking-wide uppercase text-white font-semibold text-xs">
				    {{ banner?.left_text || t('banner.text1') }}
			    </div>
			    <div>
				    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M14.9477 2.92125C15.9655 2.92331 16.9832 2.94745 18 2.99368C17.9065 3.29336 17.7316 3.79255 17.5556 4.16343C16.3597 6.68599 15.2599 9.31733 14.0387 11.8168C13.9139 12.0724 13.1843 11.8581 13.0129 11.9729C13.0921 12.0693 13.4687 12.0766 13.6261 12.1616C14.2329 12.4891 14.4697 13.0281 14.4898 13.675C14.5081 14.231 14.3047 14.7715 13.9246 15.1767C12.9735 16.1729 11.5603 15.9899 10.3049 15.9818C9.48902 15.9715 8.67307 15.9719 7.85723 15.9827C7.85768 15.4733 7.78835 13.9573 7.89861 13.5653C8.13654 13.3711 11.1049 13.6319 11.9469 13.3064C12.3587 12.9572 12.3079 12.4042 11.911 12.1944C11.2676 11.8542 9.17875 11.8824 8.50268 12.0166C8.35193 9.24032 8.49922 5.81058 8.49956 2.9802C9.24418 3.05345 10.6216 3.00833 11.4192 3.01204C11.4866 4.8201 11.508 6.62957 11.4833 8.43872C11.4795 9.07204 11.4114 9.97148 11.4348 10.5574C11.6443 10.1382 11.8657 9.20538 11.9693 8.99712C12.3771 8.17704 14.5371 3.35813 14.9477 2.92125Z" fill="white"/>
					    <path d="M5.07507 0.00868381L5.15271 0C5.28977 0.169278 5.246 2.62093 5.20898 2.98951C5.84358 2.95008 6.84424 3.00437 7.52913 3.00478C7.52456 3.72151 7.49668 4.70589 7.59755 5.4039C6.49329 5.44695 5.43919 5.37213 4.3314 5.5173C2.61755 5.74188 2.53122 8.27852 3.69693 9.11082C4.36544 9.58811 6.6685 9.57761 7.43244 9.42087C7.40122 10.2367 7.42589 11.1262 7.40325 11.9617C6.74209 11.9674 6.0809 11.9678 5.41974 11.9629C4.47373 11.9791 3.54182 12.0156 2.63431 11.7039C1.71573 11.3956 0.960792 10.7275 0.541544 9.8519C0.135566 9.01535 0.0309972 7.88169 0.348382 7.00144C0.687882 6.05979 1.24236 5.72638 2.08416 5.31768C1.56193 5.38596 0.611886 5.54011 0.123379 5.43755C-0.0689997 5.39719 -0.00259622 3.30476 0.095105 3.0133C0.274551 2.89296 1.98308 2.95869 2.33005 2.95912C2.03157 0.807518 3.05188 0.0353154 5.07507 0.00868381Z" fill="white"/>
				    </svg>
			    </div>
			    <div class="tracking-wide uppercase text-white font-semibold text-xs">
				    {{ banner?.right_text || t('banner.text2') }}
			    </div>
			    <div>
				    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					    <path d="M14.9477 2.92125C15.9655 2.92331 16.9832 2.94745 18 2.99368C17.9065 3.29336 17.7316 3.79255 17.5556 4.16343C16.3597 6.68599 15.2599 9.31733 14.0387 11.8168C13.9139 12.0724 13.1843 11.8581 13.0129 11.9729C13.0921 12.0693 13.4687 12.0766 13.6261 12.1616C14.2329 12.4891 14.4697 13.0281 14.4898 13.675C14.5081 14.231 14.3047 14.7715 13.9246 15.1767C12.9735 16.1729 11.5603 15.9899 10.3049 15.9818C9.48902 15.9715 8.67307 15.9719 7.85723 15.9827C7.85768 15.4733 7.78835 13.9573 7.89861 13.5653C8.13654 13.3711 11.1049 13.6319 11.9469 13.3064C12.3587 12.9572 12.3079 12.4042 11.911 12.1944C11.2676 11.8542 9.17875 11.8824 8.50268 12.0166C8.35193 9.24032 8.49922 5.81058 8.49956 2.9802C9.24418 3.05345 10.6216 3.00833 11.4192 3.01204C11.4866 4.8201 11.508 6.62957 11.4833 8.43872C11.4795 9.07204 11.4114 9.97148 11.4348 10.5574C11.6443 10.1382 11.8657 9.20538 11.9693 8.99712C12.3771 8.17704 14.5371 3.35813 14.9477 2.92125Z" fill="white"/>
					    <path d="M5.07507 0.00868381L5.15271 0C5.28977 0.169278 5.246 2.62093 5.20898 2.98951C5.84358 2.95008 6.84424 3.00437 7.52913 3.00478C7.52456 3.72151 7.49668 4.70589 7.59755 5.4039C6.49329 5.44695 5.43919 5.37213 4.3314 5.5173C2.61755 5.74188 2.53122 8.27852 3.69693 9.11082C4.36544 9.58811 6.6685 9.57761 7.43244 9.42087C7.40122 10.2367 7.42589 11.1262 7.40325 11.9617C6.74209 11.9674 6.0809 11.9678 5.41974 11.9629C4.47373 11.9791 3.54182 12.0156 2.63431 11.7039C1.71573 11.3956 0.960792 10.7275 0.541544 9.8519C0.135566 9.01535 0.0309972 7.88169 0.348382 7.00144C0.687882 6.05979 1.24236 5.72638 2.08416 5.31768C1.56193 5.38596 0.611886 5.54011 0.123379 5.43755C-0.0689997 5.39719 -0.00259622 3.30476 0.095105 3.0133C0.274551 2.89296 1.98308 2.95869 2.33005 2.95912C2.03157 0.807518 3.05188 0.0353154 5.07507 0.00868381Z" fill="white"/>
				    </svg>
			    </div>
		    </div>
	    </InfiniteBanner>
	    <!-- Navigation -->

	    <div class="hidden lg:block sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-xl">
		    <Navigation :links="links" />
	    </div>

	    <div class="lg:hidden">
		    <MobileNavigation :links="links" />
	    </div>

	    <!-- Main Content -->
	    <main>
		    <slot />
	    </main>

	    <Newsletter />

	    <!-- Footer -->
	    <Footer />

	    <!-- Notice -->
	    <Notice />

	    <!-- Giveaway Popup -->
	    <GiveawayPopup />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "~~/composables/useTheme.js";
import Newsletter from "~/components/Newsletter.vue";
import MobileNavigation from "~/components/MobileNavigation.vue";
import GiveawayPopup from "~/components/GiveawayPopup.vue";
import type { NavLink } from "~/components/NavLink.vue";
import { computed } from 'vue'

const { t } = useI18n()
const localePath = useLocalePath()

const links = computed<NavLink[]>(() => [
	{
		to: localePath("/"),
		key: "home",
		label: t("nav.home")
	},
	{
		to: localePath('/#pricing'),
		key: "pricing",
		label: t("nav.pricing")
	},
	{
		to: localePath("/about"),
		key: "about",
		label: t("nav.about")
	},
	{
		key: "arena",
		label: t("nav.arena.title"),
		links: [
			{
				to: localePath("/arena"),
				key: "tournaments",
				label: t("nav.arena.tournaments")
			},
			{
				to: localePath("/landing-survivor-showdown"),
				key: "survivor-showdown",
				label: t("nav.arena.survivorShowdown")
			}
		]
	},
	{
		key: "resources",
		label: t("nav.resources.title"),
		links: [
			{
				to: localePath("rules"),
				key: "rules",
				label: t("nav.resources.rules")
			},
			{
				to: localePath("/account-scaling"),
				key: "account-scaling",
				label: t("nav.resources.accountScaling")
			},
			{
				to: localePath("/affiliate-program"),
				key: "affiliate",
				label: t("nav.resources.affiliate")
			},
			{
				to: localePath("/support"),
				key: "support",
				label: t("nav.resources.support")
			},
			{
				key: "docs",
				label: t("nav.resources.docs"),
				href: "https://docs.tradersyard.com",
				external: true
			},
			{
				key: "blog",
				label: t("nav.resources.blog"),
				href: "https://blog.tradersyard.com/",
				external: true
			}
		]
	}
])

interface PromoBannerResource {
  name: string
  /** @enum {enum} */
  visibility_scope: 'guests' | 'users' | 'everyone'
  left_text?: string | null
  right_text?: string | null
  style?: string | null
  button_text?: string | null
  button_link?: string | null
  starts_at?: string | null
  ends_at: string
  is_button_enabled: boolean
  is_preview_mode: boolean
  is_countdown_enabled: boolean
}

const { locale } = useI18n()

const { data } = await useFetch<{data: PromoBannerResource}>(
  'https://tradersyard.com/api/v3.0/promo-banners/active',
  {
    headers: {
      'accept-language': locale.value
    },
    watch: [locale]
  }
)
const banner = computed(() => data.value?.data)

// Initialize theme on layout mount
onMounted(() => {
  const { initializeTheme } = useTheme()
  initializeTheme()
})
</script>
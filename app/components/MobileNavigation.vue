<template>
	<div class="p-4 relative">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2 rtl:flex-row-reverse">
				<Logo />
				<LocaleSwitcher />
			</div>

			<div class="flex items-center gap-2 rtl:flex-row-reverse">
				<ThemeToggle />
				<button
					class="rounded-lg p-2"
					@click="isMobileMenuOpen = true"
					:class="{
						'bg-primary text-white': isMobileMenuOpen,
						'text-primary': !isMobileMenuOpen
					}"
					aria-label="Open menu"
				>
					<IconMenuDeep class="pointer-events-none" :size="28" />
				</button>
			</div>
		</div>

		<div
			ref="mobileMenu"
			class="z-50 flex flex-col fixed inset-0 bg-primary text-white p-4 transition-all ease-in-out duration-300"
			:class="{
				'translate-y-0 opacity-100 visible': isMobileMenuOpen,
				'translate-y-4 opacity-0 invisible': !isMobileMenuOpen,
			}"
		>
			<div class="flex justify-between mb-6">
				<div class="size-12">
					<svg class="w-full h-auto" width="164" height="164" viewBox="0 0 164 164" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M34.8175 0.298191C37.9867 -0.276309 46.6946 0.154191 50.2375 0.164891L78.106 0.167491L110.609 0.146092C125.462 0.134192 138.275 -1.44431 150.448 9.15469C164.998 21.824 163.308 36.5448 163.277 53.9432L163.252 85.5036L163.254 112.145C163.275 118.424 163.591 127.299 162.473 133.252C161.26 139.603 158.393 145.521 154.162 150.411C147.767 157.948 138.729 162.033 128.958 162.832C125.335 163.381 118.108 162.933 114.12 162.924L86.3488 162.93L51.2054 162.937C44.6766 162.936 36.3835 163.4 30.1118 162.32C13.8911 159.526 1.26933 145.141 0.305031 128.75C-0.0804692 122.196 0.0441307 115.99 0.0479307 109.535L0.0636311 77.3883L0.0378313 50.333C0.0311313 44.4569 -0.239369 36.3013 0.769531 30.7074C1.91553 24.1 4.81753 17.9224 9.17153 12.8219C15.8282 4.97329 24.7173 1.11639 34.8175 0.298191ZM98.6941 52.6241C94.1081 52.7101 85.0786 52.9278 80.6445 52.6318C80.9514 65.3982 80.5307 78.5309 80.7105 91.332C80.7899 96.99 80.5518 102.588 80.8179 108.277C85.6069 108.055 99.5231 107.145 102.855 110.157C103.713 110.923 104.219 112.007 104.256 113.156C104.496 118.942 95.7941 118.228 91.8871 118.225C86.9051 118.196 81.9231 118.197 76.9412 118.229C77.1619 120.218 77.2541 131.504 76.9473 133.366C86.3764 133.416 96.6701 134.088 105.903 132.587C118.19 130.589 123.054 112.051 109.037 108.828L109.04 108.517C110.093 107.92 113.286 108.233 114.557 108.321C115.393 106.316 116.274 104.331 117.199 102.366L132.29 69.2327C133.678 66.1711 138.57 54.8863 140.022 52.6219C134.288 52.8047 126.326 52.813 120.575 52.64C114.342 64.9317 108.857 77.9594 102.699 90.321C101.936 91.854 100.341 97.662 99.2501 98.242C98.5581 97.678 98.6501 92.074 98.6681 90.898C98.8651 78.1979 98.3721 65.3039 98.6941 52.6241ZM55.5523 34.5306C43.8674 36.1251 42.0052 41.9313 42.6158 52.6737L28.0974 52.6802C28.3273 55.7806 28.371 64.2492 28.1745 67.4374C30.1034 67.4205 39.6261 67.0587 40.6157 67.6077L40.4394 67.9108C30.8638 69.9983 27.4334 82.0456 29.5211 90.577C30.9846 96.557 33.9806 100.72 39.1458 104.104C46.4381 108.882 54.8847 108.199 63.2785 108.176C66.4875 108.171 70.3193 108.073 73.4773 108.248C73.2884 106.142 73.1142 94.934 73.4356 93.193C66.2799 93.228 54.3016 94.593 49.0059 89.628C44.7798 85.6662 44.2057 74.9352 48.5836 70.7579C53.5606 66.0311 67.3488 67.3422 73.9244 67.4326L74.1908 67.4365C73.9572 64.2253 73.8908 55.8292 74.1795 52.6804C69.4174 52.6509 64.655 52.6717 59.8933 52.7429C59.8265 46.6231 59.8244 40.5027 59.8869 34.3828C59.2402 34.3954 55.9675 34.4216 55.5523 34.5306Z" fill="white"/>
					</svg>
				</div>

				<div>
					<button
						class="p-2 text-white"
						@click="isMobileMenuOpen = false"
						aria-label="Close menu"
					>
						<IconX class="pointer-events-none" :size="28" />
					</button>
				</div>
			</div>

			<div class="flex-1 flex-col flex justify-start items-center gap-6 overflow-y-auto">
				<Button variant="light" class="shrink-0 w-full text-center" size="lg" href="/auth/login">
					{{ $t('nav.signIn') }}
				</Button>

				<div class="w-full space-y-3">
					<template
						v-for="link in mainLinks"
						:key="link.key"
					>
						<div v-if="link.to" class="tracking-wide font-clash text-xl py-2 font-medium">
							<RouterLink :to="link.to">
								{{ link.label }}
							</RouterLink>
						</div>
					</template>
				</div>

				<div v-if="arena && arena?.links" class="w-full space-y-3 pt-6 border-t border-t-white/10">
					<div v-for="link in arena.links" :key="link.key" class="tracking-wide font-clash text-xl py-2 font-medium">
						<component
							:is="link.href ? 'a' : NuxtLink"
							v-bind="link.href
						    ? { href: link.href, target: link.external ? '_blank' : '_self', rel: 'noopener noreferrer' }
						    : { to: link.to }"
						>
							{{ link.label }}
						</component>
					</div>
				</div>

				<div v-if="resources && resources?.links" class="w-full space-y-3 pt-6 border-t border-t-white/10">
					<div v-for="link in resources.links" :key="link.key" class="tracking-wide font-clash text-xl py-2 font-medium">
						<component
							:is="link.href ? 'a' : NuxtLink"
							v-bind="link.href
						    ? { href: link.href, target: link.external ? '_blank' : '_self', rel: 'noopener noreferrer' }
						    : { to: link.to }"
						>
							{{ link.label }}
						</component>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { IconMenuDeep, IconX } from "@tabler/icons-vue"
import { type NavLink as INavLink } from "~/components/NavLink.vue";
import { useRouter } from "vue-router"
import { NuxtLink } from "#components";

const { links } = defineProps<{
	links: INavLink[]
}>()

const isMobileMenuOpen = ref(false)

const router = useRouter()

watch(isMobileMenuOpen, (open) => {
	if (import.meta.server) return
	if (open) {
		document.body.style.overflow = "hidden"
	} else {
		document.body.style.overflow = ""
	}
})

router.afterEach(() => {
	isMobileMenuOpen.value = false
})

const mainLinks = computed(() => links.filter(link => link.key !== 'resources'))
const resources = computed(() => links.find(link => link.key === 'resources'))
const arena = computed(() => links.find(link => link.key === 'arena'))

// Ensure scroll is restored if component unmounts
onBeforeUnmount(() => {
	if (import.meta.client) {
		document.body.style.overflow = ""
	}
})
</script>
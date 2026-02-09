<template>
  <div class="relative">
    <button
      @click="toggleDropdown"
      class="border flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200"
      :class="{
				'bg-neutral-100 border-neutral-200 dark:border-primary dark:bg-primary dark:text-white text-black': isOpen,
       'border-transparent text-neutral-600 dark:text-white/75 hover:text-primary': !isOpen
			}"
    >
      <img 
        :src="currentLocale?.flag" 
        :alt="currentLocale?.code"
        class="w-4 h-4 rounded-sm"
      >
      <span class="hidden lg:block">
	      {{ currentLocale?.label }}
      </span>
	    <span class="lg:hidden uppercase">
	      {{ currentLocale?.code }}
      </span>
	    <IconChevronDown
		    class="w-4 h-4 transition-transform duration-200"
		    :class="{ 'rotate-180': isOpen }"
	    />
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-full lg:w-32 bg-white border border-neutral-200 dark:border-neutral-900 dark:bg-neutral-900 rounded-lg p-1 z-50"
    >
      <button
	      v-for="appLocale in filteredLocales"
	      :key="appLocale.code"
	      @click="selectLocale(appLocale.code)"
	      class="w-full group flex items-center gap-2 px-2 py-1 rounded-md text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-primary hover:text-white transition-colors duration-200"
      >
	      <img 
	        :src="appLocale.flag" 
	        :alt="appLocale.code"
	        class="w-4 h-4 rounded-sm"
	      >
	      <span class="hidden lg:block">
	      {{ appLocale.label }}
      </span>
	      <span class="lg:hidden uppercase">
	      {{ appLocale.code }}
      </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconChevronDown } from "@tabler/icons-vue";

const { availableLocales, locale, setLocale } = useI18n()

const isOpen = ref(false)

const appLocales = [
	{
		code: "en",
		label: "English",
		flag: "/landing/flags/en.svg"
	},
	{
		code: "de",
		label: "Deutsch",
		flag: "/landing/flags/de.svg"
	},
	{
		code: "es",
		label: "Español",
		flag: "/landing/flags/es.svg"
	},
	{
		code: "fr",
		label: "Français",
		flag: "/landing/flags/fr.svg"
	},
	{
		code: "pt",
		label: "Português",
		flag: "/landing/flags/pt.svg"
	},
	{
		code: "ar",
		label: "العربية",
		flag: "/landing/flags/ar.svg"
	},
	{
		code: "ja",
		label: "日本語",
		flag: "/landing/flags/ja.svg"
	}
]

const filteredLocales = computed(() => {
	return appLocales
		.filter(appLocale => (availableLocales as any).includes(appLocale.code) && appLocale.code !== locale.value)
})

const currentLocale = computed(() => {
	return appLocales.find(l => l.code === locale.value) || null
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLocale = (code: string) => {
  setLocale(code as any)
  isOpen.value = false
}

// Close dropdown when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!(e.target as HTMLElement)?.closest('.relative')) {
      isOpen.value = false
    }
  })
})
</script>
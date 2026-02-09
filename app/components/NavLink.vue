<template>
  <!-- Regular Navigation Link -->
  <NuxtLink
    v-if="link.to"
    :to="link.to"
    class="px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200"
    :class="{
			'bg-black hover:text-white dark:bg-primary text-white': $route.fullPath === link.to,
			'text-neutral-600 dark:text-white/75': $route.fullPath !== link.to
		}"
  >
    {{ link.label }}
  </NuxtLink>

  <!-- Dropdown Menu -->
  <div v-else class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm font-semibold  transition-colors duration-200"
      :class="{
				'bg-black dark:bg-primary text-white hover:text-white': isOpen,
				'text-neutral-600 dark:text-white/75 hover:text-primary': !isOpen
       }"
    >
      <span>{{ link.label }}</span>

      <IconChevronDown
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform translate-y-1 scale-95"
      enter-to-class="opacity-100 transform translate-y-0 scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform translate-y-0 scale-100"
      leave-to-class="opacity-0 transform translate-y-1 scale-95"
    >
      <NavLinkDropdown
        v-if="isOpen && link.links"
        :items="link.links"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import NavLinkDropdown from "~/components/NavLinkDropdown.vue";
import { IconChevronDown } from "@tabler/icons-vue"
import { useRouter } from "#vue-router";

export interface NavLink {
	label: string
	to?: string
	key: string
	links?: {
		label: string
		href?: string
		to?: string
		key: string
		external?: boolean
	}[]
}

defineProps<{
	link: NavLink
}>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement>()

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const router = useRouter()

router.afterEach(() => {
	isOpen.value = false
})
// Close dropdown when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
      isOpen.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
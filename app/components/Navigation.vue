<template>
    <Container as="header" class="transition-colors duration-200 py-3">
      <div class="flex justify-between items-center h-16">
        
        <!-- Left Section: Logo + Locale Switcher -->
        <div class="w-full flex items-center space-x-6 rtl:space-x-reverse">
          <Logo />
          <LocaleSwitcher />
        </div>

        <!-- Center Section: Navigation Menu -->
        <div class="flex justify-center w-full">
	        <nav class="shrink-0 flex bg-neutral-100 dark:bg-primary/25 items-center space-x-2 rtl:space-x-reverse rounded-xl p-2">
		        <NavLink
			        v-for="link in links"
			        :key="link.to"
			        :link="link"
		        />
	        </nav>
        </div>

        <!-- Right Section: Theme Toggle + Sign In -->
        <div class="w-full flex items-center justify-end space-x-4 rtl:space-x-reverse">
          <ThemeToggle />
          
          <Button variant="dark" size="sm" href="/auth/login">
            {{ $t('nav.signIn') }}
          </Button>
        </div>
      </div>
    </Container>
</template>

<script setup lang="ts">
import NavLink, { type NavLink as INavLink } from "~/components/NavLink.vue";

defineProps<{
	links: INavLink[]
}>()
</script>
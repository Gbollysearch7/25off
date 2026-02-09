<template>
  <div
    class="rounded-full text-center bg-primary text-white px-4 py-1.5 text-[10px] font-light tracking-[1px] sm:tracking-[3px] transition-transform duration-300 hover:scale-105"
    :class="{ uppercase: uppercase }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    uppercase?: boolean;
  }>(),
  {
    uppercase: true,
  }
);
</script>

<template>
  <!--	todo: fix theme detection-->
  <div
    class="trustpilot-widget"
    data-locale="en-US"
    data-template-id="5419b637fa0340045cd0c936"
    data-businessunit-id="635a8c09a788ce9b49e05562"
    data-style-height="20px"
    data-style-width="100%"
    data-token="64cf3ac3-8043-4e5a-b3ec-40d8574c8d2a"
    :data-theme="trustpilotTheme"
    :key="theme"
  >
    <a
      href="https://www.trustpilot.com/review/tradersyard.com"
      target="_blank"
      rel="noopener"
      class="sr-only"
      >Trustpilot</a
    >
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted, nextTick, computed } from "vue";
import { useTheme } from "~~/composables/useTheme";

const { theme } = useTheme();

// Reactive theme binding
const trustpilotTheme = computed(() => theme.value);

// Function to initialize/reinitialize widget
const initializeWidget = () => {
  if (typeof window !== "undefined" && (window as any).Trustpilot) {
    const widgetElement = document.querySelector(".trustpilot-widget");
    if (widgetElement) {
      (window as any).Trustpilot.loadFromElement(widgetElement);
    }
  }
};

onMounted(() => {
  initializeWidget();
});

// Re-initialize widget when theme changes
watch(theme, async () => {
  await nextTick();
  initializeWidget();
});
</script>

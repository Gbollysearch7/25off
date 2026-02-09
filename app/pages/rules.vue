<template>
  <Container class="pt-20 space-y-10 md:space-y-32">
    <PageHeading>
	    <template #default>
        {{ t("pages.rules.heading") }}
	    </template>
    </PageHeading>

	  <div class="grid lg:grid-cols-12 gap-4 lg:gap-6 relative">
      <div
        class="hidden lg:block absolute top-0 -translate-y-2/3 right-0 -translate-x-1/4 w-[300px] rotate-6"
      >
        <img class="animate-float" src="/landing/3d-icons/rules.webp" alt="" />
		  </div>

      <div
        class="scroll-reveal fade-right lg:col-span-3 h-fit flex items-center gap-2 lg:flex-col relative z-10 bg-white rounded-2xl p-2 lg:p-4 dark:bg-neutral-900 overflow-x-auto"
      >
			  <div
				  v-for="tab in tabs"
				  :key="tab.key"
				  role="button"
				  :class="[
            'min-w-fit w-full py-2 md:py-3 px-3 md:px-4 rounded-xl font-medium transition-all duration-200',
            activeTab === tab.key
              ? 'bg-primary text-white'
              : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900',
          ]"
				  @click="activeTab = tab.key"
			  >
				  {{ tab.label }}
			  </div>
		  </div>

      <div class="scroll-reveal fade-up lg:col-span-9 relative z-10">
        <Transition name="tab-content" mode="out-in">
          <div
            :key="activeTab"
            class="bg-white dark:bg-neutral-900 rounded-2xl p-4 lg:p-8 border dark:border-neutral-800"
          >
            <h3
              class="text-2xl font-clash font-semibold mb-6 text-black dark:text-white"
            >
					  {{ t(`pages.rules.${activeTab}.title`) }}
				  </h3>

				  <div
					  class="prose prose-neutral dark:prose-invert max-w-none prose-headings:text-black dark:prose-headings:text-white prose-li:text-black dark:prose-li:text-white"
					  v-html="parseMarkdown(t(`pages.rules.${activeTab}.content`))"
				  />

				  <!-- Info Box for Payouts and Scaling Plans -->
            <div
              v-if="activeTab === 'payoutsScalingPlans'"
              class="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
            >
					  <div class="flex items-start gap-3">
						  <div class="flex-shrink-0">
                  <svg
                    class="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
							  </svg>
						  </div>
						  <p class="text-sm text-blue-800 dark:text-blue-200 flex-1">
							  {{ t("pages.accountScaling.scalingRuleNotice") }}
						  </p>
					  </div>
				  </div>
			  </div>
        </Transition>
		  </div>
	  </div>
  </Container>
</template>

<script setup lang="ts">
import Container from "~/components/Container.vue";
import { useMarkdown } from "~~/composables/useMarkdown";
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

// Initialize scroll reveal animations
useScrollReveal();

useHead({
  title: t("pages.rules.title"),
});

const { parseMarkdown } = useMarkdown();

const activeTab = ref("profitTarget");

const tabs = computed(() => [
  { key: "profitTarget", label: t("pages.rules.tabs.profitTarget") },
  { key: "dailyMaxLossLimit", label: t("pages.rules.tabs.dailyMaxLossLimit") },
  { key: "leverageOffered", label: t("pages.rules.tabs.leverageOffered") },
  {
    key: "timeLimitsPayoutCycle",
    label: t("pages.rules.tabs.timeLimitsPayoutCycle"),
  },
  {
    key: "payoutsScalingPlans",
    label: t("pages.rules.tabs.payoutsScalingPlans"),
  },
  { key: "newsTrading", label: t("pages.rules.tabs.newsTrading") },
  {
    key: "overnightWeekendHolding",
    label: t("pages.rules.tabs.overnightWeekendHolding"),
  },
  { key: "swapsCommission", label: t("pages.rules.tabs.swapsCommission") },
  {
    key: "prohibitedPractices",
    label: t("pages.rules.tabs.prohibitedPractices"),
  },
	// TEMPORARILY HIDDEN - UNCOMMENT WHEN NEEDED: { key: 'inactivityPolicy', label: t('pages.rules.tabs.inactivityPolicy') },
  { key: "payoutCap", label: t("pages.rules.tabs.payoutCap") },
]);
</script>

<style scoped>
/* Tab content transition - fade and slide up */
.tab-content-enter-active,
.tab-content-leave-active {
  transition: all 0.3s ease;
}

.tab-content-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.tab-content-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<template>
  <div class="min-h-screen bg-white dark:bg-black">
    <div class="px-4 py-16 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="scroll-reveal fade-up text-center mb-12">
        <h1
          class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white mb-4"
        >
          {{ t("pages.accountScaling.heading") }}
        </h1>
      </div>

      <!-- Scaling Table -->
      <div class="overflow-hidden space-y-2">
        <!-- Table Headers -->
        <div
          class="scroll-reveal fade-up grid grid-cols-3 dark:bg-neutral-800 border border-neutral-200 dark:border-transparent px-4 sm:px-6 py-4 rounded-2xl"
        >
          <div
            v-for="header in headers"
            :key="header.key"
            class="font-clash font-medium dark:text-white text-sm sm:text-lg"
          >
            {{ header.label }}
          </div>
        </div>

        <!-- Table Rows -->
        <div class="space-y-1">
          <div
            v-for="(tier, index) in scalingTiers"
            :key="tier.balance"
            class="scroll-reveal fade-up grid dark:text-white rounded-xl grid-cols-3 items-center px-4 sm:px-6 py-3 sm:py-4 border border-neutral-200 dark:border-transparent dark:bg-neutral-900 transition-colors"
            :class="[`delay-${Math.min(Math.floor(index / 3) * 100, 500)}`]"
          >
            <!-- Account Balance -->
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
            >
              <template v-if="tier.showButton">
                <div class="hidden md:block">
                  <Button variant="primary" size="xs" href="/auth/register">
                    {{
                      t("pages.accountScaling.buttons.getFundedWith", {
                        balance: formatCurrency(tier.balance),
                      })
                    }}
                  </Button>
                </div>
                <div class="md:hidden font-medium">
                  {{ formatCurrency(tier.balance) }}
                </div>
              </template>
              <div v-else class="font-medium">
                {{ formatCurrency(tier.balance) }}
              </div>
            </div>

            <!-- Balance Target -->
            <div class="font-medium">
              {{ tier.target ? formatCurrency(tier.target) : "—" }}
            </div>

            <!-- Payout Ratio -->
            <div class="font-medium">
              {{ tier.payoutRatio }}
            </div>
          </div>
        </div>
      </div>

      <!-- Hint Box -->
      <div
        class="scroll-reveal fade-up mt-8 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800"
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
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useScrollReveal } from "~~/composables/useScrollReveal";

const { t } = useI18n();

// Initialize scroll reveal animations
useScrollReveal();

interface ScalingTier {
  balance: number;
  target: number | null;
  payoutRatio: string;
  showButton?: boolean;
}

const headers = computed(() => [
  {
    key: "balance",
    label: t("pages.accountScaling.headers.accountBalance"),
  },
  {
    key: "balance",
    label: t("pages.accountScaling.headers.balanceTarget"),
  },
  {
    key: "balance",
    label: t("pages.accountScaling.headers.payoutRatio"),
  },
]);

const scalingTiers = computed<ScalingTier[]>(() => [
  { balance: 5000, target: 500, payoutRatio: "80% / 20%", showButton: true },
  { balance: 7500, target: 750, payoutRatio: "80% / 20%" },
  { balance: 10000, target: 1000, payoutRatio: "80% / 20%", showButton: true },
  { balance: 12500, target: 1250, payoutRatio: "80% / 20%" },
  { balance: 15000, target: 1500, payoutRatio: "80% / 20%" },
  { balance: 25000, target: 2500, payoutRatio: "80% / 20%", showButton: true },
  { balance: 30000, target: 3000, payoutRatio: "80% / 20%" },
  { balance: 40000, target: 4000, payoutRatio: "80% / 20%" },
  { balance: 50000, target: 5000, payoutRatio: "80% / 20%", showButton: true },
  { balance: 60000, target: 6000, payoutRatio: "80% / 20%" },
  { balance: 70000, target: 7000, payoutRatio: "80% / 20%" },
  { balance: 80000, target: 8000, payoutRatio: "80% / 20%" },
  { balance: 90000, target: 9000, payoutRatio: "80% / 20%" },
  {
    balance: 100000,
    target: 10000,
    payoutRatio: "80% / 20%",
    showButton: true,
  },
  { balance: 125000, target: 12500, payoutRatio: "80% / 20%" },
  { balance: 150000, target: 15000, payoutRatio: "80% / 20%" },
  { balance: 175000, target: 17500, payoutRatio: "80% / 20%" },
  {
    balance: 200000,
    target: 20000,
    payoutRatio: "80% / 20%",
    showButton: true,
  },
  { balance: 250000, target: 25000, payoutRatio: "80% / 20%" },
  { balance: 300000, target: 30000, payoutRatio: "80% / 20%" },
  { balance: 350000, target: 35000, payoutRatio: "80% / 20%" },
  { balance: 400000, target: 40000, payoutRatio: "80% / 20%" },
  { balance: 450000, target: 45000, payoutRatio: "80% / 20%" },
  { balance: 500000, target: 50000, payoutRatio: "80% / 20%" },
]);

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

definePageMeta({
  title: "Account Scaling",
});
</script>

<template>
  <div
    class="relative rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    :class="{
      'popular bg-primary': isPopular,
      'dark:bg-neutral-900 bg-neutral-100': !isPopular,
    }"
  >
    <div
      v-if="isPopular"
      class="z-20 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-fit rounded-full text-center bg-white text-primary px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[3px]"
    >
      {{ t("pages.home.pricing.popular") }}
    </div>

    <div
      :class="{
        'relative rounded-3xl z-10 space-y-8 p-4 bg-inherit': true,
        'pt-8': isPopular,
        'pt-4': !isPopular,
      }"
    >
      <div
        class="space-y-2 rtl:text-right"
        :class="isPopular ? 'text-white' : 'dark:text-white'"
      >
        <div class="text-2xl font-clash font-semibold">
          {{ t("pages.home.pricing.account", { account: account.label }) }}
        </div>
        <div
          class="flex items-center gap-1 rtl:flex-row-reverse rtl:justify-end"
        >
          <span class="font-clash font-medium text-xl"
            >{{
              formatCurrency(account.fee, $i18n.locale, "USD", {
                maximumFractionDigits: 0,
              })
            }}
          </span>
          <span class="text-sm">
            {{ t("pages.home.pricing.oneTimeFee") }}
          </span>
        </div>
      </div>

      <div class="space-y-3 rtl:text-right">
        <div
          class="text-sm flex justify-between rtl:flex-row-reverse"
          v-for="feature in features"
          :key="feature.key"
        >
          <span
            :class="
              isPopular
                ? 'text-white'
                : 'dark:text-neutral-400 text-neutral-600'
            "
          >
            {{ feature.label }}
          </span>
          <span :class="isPopular ? 'text-white' : 'dark:text-white'">
            {{ formatFeatureValue(feature) }}
          </span>
        </div>
        <div class="text-sm flex justify-between rtl:flex-row-reverse">
          <span
            :class="
              isPopular
                ? 'text-white'
                : 'dark:text-neutral-400 text-neutral-600'
            "
          >
            {{ t("pages.home.pricing.features.resetFee.label") }}
          </span>
          <span :class="isPopular ? 'text-white' : 'dark:text-white'">
            {{
              formatCurrency(account.resetFee, $i18n.locale, "USD", {
                maximumFractionDigits: 0,
              })
            }}
          </span>
        </div>
      </div>

      <div class="flex flex-col items-center gap-3 rtl:text-right">
        <Button
          :variant="isPopular ? 'light' : 'primary'"
          class="w-full"
          href="/auth/register"
        >
          {{ t("pages.home.pricing.cta.button") }}
        </Button>
        <div
          class="text-xs font-light rtl:text-center"
          :class="
            isPopular ? 'text-white' : 'dark:text-neutral-400 text-neutral-600'
          "
        >
          {{ t("pages.home.pricing.cta.moneyBackGuarantee") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatCurrency } from "~/utils/formatCurrency";
import { useI18n } from "#imports";
import type { Feature } from "~/types/products";

const { features, account, selectedType } = defineProps<{
  features: Feature[];
  account: {
    value: number;
    label: string;
    fee: number;
    resetFee: number;
    popular?: boolean;
  };
  selectedType: string;
}>();

const { t } = useI18n();

const isPopular = computed(() => account.popular);

function formatFeatureValue(feature: Feature): string {
  const { value, formatType } = feature;

  // Handle object-based currency values
  if (typeof value === "object" && "amount" in value) {
    return formatCurrency(
      value.amount,
      useI18n().locale.value,
      value.currency,
      {
        maximumFractionDigits: 0,
      }
    );
  }

  // Handle primitive values based on formatType
  switch (formatType) {
    case "currency":
      return formatCurrency(value as number, useI18n().locale.value, "USD", {
        maximumFractionDigits: 0,
      });
    case "percentage":
      return `${value}%`;
    case "number":
    case "text":
    default:
      return String(value);
  }
}
</script>

<style scoped>
.popular:after,
.popular:before {
  content: "";
  position: absolute;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: conic-gradient(from var(--from), transparent 50%, #030303);
  border-radius: inherit;
  animation: spin_custom 4s linear infinite;
}

.dark .popular:after,
.dark.popular:before {
  background: conic-gradient(from var(--from), transparent 50%, #ffffff);
}

.popular:before {
  filter: blur(2rem);
  opacity: 0.4;
}

@keyframes spin_custom {
  0% {
    --from: 0deg;
  }

  to {
    --from: 360deg;
  }
}
</style>

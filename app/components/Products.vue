<template>
  <div id="pricing" class="px-4 py-16 space-y-12">
    <div class="scroll-reveal fade-up flex flex-col items-center space-y-4">
      <ChipLabel>
        {{ t("pages.home.pricing.title") }}
      </ChipLabel>
      <h2
        class="text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold dark:text-white"
      >
        {{ t("pages.home.pricing.heading") }}
      </h2>
    </div>

    <div class="space-y-4">
      <div
        class="mx-auto rounded-2xl flex w-full max-w-md gap-2 dark:bg-neutral-900 bg-neutral-100 p-2 rtl:flex-row-reverse"
      >
        <div
          v-for="assetClass in assetClasses"
          :key="assetClass.key"
          role="button"
          :class="{
            'flex-1 flex relative justify-center items-center rounded-lg h-10 p-1': true,
            'bg-primary text-white': assetClass.key === selectedClass,
            'dark:text-white': assetClass.key !== selectedClass,
            'cursor-pointer': !assetClass.comingSoon,
            'cursor-not-allowed opacity-60': assetClass.comingSoon,
          }"
          @click="selectClass(assetClass)"
        >
          <span class="text-sm font-semibold">{{ assetClass.label }}</span>
          <span
            v-if="assetClass.comingSoon"
            class="block px-2 py-1 rounded-lg ml-2 rtl:ml-0 rtl:mr-2 bg-gradient-to-r from-primary to-primary dark:to-primary/50 text-white text-[10px] whitespace-nowrap font-medium"
          >
            {{ t("pages.home.pricing.comingSoon") }}
          </span>
        </div>
      </div>

      <div
        class="mx-auto rounded-2xl flex w-full max-w-md gap-2 dark:bg-neutral-900 bg-neutral-100 p-2"
      >
        <div
          v-for="productType in productTypeFilters"
          :key="productType.key"
          role="button"
          :class="{
            'flex-1 flex relative justify-center items-center rounded-lg h-10 py-1 px-2 md:px-3 transition-colors text-sm font-semibold': true,
            'bg-primary text-white': productType.key === selectedType,
            'dark:text-white': productType.key !== selectedType,
          }"
          @click="selectedType = productType.key"
        >
          {{ productType.label }}
        </div>
      </div>

      <Transition name="pricing-fade" mode="out-in">
        <div
          :key="`${selectedClass}-${selectedType}`"
          class="grid items-end md:grid-cols-2 gap-4 xl:gap-2 mx-auto"
          :class="{
            'xl:grid-cols-3 2xl:grid-cols-6':
              selectedClass === 'cfd' && selectedType === '1-phase',
            'xl:grid-cols-5':
              selectedClass === 'cfd' && selectedType !== '1-phase',
            '2xl:max-w-screen-2xl': selectedClass === 'cfd',
            '2xl:max-w-5xl xl:grid-cols-3': selectedClass === 'futures',
          }"
        >
          <AccountPlan
            v-for="(account, index) in accounts"
            :key="account.label"
            :account="account"
            :features="getAccountFeatures(account)"
            :selected-type="selectedType"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";
import AccountPlan from "~/components/AccountPlan.vue";
import type {
  AssetClass,
  AssetClassKey,
  ProductTypeKey,
  ProductTypeFilter,
  Feature,
  FuturesAccount,
  BaseAccount,
} from "~~/types/products";

const { t } = useI18n();

const selectedClass = ref<AssetClassKey>("cfd");
const selectedType = ref<ProductTypeKey>("1-phase");

watch(selectedClass, (newClass) => {
  if (newClass === "cfd") {
    selectedType.value = "1-phase";
  } else if (newClass === "futures") {
    selectedType.value = "eod-drawdown";
  }
});

const assetClasses = computed<AssetClass[]>(() => [
  {
    key: "cfd",
    label: "CFD",
  },
  {
    key: "futures",
    label: "Futures (1 Phase)",
  },
]);

const productTypeFilters = computed<ProductTypeFilter[]>(() => {
  if (selectedClass.value === "cfd") {
    return [
      {
        key: "2-phase-swing",
        label: "2 Phase Swing",
      },
      {
        key: "1-phase",
        label: "1 Phase",
      },
    ];
  }
  // Futures
  return [
	  {
		  key: "eod-drawdown",
		  label: t("pages.home.pricing.drawdownTypes.eod"),
	  },
    {
      key: "static-drawdown",
      label: t("pages.home.pricing.drawdownTypes.static"),
    },
  ];
});

// Product configurations for all asset class + product type combinations
const productConfigs = computed(() => {
  return {
    "cfd-1-phase": {
      accounts: [
        { value: 5000, label: "$5K", fee: 55, resetFee: 50 },
        { value: 10000, label: "$10K", fee: 95, resetFee: 85 },
        { value: 25000, label: "$25K", fee: 165, resetFee: 150 },
        { value: 50000, label: "$50K", fee: 345, resetFee: 325 },
        {
          value: 100000,
          label: "$100K",
          fee: 555,
          resetFee: 530,
          popular: true,
        },
        { value: 200000, label: "$200K", fee: 1045, resetFee: 1015 },
      ],
      features: [
        {
          key: "profitTarget",
          label: t("pages.home.pricing.features.profitTarget.label"),
          value: "10%",
          formatType: "text" as const,
        },
        {
          key: "leverage",
          label: t("pages.home.pricing.features.leverage.label"),
          value: "1:30",
          formatType: "text" as const,
        },
        {
          key: "dailyLossLimit",
          label: t("pages.home.pricing.features.dailyLossLimit.label"),
          value: "3%",
          formatType: "text" as const,
        },
        {
          key: "drawdownType",
          label: t("pages.home.pricing.features.drawdownType.label"),
          value: t("pages.home.pricing.features.drawdownType.static"),
          formatType: "text" as const,
        },
        {
          key: "maxDrawDown",
          label: t("pages.home.pricing.features.maxDrawDown.label"),
          value: "6%",
          formatType: "text" as const,
        },
        {
          key: "newsTrading",
          label: t("pages.home.pricing.features.newsTrading.label"),
          value: t("pages.home.pricing.features.newsTrading.restricted"),
          formatType: "text" as const,
        },
        {
          key: "weekendHold",
          label: t("pages.home.pricing.features.weekendHold.label"),
          value: t("pages.home.pricing.features.weekendHold.restricted"),
          formatType: "text" as const,
        },
        {
          key: "minTradingDays",
          label: t("pages.home.pricing.features.minTradingDays.label"),
          value: 0,
          formatType: "number" as const,
        },
      ],
    },
    "cfd-2-phase-swing": {
      accounts: [
        { value: 5000, label: "$5K", fee: 39, resetFee: 34 },
        { value: 10000, label: "$10K", fee: 79, resetFee: 70 },
        { value: 25000, label: "$25K", fee: 149, resetFee: 134 },
        { value: 50000, label: "$50K", fee: 249, resetFee: 224 },
        {
          value: 100000,
          label: "$100K",
          fee: 499,
          resetFee: 449,
          popular: true,
        },
      ],
      features: [
        {
          key: "profitTarget",
          label: t("pages.home.pricing.features.profitTarget.label"),
          value: "10%, 5%",
          formatType: "text" as const,
        },
        {
          key: "leverage",
          label: t("pages.home.pricing.features.leverage.label"),
          value: "1:30",
          formatType: "text" as const,
        },
        {
          key: "dailyLossLimit",
          label: t("pages.home.pricing.features.dailyLossLimit.label"),
          value: "5%",
          formatType: "text" as const,
        },
        {
          key: "drawdownType",
          label: t("pages.home.pricing.features.drawdownType.label"),
          value: t("pages.home.pricing.features.drawdownType.static"),
          formatType: "text" as const,
        },
        {
          key: "maxDrawDown",
          label: t("pages.home.pricing.features.maxDrawDown.label"),
          value: "10%",
          formatType: "text" as const,
        },
        {
          key: "newsTrading",
          label: t("pages.home.pricing.features.newsTrading.label"),
          value: t("pages.home.pricing.features.newsTrading.allowed"),
          formatType: "text" as const,
        },
        {
          key: "weekendHold",
          label: t("pages.home.pricing.features.weekendHold.label"),
          value: t("pages.home.pricing.features.weekendHold.allowed"),
          formatType: "text" as const,
        },
        {
          key: "minTradingDays",
          label: t("pages.home.pricing.features.minTradingDays.label"),
          value: 0,
          formatType: "number" as const,
        },
      ],
    },
    "futures-static-drawdown": {
      accounts: [
        {
          value: 10000,
          label: "$10K",
          fee: 149,
          resetFee: 99,
          profitTarget: 800,
          maxContracts: "1 Minis / 10 Micros",
          dailyDrawdown: "None",
          maxDrawdown: 400,
          consistency: "None",
        },
        {
          value: 25000,
          label: "$25K",
          fee: 249,
          resetFee: 199,
          profitTarget: 2000,
          maxContracts: "2 Minis / 20 Micros",
          dailyDrawdown: "None",
          maxDrawdown: 1000,
          consistency: "None",
        },
        {
          value: 50000,
          label: "$50K",
          fee: 399,
          resetFee: 349,
          profitTarget: 4000,
          maxContracts: "3 Minis / 30 Micros",
          dailyDrawdown: "None",
          maxDrawdown: 2000,
          consistency: "None",
          popular: true,
        },
      ] as FuturesAccount[],
      features: [], // Features built dynamically
    },
    "futures-eod-drawdown": {
      accounts: [
        {
          value: 50000,
          label: "$50K",
          fee: 299,
          resetFee: 149,
          profitTarget: 3000,
          maxContracts: "5 Minis / 50 Micros",
          dailyDrawdown: "None",
          maxDrawdown: 2000,
          consistency: "None",
        },
        {
          value: 100000,
          label: "$100K",
          fee: 424,
          resetFee: 249,
          profitTarget: 6000,
          maxContracts: "10 Minis / 100 Micros",
          dailyDrawdown: "None",
          maxDrawdown: 3000,
          consistency: "None",
        },
        {
          value: 150000,
          label: "$150K",
          fee: 549,
          resetFee: 349,
          profitTarget: 9000,
          maxContracts: "15 Minis / 150 Micros",
          dailyDrawdown: "None",
          maxDrawdown: 4500,
          consistency: "None",
          popular: true,
        },
      ] as FuturesAccount[],
      features: [], // Features built dynamically
    },
  };
});

const accounts = computed(() => {
  const configKey = `${selectedClass.value}-${selectedType.value}`;
  return productConfigs.value[configKey as keyof typeof productConfigs.value]
    .accounts;
});

// Helper function to get feature value for a specific Futures account
function getAccountFeatureValue(account: FuturesAccount, featureKey: string) {
  switch (featureKey) {
    case "profitTarget":
      return { amount: account.profitTarget, currency: "USD" as const };
    case "maxContracts":
      return account.maxContracts;
    case "dailyDrawdown":
      return account.dailyDrawdown;
    case "maxDrawdown":
      return { amount: account.maxDrawdown, currency: "USD" as const };
    case "newsTrading":
      return t("pages.home.pricing.features.newsTrading.allowed");
    case "overnightHolding":
      return t("pages.home.pricing.features.overnightHolding.restricted");
    case "minTradingDays":
      return 0;
    case "consistency":
      return account.consistency;
    case "payoutCycle":
      return t("pages.home.pricing.features.payoutCycle.value");
    case "drawdownType":
      return selectedType.value === "static-drawdown"
        ? t("pages.home.pricing.features.drawdownType.static")
        : t("pages.home.pricing.features.drawdownType.eod");
    default:
      return "";
  }
}

const features = computed<Feature[]>(() => {
  if (selectedClass.value === "cfd") {
    // Return pre-configured CFD features
    const configKey = `${selectedClass.value}-${selectedType.value}`;
    return productConfigs.value[configKey as keyof typeof productConfigs.value]
      .features;
  } else {
    // For Futures, build features dynamically
    const firstAccount = accounts.value[0] as FuturesAccount;

    return [
      {
        key: "profitTarget",
        label: t("pages.home.pricing.features.profitTarget.label"),
        value: { amount: firstAccount.profitTarget, currency: "USD" as const },
        formatType: "currency" as const,
      },
      {
        key: "maxContracts",
        label: t("pages.home.pricing.features.maxContracts.label"),
        value: firstAccount.maxContracts,
        formatType: "text" as const,
      },
      {
        key: "dailyDrawdown",
        label: t("pages.home.pricing.features.dailyDrawdown.label"),
        value: firstAccount.dailyDrawdown,
        formatType: "text" as const,
      },
      {
        key: "maxDrawdown",
        label: t("pages.home.pricing.features.maxDrawDown.label"),
        value: { amount: firstAccount.maxDrawdown, currency: "USD" as const },
        formatType: "currency" as const,
      },
	    {
		    key: "payoutCycle",
		    label: t("pages.home.pricing.features.payoutCycle.label"),
		    value: t("pages.home.pricing.features.payoutCycle.value"),
		    formatType: "text" as const,
	    },
      {
        key: "newsTrading",
        label: t("pages.home.pricing.features.newsTrading.label"),
        value: t("pages.home.pricing.features.newsTrading.allowed"),
        formatType: "text" as const,
      },
      {
        key: "overnightHolding",
        label: t("pages.home.pricing.features.overnightHolding.label"),
        value: t("pages.home.pricing.features.overnightHolding.restricted"),
        formatType: "text" as const,
      },
      {
        key: "minTradingDays",
        label: t("pages.home.pricing.features.minTradingDays.label"),
        value: 0,
        formatType: "number" as const,
      },
      {
        key: "consistency",
        label: t("pages.home.pricing.features.consistency.label"),
        value: firstAccount.consistency,
        formatType: "text" as const,
      },
    ];
  }
});

function getAccountFeatures(account: BaseAccount): Feature[] {
  if (selectedClass.value === "cfd") {
    // CFD: all accounts share same feature values
    return features.value;
  } else {
    // Futures: generate account-specific features
    const futuresAccount = account as FuturesAccount;
    return features.value.map((feature) => ({
      ...feature,
      value: getAccountFeatureValue(futuresAccount, feature.key),
    }));
  }
}

function selectClass(assetClass: AssetClass) {
  selectedClass.value = assetClass.key;
}
</script>

<style scoped>
/* Pricing grid fade transition */
.pricing-fade-enter-active,
.pricing-fade-leave-active {
  transition: opacity 0.2s ease;
}

.pricing-fade-enter-from,
.pricing-fade-leave-to {
  opacity: 0;
}
</style>

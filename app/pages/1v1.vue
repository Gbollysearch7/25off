<template>
  <Container class="pt-10 space-y-10 md:space-y-32">
    <div class="relative z-10">
      <img class="absolute top-0 object-contain" src="/landing/survivor-showdown/warriors.webp" alt="">
    </div>
    <div class="relative z-20 flex flex-col items-center justify-center pb-96" v-if="!enabled">
      <h2 class="text-2xl font-semibold text-white mb-4 text-center">
        {{ t('pages.5v5_leaderboard.disabled') }}
      </h2>
    </div>
    <div v-else class="relative z-20 flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-8">
        <h1 class="font-clash text-center text-white font-semibold text-5xl xl:text-7xl">
          {{ t('pages.1v1_leaderboard.heading') }}
        </h1>
        <div class="flex flex-col gap-8 w-full items-center justify-center">
          <div v-for="(pair, idx) in pairs" :key="idx"
               class="bg-neutral-900 rounded-xl p-6 flex flex-col items-center shadow-lg xl:w-[600px] w-full">
            <div class="text-2xl font-bold text-orange-400 mb-2">{{ t("pages.1v1_leaderboard.pair", {pair: idx + 1}) }}</div>
            <div class="flex flex-col md:flex-row justify-between w-full gap-8">
              <div class="flex-1 flex flex-col items-center">
                <span :class="'font-bold text-lg ' + (pair.left.winning ? 'text-green-400' : 'text-red-400')">{{
                    pair.left.name
                  }}</span>
                <span :class="'text-2xl font-bold ' + (pair.left.winning ? 'text-green-400' : 'text-red-400')">{{
                    moneyFormat(pair.left.value)
                  }}</span>
              </div>
              <div class="flex-col justify-center items-center hidden md:flex">
                <span class="text-2xl font-bold text-orange-400">{{ t("pages.1v1_leaderboard.vs") }}</span>
              </div>
              <div class="flex-1 flex flex-col items-center">
                <span :class="'font-bold text-lg ' + (pair.right.winning ? 'text-green-400' : 'text-red-400')">{{
                    pair.right.name
                  }}</span>
                <span :class="'text-2xl font-bold ' + (pair.right.winning ? 'text-green-400' : 'text-red-400')">{{
                    moneyFormat(pair.right.value)
                  }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup lang="ts">
import { type LeaderboardEntry } from "../../types/leaderboard";
import teamsJson from '~/data/1v1.json';
import type { TeamsJson } from "../../types/teams";

const definition = teamsJson as TeamsJson;

const {t} = useI18n()

const enabled = true;
const {data: leaderboard} = await useFetch<LeaderboardEntry[]>(`/landing-api/leaderboard/${definition.competitionId}`);
function moneyFormat(value: number) {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

const pairs = computed(() => {
  const ld = leaderboard.value;
  if (!ld) {
    return [];
  }

  return definition.teams.map(pair => {
    const left = ld.find((entry: any) => entry.id === pair.members[0]?.id) ?? {
      nickname: 'N/A',
      total_profit_loss: 0
    }
    const right = ld.find((entry: any) => entry.id === pair.members[1]?.id) ?? {
      nickname: 'N/A',
      total_profit_loss: 0
    };

    return {
      left: {
        name: left?.nickname,
        value: left?.total_profit_loss,
        winning: left?.total_profit_loss >= right?.total_profit_loss
      },
      right: {
        name: right?.nickname,
        value: right?.total_profit_loss,
        winning: right?.total_profit_loss >= left?.total_profit_loss
      }
    }
  })
});

useHead({
  title: t('pages.1v1_leaderboard.heading')
})
</script>

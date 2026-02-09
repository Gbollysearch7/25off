<template>
  <Container class="pt-10 space-y-10 md:space-y-32">
    <div class="relative z-10">
      <img class="absolute top-0 object-contain" src="/landing/survivor-showdown/warriors.webp" alt="">
    </div>
    <div  class="relative z-20 flex flex-col items-center justify-center pb-96" v-if="!enabled">
      <h2 class="text-2xl font-semibold text-white mb-4 text-center">
        {{ t('pages.5v5_leaderboard.disabled') }}
      </h2>
    </div>
    <div v-else class="relative z-20 flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-8">
        <h1 class="font-clash text-center text-white font-semibold text-5xl xl:text-7xl">
          {{ t('pages.5v5_leaderboard.heading') }}
        </h1>
        <div class="flex flex-col gap-8 w-full items-center justify-center">
          <div v-for="(team, idx) in grouped" :key="idx"
               class="bg-neutral-900 rounded-xl p-6 flex flex-col items-center shadow-lg xl:w-[600px] w-full">
            <div class="flex justify-between mb-4 w-full">
              <div class="text-2xl font-bold text-orange-400 mb-2">Rank {{ idx + 1 }}</div>
              <div class="text-2xl font-bold text-orange-400 mb-2">{{team.name}}</div>
            </div>
            <div class="text-2xl font-bold text-orange-400 mb-2">{{ t('pages.5v5_leaderboard.total_pl', {pl: moneyFormat(team.total)}) }}</div>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="player in team.players"
                :key="player.id"
                class="flex items-center px-4 py-1 rounded-full bg-neutral-800 text-white text-sm font-medium shadow gap-2"
              >
                <span>{{ player.nickname }}</span>
                <span :class="player.total_profit_loss >= 0 ? 'text-green-400' : 'text-orange-400'">
                  {{ moneyFormat(player.total_profit_loss) }}
                </span>
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
import teamsJson from '~/data/5v5.json';
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

const grouped = computed(() => {
  const ld = leaderboard.value;
  if (!ld) {
    return [];
  }

  return definition.teams.map(team => {
    const players = team.members.map(({id}) => ld.find(l => l.id === id)).filter(Boolean) as LeaderboardEntry[];
    const total = players.reduce((acc, player) => acc + (player?.total_profit_loss || 0), 0);

    return {
      name: team.name,
      total,
      players,
    }
  })
      .slice() // create a shallow copy to avoid mutating the original array
      .sort((a, b) => b.total - a.total);
});

useHead({
  title: t('pages.5v5_leaderboard.heading')
})
</script>

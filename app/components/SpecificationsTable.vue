<template>
	<div class="mt-12">
		<h3 class="font-clash text-xl font-medium dark:text-white mb-6">{{ t('specifications.heading') }}</h3>
		
		<div class="space-y-2">
			<div class="grid grid-cols-4 px-4 py-3 rounded-xl dark:bg-neutral-800 bg-neutral-100 dark:text-white">
				<div
					v-for="heading in headings"
					:key="heading.key"
					class="font-clash font-medium"
				>
					{{ t(`specifications.headings.${heading.key}`) }}
				</div>
			</div>
			<div class="space-y-1">
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.profitTarget.tooltip')">
							{{ t('specifications.rows.profitTarget.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>10%</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>5%</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>-</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.dailyLossLimit.tooltip')">
							{{ t('specifications.rows.dailyLossLimit.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>5%</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>5%</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>5%</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.maxLossLimit.tooltip')">
							{{ t('specifications.rows.maxLossLimit.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>10%</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>10%</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>10%</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.dailyDrawdownType.tooltip')">
							{{ t('specifications.rows.dailyDrawdownType.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>{{ t('specifications.rows.dailyDrawdownType.static') }}</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>{{ t('specifications.rows.dailyDrawdownType.static') }}</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>{{ t('specifications.rows.dailyDrawdownType.static') }}</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.maxDrawdownType.tooltip')">
							{{ t('specifications.rows.maxDrawdownType.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>{{ t('specifications.rows.maxDrawdownType.static') }}</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>{{ t('specifications.rows.maxDrawdownType.static') }}</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>{{ t('specifications.rows.maxDrawdownType.static') }}</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.timeLimit.tooltip')">
							{{ t('specifications.rows.timeLimit.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>{{ t('specifications.rows.timeLimit.unlimited') }}</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>{{ t('specifications.rows.timeLimit.unlimited') }}</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>{{ t('specifications.rows.timeLimit.unlimited') }}</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.payoutFrequency.tooltip')">
							{{ t('specifications.rows.payoutFrequency.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>-</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>-</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>14 Days*</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.leverage.tooltip')">
							{{ t('specifications.rows.leverage.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>
							<span class="text-xs">{{ t('specifications.rows.leverage.value') }}</span>
						</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>
							<span class="text-xs">{{ t('specifications.rows.leverage.value') }}</span>
						</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>
							<span class="text-xs">{{ t('specifications.rows.leverage.value') }}</span>
						</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.overnightTrading.tooltip')">
							{{ t('specifications.rows.overnightTrading.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>
							<IconSquareRoundedCheckFilled :size="24" class="text-primary" />
						</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>
							<IconSquareRoundedCheckFilled :size="24" class="text-primary" />
						</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>
							<IconSquareRoundedCheckFilled :size="24" class="text-primary" />
						</SpecificationColumn>
					</template>
				</SpecificationRow>
				<SpecificationRow>
					<template #label>
						<SpecificationColumn :tooltip="t('specifications.rows.newsTrading.tooltip')">
							{{ t('specifications.rows.newsTrading.label') }}
						</SpecificationColumn>
					</template>
					<template #phase1>
						<SpecificationColumn>
							<IconSquareRoundedCheckFilled :size="24" class="text-primary" />
						</SpecificationColumn>
					</template>
					<template #phase2>
						<SpecificationColumn>
							<IconSquareRoundedCheckFilled :size="24" class="text-primary" />
						</SpecificationColumn>
					</template>
					<template #funded>
						<SpecificationColumn>
							<IconSquareRoundedCheckFilled :size="24" class="text-primary" />
						</SpecificationColumn>
					</template>
				</SpecificationRow>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { IconSquareRoundedCheckFilled } from "@tabler/icons-vue"

const { t } = useI18n()

const checkmarkIcon = "✓"

const headings = computed(() => [
	{
		key: "fundamentals"
	},
	{
		key: "phase1"
	},
	{
		key: "phase2"
	},
	{
		key: "funded"
	}
])
</script>
<template>
	<Container class="py-16 space-y-12">
    <div class="scroll-reveal fade-up flex flex-col items-center space-y-4">
			<ChipLabel>
        {{ t("faq.chip") }}
			</ChipLabel>
      <h2
        class="text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold dark:text-white"
      >
        {{ t("faq.heading") }}
			</h2>
		</div>

		<div class="max-w-3xl mx-auto grid grid-cols-12 gap-8">
<!--			<div class="col-span-3 space-y-2">-->
<!--				<button-->
<!--					v-for="topic in topics"-->
<!--					:key="topic.key"-->
<!--					class="font-clash font-medium w-full flex rounded-lg p-3 transition-colors"-->
<!--					:class="{-->
<!--						'bg-primary text-white': selectedTopic?.key === topic.key,-->
<!--						'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-900': selectedTopic?.key !== topic.key,-->
<!--					}"-->
<!--					@click="selectedTopic = topic"-->
<!--				>-->
<!--					{{ topic.label }}-->
<!--				</button>-->
<!--			</div>-->
			<div class="col-span-12">
				<div class="space-y-4">
					<div
            v-for="(question, index) in currentQuestions"
						:key="question.id"
            class="scroll-reveal fade-up bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all hover:scale-[1.01]"
            :class="[`delay-${Math.min((index + 1) * 100, 500)}`]"
						@click="toggleQuestion(question.id)"
					>
						<div class="p-6">
							<h3 class="font-clash font-medium text-xl dark:text-white">
								{{ question.question }}
							</h3>
						</div>
						<div
							v-if="expandedQuestions.includes(question.id)"
							class="px-6 pb-6 text-neutral-600 dark:text-neutral-400 animate-fadeIn"
						>
							{{ question.answer }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import Container from "~/components/Container.vue";
import { useI18n } from "#imports";

const { t } = useI18n();

const topics = computed(() => [
	{
		key: "getting-started",
    label: t("faq.topics.gettingStarted"),
	},
	{
		key: "rules",
    label: t("faq.topics.challengeRules"),
	},
	{
		key: "billing-and-payments",
    label: t("faq.topics.payouts"),
	},
	{
		key: "legal",
    label: t("faq.topics.accountManagement"),
	},
	{
		key: "account",
    label: t("faq.topics.support"),
  },
]);

const selectedTopic = ref(topics.value[0]);

const allQuestions = {
	"getting-started": [
		{
			id: "gs-1",
      question: t("faq.questions.q1"),
      answer: t("faq.questions.a1"),
		},
		{
			id: "gs-2",
      question: t("faq.questions.q2"),
      answer: t("faq.questions.a2"),
		},
		{
			id: "gs-3",
      question: t("faq.questions.q3"),
      answer: t("faq.questions.a3"),
		},
		{
			id: "gs-4",
      question: t("faq.questions.q4"),
      answer: t("faq.questions.a4"),
    },
	],
  rules: [
		{
			id: "rules-1",
			question: "What are the profit targets?",
      answer:
        "Profit targets vary depending on your challenge type. Typically, you need to achieve 8-10% profit in Phase 1 and 5% in Phase 2 before qualifying for a funded account.",
		},
		{
			id: "rules-2",
			question: "What is the maximum daily loss?",
      answer:
        "The maximum daily loss is typically 5% of your account balance. This rule helps ensure proper risk management and protects both you and our capital.",
		},
		{
			id: "rules-3",
			question: "Can I hold trades overnight?",
      answer:
        "Yes, you can hold trades overnight and over weekends. However, you remain responsible for any gap risk and must ensure you don't violate the maximum drawdown rules.",
    },
	],
	"billing-and-payments": [
		{
			id: "billing-1",
			question: "Do I have to use my own funds to trade challenges?",
      answer:
        "No, you only pay the challenge fee upfront. Once you pass the challenge, you'll trade with our capital. Your personal funds are never at risk during the evaluation process.",
		},
		{
			id: "billing-2",
			question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards, debit cards, PayPal, and various cryptocurrency payments. All payments are processed securely through our encrypted payment system.",
		},
		{
			id: "billing-3",
			question: "Can I get a refund if I don't pass?",
      answer:
        "Challenge fees are generally non-refundable. However, we offer reset options at discounted rates so you can retry the challenge with the lessons learned from your previous attempt.",
    },
	],
  legal: [
		{
			id: "legal-1",
			question: "Do I have to tax my income?",
      answer:
        "Yes, any profits you receive are considered taxable income in most jurisdictions. We recommend consulting with a tax professional to understand your specific obligations based on your location and circumstances.",
		},
		{
			id: "legal-2",
			question: "What countries are restricted?",
      answer:
        "We cannot accept traders from certain countries due to regulatory restrictions. Please check our terms of service for the most up-to-date list of restricted jurisdictions.",
		},
		{
			id: "legal-3",
			question: "Are you regulated?",
      answer:
        "Yes, we operate under strict regulatory oversight and maintain segregated client accounts with tier-1 banks. All operations comply with relevant financial services regulations.",
    },
	],
  account: [
		{
			id: "account-1",
			question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking 'Forgot Password' on the login page. We'll send you a secure link to create a new password. Make sure to check your spam folder if you don't see the email.",
		},
		{
			id: "account-2",
			question: "Can I change my account details?",
      answer:
        "Most account details can be updated through your dashboard. However, certain information like your legal name may require verification documents to change for security purposes.",
		},
		{
			id: "account-3",
			question: "How do I delete my account?",
      answer:
        "You can request account deletion by contacting our support team. Please note that this action is irreversible and you'll lose access to all historical data and any active challenges.",
    },
  ],
};

const expandedQuestions = ref<string[]>(["gs-1"]);

const currentQuestions = computed(() => {
  const topic = selectedTopic.value;
  if (!topic) return [];
  return allQuestions[topic.key as keyof typeof allQuestions] || [];
});

const toggleQuestion = (questionId: string) => {
  const index = expandedQuestions.value.indexOf(questionId);
	if (index > -1) {
    expandedQuestions.value.splice(index, 1);
	} else {
    expandedQuestions.value.push(questionId);
	}
};

// Reset expanded questions when switching topics
watch(selectedTopic, () => {
  expandedQuestions.value = [];
});
</script>

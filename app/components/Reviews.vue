<template>
	<Container>
    <div
      class="scroll-reveal fade-up p-4 md:p-16 rounded-3xl bg-white border border-neutral-200 dark:border-transparent space-y-12"
    >
			<div class="flex flex-col items-center space-y-4">
				<ChipLabel>
          {{ t("pages.home.reviews.chip") }}
				</ChipLabel>
        <h1
          class="text-center font-clash text-2xl sm:text-4xl md:text-5xl font-semibold"
        >
          {{ t("pages.home.reviews.heading") }}
				</h1>
				<p class="text-center font-medium text-sm sm:text-base">
          {{ t("pages.home.reviews.description") }}
				</p>
			</div>

			<div class="relative">
				<!-- Carousel -->
				<div class="overflow-hidden">
					<div
						class="flex transition-transform duration-500 ease-in-out"
						:style="{ transform: `translateX(-${currentSlide * 100}%)` }"
					>
						<div
							v-for="(slideReviews, slideIndex) in reviewSlides"
							:key="slideIndex"
							class="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
						>
							<div
								v-for="review in slideReviews"
								:key="review.id"
								class="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200"
							>
								<div class="flex justify-between rtl:flex-row-reverse">
                  <div
                    class="flex items-center space-x-1 rtl:space-x-reverse mb-3"
                  >
										<IconStarFilled
											v-for="star in review.rating"
											:key="`filled-${star}`"
											class="w-4 h-4 text-green-500"
										/>
										<IconStar
                      v-for="star in 5 - review.rating"
											:key="`empty-${star}`"
											class="w-4 h-4 text-green-500"
										/>
									</div>

                  <span class="text-xs items-center text-neutral-400">{{
                    review.date
                  }}</span>
								</div>

								<p class="text-gray-800 mb-4 leading-relaxed rtl:text-right">
									{{ getReviewText(review.id) }}
								</p>

								<div class="flex items-center gap-3 rtl:flex-row-reverse">
									<div
										class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm shrink-0"
										:style="{ backgroundColor: review.avatarColor }"
									>
										{{ review.initials }}
									</div>
									<div class="rtl:text-right">
                    <div class="font-semibold text-gray-900">
                      {{ review.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ review.location }}
                    </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Navigation and Trustpilot Widget -->
				<div class="flex justify-between items-center mt-8">
					<div class="flex items-center">
						<TrustBoxCounter />
					</div>

					<div class="flex items-center space-x-2">
						<button
							@click="previousSlide"
							:disabled="!canGoPrev"
							aria-label="Previous review"
							:class="[
							'size-9 rounded-full border-2 border-primary-500 flex items-center justify-center transition-all duration-200',
							canGoPrev
								? 'text-primary-500 hover:scale-110 hover:bg-primary-50'
                  : 'text-primary-300 cursor-not-allowed opacity-50',
						]"
						>
							<IconArrowLeft :size="20" />
						</button>
						<button
							@click="nextSlide"
							:disabled="!canGoNext"
							aria-label="Next review"
							:class="[
							'size-9 rounded-full border-2 border-primary-500 flex items-center justify-center transition-all duration-200',
							canGoNext
								? 'text-primary-500 hover:scale-110 hover:bg-primary-50'
                  : 'text-primary-300 cursor-not-allowed opacity-50',
						]"
						>
							<IconArrowRight :size="20" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
import {
  IconStarFilled,
  IconStar,
  IconArrowLeft,
  IconArrowRight,
} from "@tabler/icons-vue";
import Container from "~/components/Container.vue";

const { t } = useI18n();

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
  avatarColor: string;
}

const reviews: Review[] = [
	{
		id: 1,
    name: "Will morningstar",
    location: "Monaco",
		rating: 5,
    text: "very nice prop firm, they paid me today my first payout, so they are legit and the rules are simple. i like tradersyard",
    date: "Jul 28, 2025",
    initials: "WM",
    avatarColor: "#8B5CF6",
	},
	{
		id: 2,
    name: "Dominic Mang",
    location: "Austria",
		rating: 5,
    text: "Trading with TradersYard has been a game-changer for me. Their clear rules and no hidden fees made it easy to focus on growing my account. Plus, the support team is always there when I need them.",
    date: "Jul 28, 2025",
    initials: "DM",
    avatarColor: "#10B981",
	},
	{
		id: 3,
    name: "Ritik Kaushal IN",
    location: "India",
		rating: 5,
    text: "I had a very good experience with tradersyard, recently I took part in their iphone trading competition, which was a two-week competition. With very simple easy-to-follow rules, i secured the 1st rank and was awarded with the iPhone 16 as first prize.",
    date: "Jul 28, 2025",
    initials: "RK",
    avatarColor: "#F59E0B",
	},
];

// Function to get review text by ID - use translation if available, fallback to default
const getReviewText = (reviewId: number) => {
	try {
		// Try to get the translated text directly for this specific review
    const translationKey = `pages.home.reviews.reviews.${reviewId - 1}.text`;
    const translatedText = t(translationKey);
		
		// If translation exists and is not the key itself, use it
		if (translatedText && translatedText !== translationKey) {
      return translatedText;
		}
	} catch (error) {
    console.warn("Failed to get translation for review", reviewId, error);
	}
	
	// Fallback to default text from reviews array
  const review = reviews.find((r) => r.id === reviewId);
  return review?.text || "";
};

// Carousel state
const currentSlide = ref(0);
const reviewsPerSlide = 3;

// Split reviews into slides of 3
const reviewSlides = computed(() => {
  const slides: Review[][] = [];
	for (let i = 0; i < reviews.length; i += reviewsPerSlide) {
    slides.push(reviews.slice(i, i + reviewsPerSlide));
	}
  return slides;
});

// Navigation functions
const nextSlide = () => {
	if (currentSlide.value < reviewSlides.value.length - 1) {
    currentSlide.value++;
	}
};

const previousSlide = () => {
	if (currentSlide.value > 0) {
    currentSlide.value--;
	}
};

// Navigation state
const canGoNext = computed(
  () => currentSlide.value < reviewSlides.value.length - 1
);
const canGoPrev = computed(() => currentSlide.value > 0);
</script>

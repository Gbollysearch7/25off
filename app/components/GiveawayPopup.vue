<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isVisible"
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4"
        ref="container"
      >
        <button
          @click="dismissPopup"
          class="absolute top-4 left-4 z-10 size-8 rounded-full flex items-center justify-center transition-colors duration-200"
        >
          <IconX class="size-4 text-gray-600 dark:text-gray-300" />
        </button>

        <!-- Backdrop -->
        <div
          class="absolute inset-0 bg-black/90 backdrop-blur-sm"
          @click="handleBackdropClick"
        />

        <div
          class="absolute md:-right-40 -right-20 -bottom-20 md:-bottom-40 -rotate-12 w-[320px] md:w-[512px] animate-float-1"
        >
          <img
            src="/landing/3d-icons/giftbox.webp"
            alt="Giveaway giftbox"
            loading="lazy"
            decoding="async"
            width="512"
            height="512"
          />
        </div>
        <!-- Popup Content -->
        <div
          class="relative max-w-xl w-full max-h-[90vh] overflow-hidden"
          :class="{
            'h-screen max-w-none rounded-none': currentState === 'success',
          }"
        >
          <!-- Close Button - Always visible -->

          <div
            v-if="currentState !== 'success'"
            class="space-y-8 p-8 text-center"
          >
            <div class="flex justify-center">
              <Logo />
            </div>

            <!-- Content -->
            <h2
              class="font-clash text-4xl sm:text-5xl font-semibold text-white"
            >
              {{ t("giveaway.title") }}
            </h2>
          </div>

          <!-- Actions -->
          <div v-if="currentState === 'initial'" class="space-y-3">
            <Button @click="currentState = 'form'" class="w-full">
              {{ t("giveaway.enterButton") }}
            </Button>
            <Button
              @click="dismissPopup"
              class="w-full"
              variant="ghost"
              no-icon
            >
              {{ t("giveaway.notInterestedButton") }}
            </Button>
          </div>

          <!-- Form State -->

          <div v-if="currentState === 'form'" class="space-y-6">
            <!-- Email Form -->
            <form
              v-if="submitStatus !== 'success'"
              @submit.prevent="handleSubmit"
              class="space-y-4"
            >
              <div class="relative">
                <input
                  v-model="email"
                  type="email"
                  :placeholder="t('common.buttons.enterEmail')"
                  required
                  :disabled="isSubmitting"
                  class="w-full px-6 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50 text-lg"
                />
              </div>

              <Button
                type="submit"
                :disabled="isSubmitting || !email"
                class="w-full"
              >
                {{ t("giveaway.submitButton") }}
              </Button>
            </form>
          </div>

          <!-- Success State -->
          <div
            v-else-if="currentState === 'success'"
            class="flex items-center justify-center min-h-screen p-8 text-center relative"
          >
            <!-- Success Content -->
            <div class="space-y-8 z-10 relative">
              <IconCircleCheckFilled class="mx-auto size-32 text-primary" />

              <!-- Success Message -->
              <div class="space-y-4">
                <h2
                  class="text-primary font-clash text-4xl sm:text-5xl font-semibold"
                >
                  {{ t("giveaway.successTitle") }}
                </h2>
                <p class="text-white text-sm sm:text-xl max-w-md mx-auto">
                  {{ t("giveaway.successMessage") }}
                </p>
              </div>

              <!-- Back to Site Button -->
              <Button @click="closePopup" class="w-full">
                {{ t("giveaway.backToSite") }}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { IconX, IconCircleCheckFilled } from "@tabler/icons-vue";
import type { BrevoEventResponse } from "~~/types/brevo";
import { useConfetti } from "~~/composables/useConfetti";
import { useGTM } from "~~/composables/useGTM";

const { t } = useI18n();
const { fireGiveawayConfetti } = useConfetti();
const { trackCustomEvent } = useGTM();

// Component state
const isVisible = ref(false);
const currentState = ref<"initial" | "form" | "success">("initial");
const email = ref("");
const isSubmitting = ref(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const statusMessage = ref("");
const container = ref<HTMLElement>();

// Storage key for dismissal tracking
const STORAGE_KEY = "giveaway-dismissed";

// Check if popup should be shown
const shouldShowPopup = () => {
  if (import.meta.server) return false;
  return !localStorage.getItem(STORAGE_KEY);
};

// Show popup after delay
const showPopupWithDelay = () => {
  if (!shouldShowPopup()) return;

  setTimeout(() => {
    isVisible.value = true;
  }, 10000);
};

// Dismiss popup permanently
const dismissPopup = () => {
  if (import.meta.client) {
    localStorage.setItem(STORAGE_KEY, "true");
  }
  isVisible.value = false;
};

// Close popup and save dismissal after successful submission
const closePopup = () => {
  if (import.meta.client) {
    localStorage.setItem(STORAGE_KEY, "true");
  }
  isVisible.value = false;
};

// Handle backdrop click (same as dismiss)
const handleBackdropClick = () => {
  dismissPopup();
};

// Handle form submission
const handleSubmit = async () => {
  if (!email.value || isSubmitting.value) return;

  isSubmitting.value = true;
  submitStatus.value = "idle";
  statusMessage.value = "";

  try {
    const response = await $fetch<BrevoEventResponse>(
      "/landing-api/newsletter",
      {
        method: "POST",
        body: {
          email: email.value,
          eventName: "giveaway_entry",
          properties: {
            source: "giveaway_popup",
            timestamp: new Date().toISOString(),
          },
        },
      }
    );

    if (response.success) {
      submitStatus.value = "success";
      statusMessage.value = response.message || t("giveaway.messages.success");

      // Track giveaway entry in GTM
      trackCustomEvent({
        event: "giveaway_entry_submitted",
        giveawayType: "$100k_challenge",
        leadSource: "popup",
        user_data: {
          email_address: email.value,
        },
      });

      // Clear email
      email.value = "";

      currentState.value = "success";

      await nextTick(() => {
        fireGiveawayConfetti(container.value);
      });
    } else {
      submitStatus.value = "error";
      statusMessage.value = response.error || t("giveaway.messages.error");
    }
  } catch (error: any) {
    console.error("Giveaway submission error:", error);
    submitStatus.value = "error";
    statusMessage.value =
      error.data?.message || t("giveaway.messages.unexpected");
  } finally {
    isSubmitting.value = false;

    // Clear status message after delay (only for errors)
    if (submitStatus.value === "error") {
      setTimeout(() => {
        submitStatus.value = "idle";
        statusMessage.value = "";
      }, 3000);
    }
  }
};

// Initialize popup on mount
onMounted(() => {
  showPopupWithDelay();
});

watch(isVisible, (open) => {
  if (import.meta.server) return;
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <Container>
	  <div class="overflow-hidden flex rounded-3xl p-8 md:p-16 flex-col items-center space-y-8 relative translate-y-1/2 z-10 bg-primary">
		  <div class="space-y-4 text-center">
			  <h2 class="font-clash text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
				  {{ t('newsletter.heading') }}
			  </h2>

			  <p class="w-full md:w-2/3 mx-auto font-medium text-sm sm:text-base text-neutral-200">
				  {{ t('newsletter.description') }}
			  </p>
		  </div>

		  <div class="flex justify-center h-16 w-full lg:w-2/5 space-y-3">
			  <!-- Status Message -->
			  <Transition
				  enter-active-class="transition-all duration-300 ease-out"
				  enter-from-class="opacity-0"
				  enter-to-class="opacity-100"
				  leave-active-class="transition-all duration-200 ease-in"
				  leave-from-class="opacity-100"
				  leave-to-class="opacity-0"
			  >
				  <form
					  v-if="submitStatus === 'idle'"
					  @submit.prevent="handleSubmit"
					  class="w-full flex items-center relative"
					  ref="formRef"
				  >
					  <input
						  v-model="email"
						  type="email"
						  :placeholder="t('common.buttons.enterEmail')"
						  required
						  :disabled="isSubmitting"
						  class="w-full px-6 py-3 sm:py-4 rounded-lg sm:rounded-2xl text-gray-900 placeholder-gray-500 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-primary-300 sm:text-lg pr-16 disabled:opacity-50"
					  />
					  <button
						  type="submit"
						  class="absolute right-2 size-10 duration-200 flex items-center justify-center disabled:cursor-not-allowed"
						  :disabled="isSubmitting || !email"
						  aria-label="Subscribe"
					  >
						  <IconArrowRight v-if="!isSubmitting" class="text-primary" />
						  <IconLoader2 v-else class="text-primary animate-spin" />
					  </button>
				  </form>
				  <div
					  v-else
					  class="absolute flex items-center justify-center gap-2 text-lg font-medium"
					  :class="{
						  'text-green-200': submitStatus === 'success',
						  'text-red-200': submitStatus === 'error'
					  }"
				  >
					  <IconCheck v-if="submitStatus === 'success'" class="size-4" />
					  <IconX v-if="submitStatus === 'error'" class="size-4" />
					  <span>{{ statusMessage }}</span>
				  </div>
			  </Transition>
		  </div>

		  <!-- Desktop only envelope - WebP optimized -->
		  <div v-if="isDesktop" class="hidden lg:block absolute w-80 right-4 -bottom-24 rotate-12">
			  <img 
				  src="/landing/3d-icons/envelope.webp" 
				  alt="3d envelope icon"
				  loading="lazy"
				  decoding="async"
				  width="320"
				  height="320"
			  >
		  </div>
	  </div>
  </Container>
</template>

<script setup lang="ts">
import { IconArrowRight, IconLoader2, IconCheck, IconX } from "@tabler/icons-vue";
import type { BrevoEventResponse } from '~~/types/brevo'
import { useConfetti } from "~~/composables/useConfetti";
import { useGTM } from "~~/composables/useGTM";

const { t } = useI18n()
const { fireSuccess } = useConfetti()
const { trackLeadFormSubmission } = useGTM()

// Only render desktop-only images on desktop to prevent mobile downloads
const isDesktop = ref(false)
onMounted(() => {
	isDesktop.value = window.matchMedia('(min-width: 1024px)').matches
})

const email = ref('')
const isSubmitting = ref(false)
const submitStatus = ref<'idle' | 'success' | 'error'>('idle')
const statusMessage = ref('')
const formRef = ref<HTMLFormElement>()

const handleSubmit = async () => {
  if (!email.value || isSubmitting.value) return
  
  isSubmitting.value = true
  submitStatus.value = 'idle'
  statusMessage.value = ''
  
  try {
    const response = await $fetch<BrevoEventResponse>('/landing-api/newsletter', {
      method: 'POST',
      body: {
        email: email.value,
        eventName: 'giveaway_entry',
        properties: {
          source: 'website',
          timestamp: new Date().toISOString()
        }
      }
    })

    if (response.success) {
      submitStatus.value = 'success'
      statusMessage.value = response.message || t('newsletter.messages.success')
      
      // Track successful lead form submission in GTM
      trackLeadFormSubmission(email.value)
      
      email.value = ''
      
      // Fire confetti animation from the form element
      if (formRef.value) {
        fireSuccess(formRef.value)
      }
    } else {
      submitStatus.value = 'error'
      statusMessage.value = response.error || t('newsletter.messages.error')
    }
  } catch (error: any) {
    console.error('Newsletter subscription error:', error)
    submitStatus.value = 'error'
    statusMessage.value = error.data?.message || t('newsletter.messages.unexpected')
  } finally {
    isSubmitting.value = false
    
    // Clear status message after 5 seconds
    if (submitStatus.value !== 'idle') {
      setTimeout(() => {
        submitStatus.value = 'idle'
        statusMessage.value = ''
      }, 3000)
    }
  }
}
</script>
<template>
  <div class="min-h-screen bg-white dark:bg-dark transition-colors duration-200 relative">
    <div class="relative z-10">
      <!-- Campaign Banner (Red themed) -->
      <div class="banner-container overflow-hidden bg-gradient-to-r from-campaign to-red-700 py-3">
        <div class="banner-scroll flex gap-6 md:gap-12 whitespace-nowrap">
          <div v-for="i in 10" :key="i" class="banner-item flex items-center w-fit">
            <div class="font-clash flex items-center gap-6 md:gap-12 py-1">
              <div class="tracking-wide uppercase text-white font-semibold text-xs flex items-center gap-2">
                <svg class="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                VALENTINE'S EXCLUSIVE: 25% OFF + FREE GIFT CHALLENGE -- USE CODE LOVE25
              </div>
              <div>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9477 2.92125C15.9655 2.92331 16.9832 2.94745 18 2.99368C17.9065 3.29336 17.7316 3.79255 17.5556 4.16343C16.3597 6.68599 15.2599 9.31733 14.0387 11.8168C13.9139 12.0724 13.1843 11.8581 13.0129 11.9729C13.0921 12.0693 13.4687 12.0766 13.6261 12.1616C14.2329 12.4891 14.4697 13.0281 14.4898 13.675C14.5081 14.231 14.3047 14.7715 13.9246 15.1767C12.9735 16.1729 11.5603 15.9899 10.3049 15.9818C9.48902 15.9715 8.67307 15.9719 7.85723 15.9827C7.85768 15.4733 7.78835 13.9573 7.89861 13.5653C8.13654 13.3711 11.1049 13.6319 11.9469 13.3064C12.3587 12.9572 12.3079 12.4042 11.911 12.1944C11.2676 11.8542 9.17875 11.8824 8.50268 12.0166C8.35193 9.24032 8.49922 5.81058 8.49956 2.9802C9.24418 3.05345 10.6216 3.00833 11.4192 3.01204C11.4866 4.8201 11.508 6.62957 11.4833 8.43872C11.4795 9.07204 11.4114 9.97148 11.4348 10.5574C11.6443 10.1382 11.8657 9.20538 11.9693 8.99712C12.3771 8.17704 14.5371 3.35813 14.9477 2.92125Z" fill="white"/>
                  <path d="M5.07507 0.00868381L5.15271 0C5.28977 0.169278 5.246 2.62093 5.20898 2.98951C5.84358 2.95008 6.84424 3.00437 7.52913 3.00478C7.52456 3.72151 7.49668 4.70589 7.59755 5.4039C6.49329 5.44695 5.43919 5.37213 4.3314 5.5173C2.61755 5.74188 2.53122 8.27852 3.69693 9.11082C4.36544 9.58811 6.6685 9.57761 7.43244 9.42087C7.40122 10.2367 7.42589 11.1262 7.40325 11.9617C6.74209 11.9674 6.0809 11.9678 5.41974 11.9629C4.47373 11.9791 3.54182 12.0156 2.63431 11.7039C1.71573 11.3956 0.960792 10.7275 0.541544 9.8519C0.135566 9.01535 0.0309972 7.88169 0.348382 7.00144C0.687882 6.05979 1.24236 5.72638 2.08416 5.31768C1.56193 5.38596 0.611886 5.54011 0.123379 5.43755C-0.0689997 5.39719 -0.00259622 3.30476 0.095105 3.0133C0.274551 2.89296 1.98308 2.95869 2.33005 2.95912C2.03157 0.807518 3.05188 0.0353154 5.07507 0.00868381Z" fill="white"/>
                </svg>
              </div>
              <div class="tracking-wide uppercase text-white font-semibold text-xs flex items-center gap-2">
                BUY ONE CHALLENGE, GIFT ONE FREE -- FEB 9-18 ONLY -- CODE: LOVE25
                <svg class="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              </div>
              <div>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9477 2.92125C15.9655 2.92331 16.9832 2.94745 18 2.99368C17.9065 3.29336 17.7316 3.79255 17.5556 4.16343C16.3597 6.68599 15.2599 9.31733 14.0387 11.8168C13.9139 12.0724 13.1843 11.8581 13.0129 11.9729C13.0921 12.0693 13.4687 12.0766 13.6261 12.1616C14.2329 12.4891 14.4697 13.0281 14.4898 13.675C14.5081 14.231 14.3047 14.7715 13.9246 15.1767C12.9735 16.1729 11.5603 15.9899 10.3049 15.9818C9.48902 15.9715 8.67307 15.9719 7.85723 15.9827C7.85768 15.4733 7.78835 13.9573 7.89861 13.5653C8.13654 13.3711 11.1049 13.6319 11.9469 13.3064C12.3587 12.9572 12.3079 12.4042 11.911 12.1944C11.2676 11.8542 9.17875 11.8824 8.50268 12.0166C8.35193 9.24032 8.49922 5.81058 8.49956 2.9802C9.24418 3.05345 10.6216 3.00833 11.4192 3.01204C11.4866 4.8201 11.508 6.62957 11.4833 8.43872C11.4795 9.07204 11.4114 9.97148 11.4348 10.5574C11.6443 10.1382 11.8657 9.20538 11.9693 8.99712C12.3771 8.17704 14.5371 3.35813 14.9477 2.92125Z" fill="white"/>
                  <path d="M5.07507 0.00868381L5.15271 0C5.28977 0.169278 5.246 2.62093 5.20898 2.98951C5.84358 2.95008 6.84424 3.00437 7.52913 3.00478C7.52456 3.72151 7.49668 4.70589 7.59755 5.4039C6.49329 5.44695 5.43919 5.37213 4.3314 5.5173C2.61755 5.74188 2.53122 8.27852 3.69693 9.11082C4.36544 9.58811 6.6685 9.57761 7.43244 9.42087C7.40122 10.2367 7.42589 11.1262 7.40325 11.9617C6.74209 11.9674 6.0809 11.9678 5.41974 11.9629C4.47373 11.9791 3.54182 12.0156 2.63431 11.7039C1.71573 11.3956 0.960792 10.7275 0.541544 9.8519C0.135566 9.01535 0.0309972 7.88169 0.348382 7.00144C0.687882 6.05979 1.24236 5.72638 2.08416 5.31768C1.56193 5.38596 0.611886 5.54011 0.123379 5.43755C-0.0689997 5.39719 -0.00259622 3.30476 0.095105 3.0133C0.274551 2.89296 1.98308 2.95869 2.33005 2.95912C2.03157 0.807518 3.05188 0.0353154 5.07507 0.00868381Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Minimal Campaign Navigation -->
      <div class="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50">
        <Container as="header" class="py-3">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center gap-4">
              <Logo />
              <div class="hidden sm:block h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
              <span class="hidden sm:block text-sm font-clash font-medium text-campaign">Gift-a-Challenge</span>
            </div>
            <div class="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="campaign" size="sm" href="#pricing">
                Get 25% Off
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <!-- Main Content -->
      <main>
        <slot />
      </main>

      <!-- Campaign Footer with Disclaimers -->
      <footer class="bg-neutral-100 dark:bg-neutral-900 pt-10 pb-8">
        <Container>
          <div class="space-y-8">
            <!-- Top row: Logo + Links -->
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div class="flex items-center gap-3">
                <Logo />
                <span class="text-sm text-neutral-500">&copy; {{ new Date().getFullYear() }} TradersYard GmbH</span>
              </div>
              <div class="flex items-center gap-6 text-sm text-neutral-500">
                <a href="https://tradersyard.com/legal/terms" class="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Terms</a>
                <a href="https://tradersyard.com/legal/privacy" class="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Privacy</a>
                <a href="https://tradersyard.com/legal/refund" class="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">Refund Policy</a>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-neutral-200 dark:border-neutral-800" />

            <!-- Disclaimers -->
            <div class="space-y-6 text-[11px] leading-relaxed text-neutral-400 dark:text-neutral-500">
              <!-- Demo account notice -->
              <p class="text-center text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                All accounts provided to clients are demo accounts with virtual funds. All trading takes place in a simulated environment.
              </p>

              <!-- General Disclosure -->
              <div>
                <h4 class="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[10px] mb-1">General Disclosure</h4>
                <p>The materials and content provided by TradersYard GmbH, whether on our website, through distributed documents, or other communications, are intended solely for general informational purposes. This content does not constitute investment advice, an offer to buy or sell securities, or an endorsement of any financial instruments, companies, or funds. Users should not interpret the information as personalized financial advice. TradersYard GmbH, registered at K&auml;rntnerring 5-7, 1010 Vienna, Austria, adheres to all relevant European and international legal standards.</p>
              </div>

              <!-- Risk Disclosure -->
              <div>
                <h4 class="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[10px] mb-1">Risk Disclosure</h4>
                <p>Engaging in futures, forex, and other financial trading involves significant risk and is not appropriate for all investors. It is possible to lose the entire amount of your investment, or even more. Only use risk capital &mdash; money you can afford to lose without impacting your financial security or lifestyle. Trading should only be undertaken by individuals who have the necessary capital, can understand the risks involved, and acknowledge that past trading results do not guarantee future performance. TradersYard GmbH does not warrant the accuracy or completeness of the information provided and is not responsible for any losses or damages resulting from reliance on this information.</p>
              </div>

              <!-- Hypothetical Performance -->
              <div>
                <h4 class="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[10px] mb-1">Hypothetical Performance Disclosure</h4>
                <p>Performance results based on hypothetical data have many inherent limitations and should not be relied upon as indicative of actual future performance. Hypothetical performance figures are often generated with the benefit of hindsight and do not involve financial risk, thus differing significantly from actual trading results. Testimonials and other promotional materials on our website do not necessarily represent the experiences of other clients and do not predict future performance.</p>
              </div>

              <!-- CFTC -->
              <div>
                <h4 class="font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider text-[10px] mb-1">CFTC Rule 4.41</h4>
                <p>In accordance with CFTC Rule 4.41, hypothetical or simulated performance results have inherent limitations. They do not stem from actual trading activities and may misrepresent the impact of real market conditions such as liquidity. These models, often constructed with the benefit of hindsight, lack predictive value regarding future trading outcomes. No assurance is provided that any trading account will achieve profits or losses similar to those illustrated. Past performance metrics should not be interpreted as reliable indicators of future results.</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <!-- Notice -->
      <Notice />

      <!-- Sticky Mobile CTA Bar -->
      <div
        v-if="showStickyCta"
        class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 dark:bg-dark/95 backdrop-blur-xl border-t border-neutral-200 dark:border-neutral-800 px-4 py-3 safe-area-bottom"
      >
        <div class="flex items-center gap-3">
          <div class="flex-1 min-w-0">
            <div class="text-xs text-neutral-500 dark:text-neutral-400">Use code <span class="font-semibold text-campaign">LOVE25</span></div>
            <div class="text-sm font-clash font-semibold text-neutral-900 dark:text-white truncate">25% Off + Free Gift Challenge</div>
          </div>
          <a
            href="#pricing"
            class="flex-shrink-0 bg-campaign text-white font-clash font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-campaign-dark transition-colors"
          >
            Get 25% Off
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from "~~/composables/useTheme.js"

const showStickyCta = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const { initializeTheme } = useTheme()
  initializeTheme()

  if (typeof IntersectionObserver !== 'undefined') {
    const heroSection = document.querySelector('section')
    if (heroSection) {
      observer = new IntersectionObserver(
        ([entry]) => {
          showStickyCta.value = !entry.isIntersecting
        },
        { threshold: 0 }
      )
      observer.observe(heroSection)
    }
  }
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.banner-scroll {
  animation: scroll 30s linear infinite;
}

.banner-container:hover .banner-scroll {
  animation-play-state: paused;
}

.safe-area-bottom {
  padding-bottom: max(0.75rem, env(safe-area-inset-bottom));
}
</style>

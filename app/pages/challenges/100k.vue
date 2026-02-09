<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <Container class="py-16 md:py-24">
        <div class="flex flex-col items-center text-center max-w-4xl mx-auto">
          <!-- Badge -->
          <ChipLabel class="mb-6">
            #1 BEST SELLER
          </ChipLabel>

          <!-- Headline -->
          <h1 class="font-clash text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold dark:text-white mb-6">
            Trade With $100,000
            <span class="block text-primary">Keep 80% of Every Dollar</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
            Our most popular challenge for a reason. Pass a simple evaluation,
            get funded with $100K, and start earning real money from your trading skills.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="primary"
              size="lg"
              href="https://tradersyard.com/auth/register?challenge=100k"
            >
              Get Your 100K Account → $283
            </Button>
            <Button
              variant="dark"
              size="lg"
              href="#how-it-works"
              :no-icon="true"
            >
              See How It Works
            </Button>
          </div>

          <!-- Trust Badges -->
          <div class="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-neutral-600 dark:text-neutral-400">
            <div class="flex items-center gap-2">
              <IconTrophy class="w-5 h-5 text-primary" />
              <span>#1 Best Seller</span>
            </div>
            <div class="flex items-center gap-2">
              <IconChartBar class="w-5 h-5 text-green-500" />
              <span>71% Pass Rate</span>
            </div>
            <div class="flex items-center gap-2">
              <IconCash class="w-5 h-5 text-yellow-500" />
              <span>$4,200 Avg First Payout</span>
            </div>
            <div class="flex items-center gap-2">
              <IconBolt class="w-5 h-5 text-blue-500" />
              <span>Instant Access</span>
            </div>
          </div>
        </div>
      </Container>

      <!-- Background Gradient -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
    </section>

    <!-- Social Proof Ticker -->
    <section class="bg-neutral-100 dark:bg-neutral-900 py-4 overflow-hidden">
      <div class="flex animate-marquee whitespace-nowrap">
        <div v-for="i in 2" :key="i" class="flex gap-8 mx-4">
          <span class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Marcus T. from Germany just got funded on 100K
          </span>
          <span class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Sarah K. from UK passed Phase 1 in 6 days
          </span>
          <span class="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            David R. from Netherlands requested $2,400 payout
          </span>
        </div>
      </div>
    </section>

    <!-- Why 100K Section -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">THE DATA</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            Why 100K is Our Best Seller
          </h2>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 text-center">
            <div class="font-clash text-4xl md:text-5xl font-semibold text-primary mb-2">33%</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Of all our revenue</div>
          </div>
          <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 text-center">
            <div class="font-clash text-4xl md:text-5xl font-semibold text-green-500 mb-2">71%</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Pass rate (highest)</div>
          </div>
          <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 text-center">
            <div class="font-clash text-4xl md:text-5xl font-semibold text-yellow-500 mb-2">$4,200</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Avg first-month profit</div>
          </div>
          <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6 text-center">
            <div class="font-clash text-4xl md:text-5xl font-semibold text-blue-500 mb-2">14</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Days avg to pass</div>
          </div>
        </div>

        <!-- Content Block -->
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            The 100K isn't just our best seller—it's our best performer. Here's why experienced traders choose 100K:
          </p>
          <ul class="text-left space-y-3 max-w-xl mx-auto">
            <li class="flex items-start gap-3">
              <IconCheck class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-neutral-700 dark:text-neutral-300">Enough capital to trade any strategy properly</span>
            </li>
            <li class="flex items-start gap-3">
              <IconCheck class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-neutral-700 dark:text-neutral-300">$8,000 profit target is challenging but achievable</span>
            </li>
            <li class="flex items-start gap-3">
              <IconCheck class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-neutral-700 dark:text-neutral-300">Room for larger positions without excessive risk</span>
            </li>
            <li class="flex items-start gap-3">
              <IconCheck class="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span class="text-neutral-700 dark:text-neutral-300">The math works: 10% monthly = $8,000 = $6,400 in your pocket</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">SIMPLE PROCESS</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            How the 100K Challenge Works
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <!-- Step 1 -->
          <div class="relative">
            <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 h-full">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <IconTarget class="w-6 h-6 text-primary" />
              </div>
              <div class="text-sm text-primary font-medium mb-2">PHASE 1</div>
              <h3 class="font-clash text-xl font-semibold dark:text-white mb-3">Prove Yourself</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Hit an 8% profit target ($8,000) on your $100,000 account. No time limit. Trade your strategy at your own pace.
              </p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <IconChevronRight class="w-8 h-8 text-neutral-300 dark:text-neutral-600" />
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 h-full">
              <div class="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                <IconCircleCheck class="w-6 h-6 text-green-500" />
              </div>
              <div class="text-sm text-green-500 font-medium mb-2">PHASE 2</div>
              <h3 class="font-clash text-xl font-semibold dark:text-white mb-3">Confirm Your Skills</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Repeat with a 5% profit target ($5,000). Show us your first phase wasn't a fluke. Same rules, lower target.
              </p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
              <IconChevronRight class="w-8 h-8 text-neutral-300 dark:text-neutral-600" />
            </div>
          </div>

          <!-- Step 3 -->
          <div>
            <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8 h-full border-2 border-primary">
              <div class="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <IconCash class="w-6 h-6 text-yellow-500" />
              </div>
              <div class="text-sm text-yellow-500 font-medium mb-2">FUNDED</div>
              <h3 class="font-clash text-xl font-semibold dark:text-white mb-3">Get Paid</h3>
              <p class="text-neutral-600 dark:text-neutral-400">
                Trade with real capital. Keep 80% of every profit you make. Withdraw bi-weekly (or weekly with upgrade).
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Profit Potential Section -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">EARNING POTENTIAL</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            What 100K Traders Actually Earn
          </h2>
        </div>

        <!-- Earnings Table -->
        <div class="max-w-3xl mx-auto mb-12 overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-neutral-200 dark:border-neutral-700">
                <th class="text-left py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Monthly Return</th>
                <th class="text-left py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Gross Profit</th>
                <th class="text-left py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Your 80% Share</th>
                <th class="text-left py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Annual Potential</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">5% (conservative)</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$5,000</td>
                <td class="py-4 px-4 font-semibold text-green-500">$4,000</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$48,000</td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800 bg-primary/5">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">10% (average)</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$10,000</td>
                <td class="py-4 px-4 font-semibold text-green-500">$8,000</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$96,000</td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">15% (strong)</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$15,000</td>
                <td class="py-4 px-4 font-semibold text-green-500">$12,000</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$144,000</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">20% (excellent)</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$20,000</td>
                <td class="py-4 px-4 font-semibold text-green-500">$16,000</td>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">$192,000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- ROI Callout -->
        <div class="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-green-500/10 rounded-2xl p-8 text-center">
          <h3 class="font-clash text-xl font-semibold dark:text-white mb-4">Let's Do The Math</h3>
          <div class="space-y-2 text-neutral-700 dark:text-neutral-300">
            <p>You buy the 100K challenge: <span class="font-semibold">$283</span></p>
            <p>Month 1 (funded): You make 10% = <span class="font-semibold text-green-500">$8,000 in your pocket</span></p>
            <p>ROI on your $283: <span class="font-semibold text-primary">2,726%</span></p>
          </div>
        </div>
      </Container>
    </section>

    <!-- What You Get Section -->
    <section class="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">EVERYTHING INCLUDED</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            Your 100K Challenge Includes
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <!-- Account Features -->
          <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8">
            <h3 class="font-clash text-xl font-semibold dark:text-white mb-6 flex items-center gap-2">
              <IconWallet class="w-5 h-5 text-primary" />
              Account Features
            </h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">$100,000 Phase 1 evaluation account</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">$100,000 Phase 2 verification account</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">$100,000 funded live account</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">80% profit split (you keep $8 of every $10)</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">No time limit to pass</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">Bi-weekly payouts (weekly upgrade available)</span>
              </li>
            </ul>
          </div>

          <!-- Trading Freedom -->
          <div class="bg-white dark:bg-neutral-800 rounded-2xl p-8">
            <h3 class="font-clash text-xl font-semibold dark:text-white mb-6 flex items-center gap-2">
              <IconRocket class="w-5 h-5 text-primary" />
              Trading Freedom
            </h3>
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">All strategies allowed (scalping, swing, day)</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">News trading allowed</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">Weekend & overnight holding allowed</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">Trade forex, indices, commodities, crypto CFDs</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">Use MT4, MT5, or web platform</span>
              </li>
              <li class="flex items-center gap-3">
                <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                <span class="text-neutral-700 dark:text-neutral-300">No minimum trading days required</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>

    <!-- Challenge Rules Section -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">TRANSPARENT RULES</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            Simple Rules. No Tricks.
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          <!-- Phase 1 -->
          <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6">
            <div class="text-sm text-primary font-medium mb-4">PHASE 1</div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Profit Target</span>
                <span class="font-semibold dark:text-white">8% ($8,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Daily Loss Limit</span>
                <span class="font-semibold dark:text-white">5% ($5,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Max Drawdown</span>
                <span class="font-semibold dark:text-white">10% ($10,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Time Limit</span>
                <span class="font-semibold text-green-500">None</span>
              </div>
            </div>
          </div>

          <!-- Phase 2 -->
          <div class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-6">
            <div class="text-sm text-green-500 font-medium mb-4">PHASE 2</div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Profit Target</span>
                <span class="font-semibold dark:text-white">5% ($5,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Daily Loss Limit</span>
                <span class="font-semibold dark:text-white">5% ($5,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Max Drawdown</span>
                <span class="font-semibold dark:text-white">10% ($10,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Time Limit</span>
                <span class="font-semibold text-green-500">None</span>
              </div>
            </div>
          </div>

          <!-- Funded -->
          <div class="bg-primary/10 border-2 border-primary rounded-2xl p-6">
            <div class="text-sm text-primary font-medium mb-4">FUNDED ACCOUNT</div>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Profit Split</span>
                <span class="font-semibold text-primary">80% / 20%</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Daily Loss Limit</span>
                <span class="font-semibold dark:text-white">5% ($5,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Max Drawdown</span>
                <span class="font-semibold dark:text-white">10% ($10,000)</span>
              </div>
              <div class="flex justify-between">
                <span class="text-neutral-600 dark:text-neutral-400">Payouts</span>
                <span class="font-semibold text-green-500">Bi-weekly</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pro Tip -->
        <div class="max-w-2xl mx-auto bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 flex items-start gap-4">
          <IconBulb class="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p class="font-semibold dark:text-white mb-1">Pro Tip</p>
            <p class="text-neutral-600 dark:text-neutral-400 text-sm">
              80% of challenge failures are rule violations, not bad trades. Read our rules guide before you start. It takes 5 minutes and could save your challenge.
            </p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Pricing Section -->
    <section class="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900">
      <Container>
        <div class="max-w-lg mx-auto">
          <div class="bg-white dark:bg-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            <!-- Header -->
            <div class="bg-primary p-6 text-center">
              <div class="text-white/80 text-sm mb-1">100K 2-PHASE CHALLENGE</div>
              <div class="inline-block bg-white/20 rounded-full px-3 py-1 text-white text-xs font-medium">
                BEST SELLER
              </div>
            </div>

            <!-- Price -->
            <div class="p-8 text-center border-b border-neutral-100 dark:border-neutral-700">
              <div class="font-clash text-6xl font-semibold dark:text-white mb-2">$283</div>
              <div class="text-neutral-600 dark:text-neutral-400">one-time payment</div>

              <div class="flex justify-center gap-4 mt-4 text-sm">
                <div class="flex items-center gap-1 text-green-500">
                  <IconCoin class="w-4 h-4" />
                  <span>$2.83 per $1,000</span>
                </div>
                <div class="flex items-center gap-1 text-primary">
                  <IconTrendingUp class="w-4 h-4" />
                  <span>2,726% avg ROI</span>
                </div>
              </div>
            </div>

            <!-- Features -->
            <div class="p-8">
              <ul class="space-y-3 mb-8">
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">$100,000 evaluation account (Phase 1)</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">$100,000 verification account (Phase 2)</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">$100,000 funded account (after passing)</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">80% profit split</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">No monthly fees. Ever.</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">Instant account delivery (&lt; 5 minutes)</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">24/7 trader dashboard</span>
                </li>
                <li class="flex items-center gap-3">
                  <IconCheck class="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span class="text-neutral-700 dark:text-neutral-300">Discord community access</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <Button
                variant="primary"
                size="lg"
                class="w-full justify-center"
                href="https://tradersyard.com/auth/register?challenge=100k"
              >
                Start Your 100K Challenge Now
              </Button>

              <!-- Trust Line -->
              <div class="flex items-center justify-center gap-2 mt-4 text-sm text-neutral-500">
                <IconLock class="w-4 h-4" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </div>

            <!-- Add-ons -->
            <div class="bg-neutral-50 dark:bg-neutral-900 p-6 border-t border-neutral-100 dark:border-neutral-700">
              <div class="text-sm font-medium dark:text-white mb-3">Optional Add-ons at Checkout:</div>
              <div class="grid grid-cols-2 gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <div>Weekly Payouts (+$90)</div>
                <div>90% Profit Split (+$80)</div>
                <div>Free Reset (+$50)</div>
                <div>Immediate Payouts (+$70)</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Comparison Section -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">COMPARE</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            100K vs Other Account Sizes
          </h2>
        </div>

        <div class="max-w-4xl mx-auto overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-neutral-200 dark:border-neutral-700">
                <th class="text-left py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">Feature</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">50K</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-primary bg-primary/5 rounded-t-lg">100K</th>
                <th class="text-center py-4 px-4 font-clash font-medium text-neutral-600 dark:text-neutral-400">200K</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">Price</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$225</td>
                <td class="py-4 px-4 text-center font-semibold text-primary bg-primary/5">$283</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$488</td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">Cost per $1K</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$4.50</td>
                <td class="py-4 px-4 text-center font-semibold text-primary bg-primary/5">$2.83</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$2.44</td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">Phase 1 Target</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$4,000</td>
                <td class="py-4 px-4 text-center font-semibold text-primary bg-primary/5">$8,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$16,000</td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">Avg Monthly Profit</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$2,500</td>
                <td class="py-4 px-4 text-center font-semibold text-primary bg-primary/5">$5,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$10,000</td>
              </tr>
              <tr class="border-b border-neutral-100 dark:border-neutral-800">
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">Your Share (80%)</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$2,000</td>
                <td class="py-4 px-4 text-center font-semibold text-green-500 bg-primary/5">$4,000</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">$8,000</td>
              </tr>
              <tr>
                <td class="py-4 px-4 text-neutral-700 dark:text-neutral-300">Pass Rate</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">65%</td>
                <td class="py-4 px-4 text-center font-semibold text-green-500 bg-primary/5 rounded-b-lg">71%</td>
                <td class="py-4 px-4 text-center text-neutral-700 dark:text-neutral-300">58%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Recommendation Box -->
        <div class="max-w-2xl mx-auto mt-8 bg-primary/10 border border-primary/30 rounded-xl p-6">
          <div class="flex items-start gap-4">
            <IconTargetArrow class="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p class="font-semibold dark:text-white mb-2">Our Recommendation</p>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm">
                The 100K is the optimal choice for most traders. It offers the best balance of capital, cost, and achievability.
                200K targets are harder to hit. 50K limits your profit potential. 100K is the sweet spot.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 md:py-24 bg-neutral-100 dark:bg-neutral-900">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">TESTIMONIALS</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            100K Funded Traders Speak
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <!-- Testimonial 1 -->
          <div class="bg-white dark:bg-neutral-800 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <IconStar v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <p class="text-neutral-700 dark:text-neutral-300 mb-6">
              "I've tried 3 prop firms. TradersYard's 100K is the best. Passed in 11 days, got my first payout of $3,200 within 2 weeks of being funded."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span class="font-semibold text-primary">TA</span>
              </div>
              <div>
                <div class="font-medium dark:text-white">Thomas A.</div>
                <div class="text-sm text-neutral-500">Sweden • $14,200 total payouts</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div class="bg-white dark:bg-neutral-800 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <IconStar v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <p class="text-neutral-700 dark:text-neutral-300 mb-6">
              "The 100K was intimidating at first, but the rules are actually easier than smaller accounts because you have more room. Passed Phase 1 in 8 trades."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <span class="font-semibold text-green-500">PS</span>
              </div>
              <div>
                <div class="font-medium dark:text-white">Priya S.</div>
                <div class="text-sm text-neutral-500">India • Currently funded</div>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div class="bg-white dark:bg-neutral-800 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <IconStar v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <p class="text-neutral-700 dark:text-neutral-300 mb-6">
              "Bought the 100K on a Friday, passed Phase 1 by Wednesday. The $283 was the best investment I've ever made in my trading career."
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span class="font-semibold text-yellow-500">CM</span>
              </div>
              <div>
                <div class="font-medium dark:text-white">Carlos M.</div>
                <div class="text-sm text-neutral-500">Brazil • $22,400 total payouts</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Stats -->
        <div class="flex flex-wrap justify-center gap-8 md:gap-16">
          <div class="text-center">
            <div class="font-clash text-3xl md:text-4xl font-semibold text-primary">$207,835+</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Total Paid Out</div>
          </div>
          <div class="text-center">
            <div class="font-clash text-3xl md:text-4xl font-semibold text-green-500">109</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Funded Traders</div>
          </div>
          <div class="text-center">
            <div class="font-clash text-3xl md:text-4xl font-semibold text-blue-500">22</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Countries</div>
          </div>
          <div class="text-center">
            <div class="font-clash text-3xl md:text-4xl font-semibold text-yellow-500">4.8★</div>
            <div class="text-sm text-neutral-600 dark:text-neutral-400">Trustpilot</div>
          </div>
        </div>
      </Container>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-24">
      <Container>
        <div class="text-center mb-12">
          <ChipLabel class="mb-4 inline-block">FAQ</ChipLabel>
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white">
            Questions? We've Got Answers.
          </h2>
        </div>

        <div class="max-w-3xl mx-auto space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-neutral-100 dark:bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all"
            @click="toggleFaq(index)"
          >
            <div class="p-6 flex items-center justify-between">
              <h3 class="font-clash font-medium text-lg dark:text-white pr-4">{{ faq.question }}</h3>
              <IconChevronDown
                class="w-5 h-5 text-neutral-500 transition-transform flex-shrink-0"
                :class="{ 'rotate-180': expandedFaq === index }"
              />
            </div>
            <div
              v-show="expandedFaq === index"
              class="px-6 pb-6 text-neutral-600 dark:text-neutral-400"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Final CTA Section -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
      <Container>
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="font-clash text-3xl sm:text-4xl md:text-5xl font-semibold dark:text-white mb-6">
            Ready to Join the 100K Club?
          </h2>
          <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            The account size where trading becomes a real career. $283 to change your financial future.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="primary"
              size="lg"
              href="https://tradersyard.com/auth/register?challenge=100k"
            >
              Get Your 100K Account → $283
            </Button>
            <Button
              variant="dark"
              size="lg"
              href="/challenges"
              :no-icon="true"
            >
              Compare All Account Sizes
            </Button>
          </div>

          <!-- Live Stats -->
          <div class="flex flex-wrap justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
            <div class="flex items-center gap-2">
              <IconFlame class="w-4 h-4 text-orange-500" />
              <span>127 traders started their 100K this month</span>
            </div>
            <div class="flex items-center gap-2">
              <IconBolt class="w-4 h-4 text-yellow-500" />
              <span>Average time to funded: 14 days</span>
            </div>
          </div>

          <!-- Trust Elements -->
          <div class="flex items-center justify-center gap-4 mt-8 text-sm text-neutral-500">
            <div class="flex items-center gap-1">
              <IconLock class="w-4 h-4" />
              <span>Secure checkout</span>
            </div>
            <div class="flex items-center gap-1">
              <IconCreditCard class="w-4 h-4" />
              <span>All major cards</span>
            </div>
            <div class="flex items-center gap-1">
              <IconBolt class="w-4 h-4" />
              <span>Instant access</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  IconTrophy,
  IconChartBar,
  IconCash,
  IconBolt,
  IconCheck,
  IconTarget,
  IconChevronRight,
  IconCircleCheck,
  IconWallet,
  IconRocket,
  IconBulb,
  IconCoin,
  IconTrendingUp,
  IconLock,
  IconTargetArrow,
  IconStar,
  IconChevronDown,
  IconFlame,
  IconCreditCard,
} from "@tabler/icons-vue";

// SEO Meta
useHead({
  title: "100K Funded Trading Challenge - Trade with $100,000 Capital | TradersYard",
  meta: [
    {
      name: "description",
      content: "Get funded with $100,000 in trading capital. Our #1 seller. Only $283. Pass our evaluation, keep 80% of profits. This is where pros trade.",
    },
    {
      property: "og:title",
      content: "100K Funded Trading Challenge | TradersYard",
    },
    {
      property: "og:description",
      content: "Get funded with $100,000. Only $283. Pass our evaluation, keep 80% of profits.",
    },
  ],
});

// FAQ Data
const faqs = [
  {
    question: "Why is the 100K your best seller?",
    answer: "Three reasons: 1. Best cost-per-capital ratio ($2.83 per $1,000). 2. Highest pass rate (71%). 3. Meaningful profit potential ($4,000-8,000/month). It's the account where the math really works.",
  },
  {
    question: "Is 100K too big for me?",
    answer: "If you can trade a 10K account profitably, you can trade 100K. The percentages are identical. The only difference is the numbers. In fact, 100K is often EASIER because you have more room for drawdown.",
  },
  {
    question: "What if I fail?",
    answer: "You can purchase a reset for $105 to try again with a clean slate. Pro tip: Add a free reset at checkout for just $50 (saves $55). 62% of our funded traders failed at least once before passing.",
  },
  {
    question: "How long does it take to pass?",
    answer: "Average is 14 days for both phases. Our fastest 100K pass: 4 days. There's no time limit, so take as long as you need.",
  },
  {
    question: "How do I get paid?",
    answer: "Request a payout through your dashboard when you're in profit. We process within 24-48 hours via bank transfer (SEPA for EU), crypto (USDT, BTC, ETH), Wise, or Rise.",
  },
  {
    question: "Is this a scam?",
    answer: "We've paid out $207,835+ to 109 traders across 22 countries. Check our Trustpilot (4.8 stars, 63 reviews). We're a registered company based in Austria. Our funded traders post payout proofs in our Discord daily.",
  },
  {
    question: "Can I scale up to 200K later?",
    answer: "Yes! Consistent 100K traders can upgrade at a discounted rate. Prove yourself at 100K first, then scale.",
  },
];

// FAQ Toggle
const expandedFaq = ref<number | null>(0);

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index;
};
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>

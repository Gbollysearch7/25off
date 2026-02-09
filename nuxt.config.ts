// https://nuxt.com/docs/api/configuration/nuxt-config

const cdnURL = process.env.CDN_URL || undefined;

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // ✅ Enable SSR for better Core Web Vitals (FCP, LCP)
  ssr: true,

  // ✅ Experimental optimizations for better performance
  experimental: {
    inlineStyles: true,
    // Reduce hydration payload size
    payloadExtraction: true,
    // Tree-shake client-only code from server bundle
    treeshakeClientOnly: true,
  },

  vite: {
    server: {
      allowedHosts: [".ngrok-free.app", ".ngrok.io"],
    },
    build: {
      cssMinify: true,
      // ✅ Optimize JavaScript bundling for smaller chunks
      rollupOptions: {
        output: {
          // Split vendor chunks for better caching
          manualChunks: {
            // Separate heavy libraries into their own chunks
            'icons': ['@tabler/icons-vue'],
            'vue-vendor': ['vue', 'vue-router'],
          },
        },
      },
      // Reduce bundle size
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,  // Remove console.log in production
          drop_debugger: true,
        },
      },
    },
    // ✅ Optimize dependency pre-bundling
    optimizeDeps: {
      include: ['vue', 'vue-router'],
    },
  },

  runtimeConfig: {
    brevoApiKey: process.env.BREVO_API_KEY,
    brevoEventName: process.env.BREVO_EVENT_NAME || "newsletter_signup",
    competitionsApiUrl:
      process.env.COMPETITIONS_API_URL ||
      "https://tradersyard.com/api/v3.0/competitions/competition-instances",
    public: {
      cdnURL,
      intercomAppId: "ng2gp9e2",
      webTraderUrl: "https://web.agenatrader.com",
      appStoreUrl:
        "https://apps.apple.com/at/app/tradersyard/id1580424931?l=en-GB",
      playStoreUrl:
        "https://play.google.com/store/apps/details?id=com.tradersyard.trading",
      discordUrl: "https://discord.gg/2j2zYnTHYp",
      agenaUrl: "https://agenatrader.com/",
      agenaBrokerUrl: "https://broker.agenatrader.com/",
      youtubeUrl: "https://www.youtube.com/channel/UCx7wewMd7GoEogOdHFSxYMQ",
      instagramUrl: "https://www.instagram.com/tradersyard/",
      xUrl: "https://twitter.com/TradersYard",
      tiktokUrl: "https://www.tiktok.com/@tradersyardeu",
      linkedinUrl: "https://www.linkedin.com/company/tradersyard",
      facebookUrl: "https://www.facebook.com/tradersyard.int",
      supportEmail: "support@tradersyard.com",
      promoVideoUrl:
        "https://www.youtube.com/embed/8W1ikq5JXZU?si=x4a7Ckh3FSzLiazX",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "@nuxt/image",
  ],

  // Image optimization config
  // Note: Hero images use direct Weserv URLs for LCP optimization
  // Other images use NuxtImg with no provider (serves original files)
  image: {
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  app: {
    cdnURL,
    head: {
      // ✅ Preconnect to external domains for faster resource loading
      link: [
        { rel: "icon", type: "image/x-icon", href: "/landing/favicon.ico" },
        // DNS prefetch for deferred third-party scripts (Intercom, Trustpilot)
        { rel: "dns-prefetch", href: "https://widget.intercom.io" },
        { rel: "dns-prefetch", href: "https://js.intercomcdn.com" },
        { rel: "dns-prefetch", href: "https://widget.trustpilot.com" },
        // Preconnect to Google Fonts (Inter font - ~25KB vs 444KB local TTF)
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        // Load Inter font ASYNC (non-blocking) using media="print" trick
        // This prevents the 780ms render-blocking delay
        { 
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          media: "print",
          onload: "this.media='all'"
        },
        // Preconnect to Weserv image CDN (used for LCP image optimization)
        {
          rel: "preconnect",
          href: "https://wsrv.nl",
          crossorigin: "anonymous",
        },
        // Preconnect to critical third-party origins
        {
          rel: "preconnect",
          href: "https://widget.trustpilot.com",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://widget.intercom.io",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://api-iam.intercom.io",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://sst.tradersyard.com",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://tradersyard.com",
          crossorigin: "anonymous",
        },
        // YouTube thumbnail CDN
        {
          rel: "preconnect",
          href: "https://img.youtube.com",
          crossorigin: "anonymous",
        },
        {
          rel: "preconnect",
          href: "https://i.ytimg.com",
          crossorigin: "anonymous",
        },
        // NOTE: Mobile hero image is now inlined as base64 in Hero.vue - no preload needed
        // Preload critical fonts (only ClashDisplay for headings)
        // NOTE: Inter.ttf (444KB) is NOT preloaded - too large, uses font-display: swap instead
        // TODO: Convert Inter.ttf to WOFF2 format to reduce from 444KB to ~50KB
        {
          rel: "preload",
          href: "/landing/fonts/clash-display/ClashDisplay-Semibold.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
      meta: [
        {
          name: "description",
          content:
            "Trade up to $500,000 with no personal risk. weekly payouts, 95% profit splits, and transparent rules. the Yard is where traders prove themselves",
        },
        {
          property: "og:title",
          content: "TradersYard — Trade our capital, not your savings",
        },
        {
          property: "og:description",
          content:
            "Trade up to $500,000 with no personal risk. weekly payouts, 95% profit splits, and transparent rules. the Yard is where traders prove themselves",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://tradersyard.com" },
        {
          property: "og:image",
          content: "https://gift-a-challenge-v2.vercel.app/landing/og-gift-a-challenge.png",
        },
        { property: "og:image:type", content: "image/png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@TradersYard" },
        {
          name: "twitter:title",
          content: "TradersYard — Trade our capital, not your savings",
        },
        {
          name: "twitter:description",
          content:
            "Trade up to $500,000 with no personal risk. weekly payouts, 95% profit splits, and transparent rules. the Yard is where traders prove themselves",
        },
        {
          name: "twitter:image",
          content: "https://gift-a-challenge-v2.vercel.app/landing/og-gift-a-challenge.png",
        },
      ],
      script: [
        // Prevent flash of wrong theme - runs before Vue hydration
        // Default to dark mode unless user explicitly chose light
        {
          innerHTML: `(function(){try{var t=document.cookie.match(/theme=([^;]+)/);var s=t?t[1]:localStorage.getItem('theme');if(s!=='light'){document.documentElement.classList.add('dark')}}catch(e){}})();`,
          tagPosition: "head",
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            if (window.gtmContainerId) {
              gtag('config', window.gtmContainerId);
            }
          `,
        },
        // Trustpilot - defer using requestIdleCallback for minimal main-thread impact
        {
          innerHTML: `(function(){function l(){var s=document.createElement('script');s.async=true;s.src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';document.head.appendChild(s);}if('requestIdleCallback' in window){requestIdleCallback(function(){setTimeout(l,2000)});}else{setTimeout(l,3000);}})();`,
        },
        // Intercom - defer using requestIdleCallback to minimize TBT impact
        {
          innerHTML: `
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "ng2gp9e2",
            };
            (function(){function l(){
              var w=window;var ic=w.Intercom;
              if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}
              else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;
                var s=d.createElement('script');s.async=true;s.src='https://widget.intercom.io/widget/ng2gp9e2';
                var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
              }
            }if('requestIdleCallback' in window){requestIdleCallback(function(){setTimeout(l,4000)});}else{setTimeout(l,5000);}})();
          `,
        },
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://sst.tradersyard.com/1y7luozuoyg.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','7av0u9cw=aWQ9R1RNLVBSTk0yTVM%3D&apiKey=34775de9');`,
          tagPosition: "bodyOpen",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  // ✅ Hybrid rendering: SSR for public pages, SPA for auth routes
  routeRules: {
    "/": { redirect: { to: "/gift-a-challenge", statusCode: 301 } },
    "/gift-a-challenge": { prerender: true },
  },

  // ✅ Nitro server configuration
  nitro: {
    // Enable compression for SSR responses
    compressPublicAssets: true,
    // Minify server bundle
    minify: true,
    // Prerender static pages for zero-JS initial load
    prerender: {
      crawlLinks: true,
      // Don't fail build on 404s - these are external app routes (auth, tournaments)
      // that exist in the main app but not in this landing page project
      failOnError: false,
      // Ignore external app routes that don't exist in this landing page project
      ignore: [
        '/auth/login',
        '/auth/register', 
        '/tournaments',
      ],
    },
  },

  css: ["../assets/css/main.css"],

  i18n: {
    locales: [
      { code: "en", name: "English", file: "en.json", dir: "ltr" },
      { code: "de", name: "Deutsch", file: "de.json", dir: "ltr" },
      { code: "es", name: "Español", file: "es.json", dir: "ltr" },
      { code: "fr", name: "Français", file: "fr.json", dir: "ltr" },
      { code: "pt", name: "Português", file: "pt.json", dir: "ltr" },
      { code: "ar", name: "العربية", file: "ar.json", dir: "rtl" },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: true,
      fallbackLocale: "en",
    },
    // ✅ Lazy load translations to reduce initial bundle
    lazy: true,
  },

  site: {
    url: "https://tradersyard.com",
  },

  sitemap: {
    i18n: true,
  },
});

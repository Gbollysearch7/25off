<template>
  <a
    :href="href"
    class="hero-cta group relative inline-flex items-center justify-center gap-2 px-6 py-3 font-clash font-medium text-lg tracking-wide text-white rounded-xl overflow-visible transition-all duration-300 hover:scale-105"
  >
    <!-- Flame particles - Top edge -->
    <span class="flame flame-top flame-t1"></span>
    <span class="flame flame-top flame-t2"></span>
    <span class="flame flame-top flame-t3"></span>
    <span class="flame flame-top flame-t4"></span>
    <span class="flame flame-top flame-t5"></span>

    <!-- Flame particles - Bottom edge -->
    <span class="flame flame-bottom flame-b1"></span>
    <span class="flame flame-bottom flame-b2"></span>
    <span class="flame flame-bottom flame-b3"></span>
    <span class="flame flame-bottom flame-b4"></span>
    <span class="flame flame-bottom flame-b5"></span>

    <!-- Flame particles - Left edge -->
    <span class="flame flame-left flame-l1"></span>
    <span class="flame flame-left flame-l2"></span>
    <span class="flame flame-left flame-l3"></span>

    <!-- Flame particles - Right edge -->
    <span class="flame flame-right flame-r1"></span>
    <span class="flame flame-right flame-r2"></span>
    <span class="flame flame-right flame-r3"></span>

    <!-- Button background -->
    <span
      class="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 z-10"
    ></span>

    <!-- Inner highlight -->
    <span
      class="absolute inset-[2px] rounded-[10px] bg-gradient-to-b from-white/20 to-transparent z-10"
    ></span>

    <!-- Content -->
    <span class="relative z-20 flex items-center gap-2 whitespace-nowrap">
      <span class="uppercase">{{ text }}</span>
      <svg
        class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    </span>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string;
  text: string;
}>();
</script>

<style scoped>
.hero-cta {
  z-index: 1;
}

/* Base flame styles */
.flame {
  position: absolute;
  background: linear-gradient(to top, #10b981, #34d399, #6ee7b7);
  z-index: 0;
  opacity: 0;
  filter: blur(1px);
}

/* Top edge flames - rise upward */
.flame-top {
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  top: 0;
  animation: flameRiseUp 1.2s ease-out infinite;
}

.flame-t1 {
  width: 12px;
  height: 18px;
  left: 10%;
  animation-delay: 0s;
}
.flame-t2 {
  width: 10px;
  height: 14px;
  left: 30%;
  animation-delay: 0.25s;
}
.flame-t3 {
  width: 14px;
  height: 20px;
  left: 50%;
  animation-delay: 0.5s;
}
.flame-t4 {
  width: 10px;
  height: 16px;
  left: 70%;
  animation-delay: 0.15s;
}
.flame-t5 {
  width: 12px;
  height: 18px;
  left: 85%;
  animation-delay: 0.4s;
}

/* Bottom edge flames - rise downward */
.flame-bottom {
  border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  bottom: 0;
  animation: flameRiseDown 1.2s ease-out infinite;
}

.flame-b1 {
  width: 12px;
  height: 18px;
  left: 15%;
  animation-delay: 0.1s;
}
.flame-b2 {
  width: 10px;
  height: 14px;
  left: 35%;
  animation-delay: 0.35s;
}
.flame-b3 {
  width: 14px;
  height: 20px;
  left: 55%;
  animation-delay: 0.6s;
}
.flame-b4 {
  width: 10px;
  height: 16px;
  left: 75%;
  animation-delay: 0.2s;
}
.flame-b5 {
  width: 12px;
  height: 16px;
  left: 90%;
  animation-delay: 0.45s;
}

/* Left edge flames - rise leftward */
.flame-left {
  border-radius: 60% 40% 40% 60% / 50% 50% 50% 50%;
  left: 0;
  animation: flameRiseLeft 1.2s ease-out infinite;
}

.flame-l1 {
  width: 18px;
  height: 12px;
  top: 20%;
  animation-delay: 0s;
}
.flame-l2 {
  width: 14px;
  height: 10px;
  top: 50%;
  animation-delay: 0.3s;
}
.flame-l3 {
  width: 16px;
  height: 12px;
  top: 75%;
  animation-delay: 0.55s;
}

/* Right edge flames - rise rightward */
.flame-right {
  border-radius: 40% 60% 60% 40% / 50% 50% 50% 50%;
  right: 0;
  animation: flameRiseRight 1.2s ease-out infinite;
}

.flame-r1 {
  width: 18px;
  height: 12px;
  top: 25%;
  animation-delay: 0.15s;
}
.flame-r2 {
  width: 14px;
  height: 10px;
  top: 50%;
  animation-delay: 0.4s;
}
.flame-r3 {
  width: 16px;
  height: 12px;
  top: 70%;
  animation-delay: 0.6s;
}

/* Animations for each direction */
@keyframes flameRiseUp {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  20% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(-25px) scale(0.2);
  }
}

@keyframes flameRiseDown {
  0% {
    opacity: 0;
    transform: translateY(0) scale(0.5);
  }
  20% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateY(25px) scale(0.2);
  }
}

@keyframes flameRiseLeft {
  0% {
    opacity: 0;
    transform: translateX(0) scale(0.5);
  }
  20% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateX(-25px) scale(0.2);
  }
}

@keyframes flameRiseRight {
  0% {
    opacity: 0;
    transform: translateX(0) scale(0.5);
  }
  20% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: translateX(25px) scale(0.2);
  }
}

/* Hover intensification */
.hero-cta:hover .flame-top,
.hero-cta:hover .flame-bottom,
.hero-cta:hover .flame-left,
.hero-cta:hover .flame-right {
  animation-duration: 0.8s;
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .flame {
    display: none;
  }
}
</style>

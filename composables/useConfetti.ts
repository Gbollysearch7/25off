import confetti from 'canvas-confetti'

export const useConfetti = () => {
  const fireConfetti = (element?: HTMLElement) => {
    // Get the element's position if provided, otherwise use window center
    let x = 0.5 // Default to center
    let y = 0.5 // Default to center
    
    if (element) {
      const rect = element.getBoundingClientRect()
      x = (rect.left + rect.width / 2) / window.innerWidth
      y = (rect.top + rect.height / 2) / window.innerHeight
    }

    // Primary confetti burst with brand colors
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x, y },
      colors: [
        '#6366f1', // primary-500
        '#8b5cf6', // purple-500
        '#3b82f6', // blue-500
        '#06b6d4', // cyan-500
        '#10b981', // emerald-500
      ],
      gravity: 0.8,
      scalar: 1.2,
    })

    // Secondary smaller burst for extra celebration
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { x, y },
        colors: [
          '#a855f7', // purple-500
          '#4f46e5', // indigo-600
          '#0ea5e9', // sky-500
        ],
        gravity: 0.6,
        scalar: 0.8,
      })
    }, 200)
  }

  const fireSuccess = (element?: HTMLElement) => {
    fireConfetti(element)
  }

  const fireGiveawayConfetti = (containerElement?: HTMLElement) => {
    // Get the element's position if provided, otherwise use window center
    let x = 0.5 // Default to center
    let y = 0.5 // Default to center
    
    if (containerElement) {
      const rect = containerElement.getBoundingClientRect()
      x = (rect.left + rect.width / 2) / window.innerWidth
      y = (rect.top + rect.height / 2) / window.innerHeight
    }

    // Multiple bursts from different angles with high z-index
    const colors = [
      '#6366f1', // primary-500
      '#8b5cf6', // purple-500
      '#3b82f6', // blue-500
      '#06b6d4', // cyan-500
      '#10b981', // emerald-500
    ]

    // Center burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { x, y },
      colors,
      gravity: 0.8,
      scalar: 1.5,
      zIndex: 10000,
    })

    // Left side burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: x - 0.1, y },
        colors,
        gravity: 0.8,
        scalar: 1.3,
        zIndex: 10000,
      })
    }, 200)

    // Right side burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: x + 0.1, y },
        colors,
        gravity: 0.8,
        scalar: 1.3,
        zIndex: 10000,
      })
    }, 400)

    // Bottom burst going up
    setTimeout(() => {
      confetti({
        particleCount: 80,
        angle: 90,
        spread: 100,
        origin: { x, y: y + 0.2 },
        colors,
        gravity: 0.6,
        scalar: 1.2,
        startVelocity: 45,
        zIndex: 10000,
      })
    }, 600)
  }

  return {
    fireConfetti,
    fireSuccess,
    fireGiveawayConfetti,
  }
}
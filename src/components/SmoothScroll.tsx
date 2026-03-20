'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/animations/gsapAnimations'

// Module-level ref so other components can stop/start Lenis
let lenisInstance: Lenis | null = null

export function getLenis(): Lenis | null {
  return lenisInstance
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })
    lenisRef.current = lenis
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)
    const rafCallback = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(rafCallback)
    gsap.ticker.lagSmoothing(0)

    // Recalculate ScrollTrigger positions after layout settles (~200ms safe delay)
    ScrollTrigger.refresh(true)

    return () => {
      gsap.ticker.remove(rafCallback)
      lenis.destroy()
      lenisRef.current = null
      lenisInstance = null
    }
  }, [])

  return <>{children}</>
}

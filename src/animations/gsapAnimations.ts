'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

// Register all GSAP plugins once
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText)

export { gsap, useGSAP, ScrollTrigger, SplitText }

/**
 * Reusable fade-up animation (replaces old Framer Motion fadeUpVariant).
 * Call inside useGSAP() with a ref to the target element.
 */
export function fadeUp(
  element: gsap.TweenTarget,
  options?: { delay?: number; duration?: number; scrollTrigger?: boolean }
) {
  const { delay = 0, duration = 0.5, scrollTrigger: useST = true } = options ?? {}

  return gsap.fromTo(
    element,
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out',
      ...(useST
        ? {
            scrollTrigger: {
              trigger: element as gsap.DOMTarget,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        : {}),
    }
  )
}

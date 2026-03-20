'use client'

import { useEffect, useRef } from 'react'
import { gsap } from '@/animations/gsapAnimations'

const SVG_WIDTH = 500
const SVG_HEIGHT = 80

export default function InitialLoader() {
  const containerRef = useRef<HTMLDivElement>(null)
  const clipRectRef = useRef<SVGRectElement>(null)
  const tibetanTextRef = useRef<SVGTextElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const clipRect = clipRectRef.current
    const tibetanText = tibetanTextRef.current
    const subtitle = subtitleRef.current
    if (!container || !clipRect || !tibetanText || !subtitle) return

    // Returning visitor — hide immediately
    if (sessionStorage.getItem('visited')) {
      gsap.set(container, { yPercent: -100, visibility: 'hidden' })
      return
    }

    // First visit — lock scroll and play animation
    document.body.style.overflow = 'hidden'

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        document.body.style.overflow = ''
        sessionStorage.setItem('visited', 'true')
        gsap.set(container, { visibility: 'hidden' })
      },
    })

    // Tibetan text clip-path reveals L→R + text fades in
    tl.fromTo(
      clipRect,
      { attr: { width: 0 } },
      { attr: { width: SVG_WIDTH }, duration: 0.6, ease: 'power3.inOut' }
    )
    tl.fromTo(
      tibetanText,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '<'
    )

    // Subtitle fades in
    tl.fromTo(
      subtitle,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      '-=0.3'
    )

    // Hold
    tl.to({}, { duration: 0.3 })

    // Text + subtitle fade out
    tl.to(tibetanText, { opacity: 0, y: -5, duration: 0.4, ease: 'power2.in' })
    tl.to(subtitle, { opacity: 0, y: -5, duration: 0.3, ease: 'power2.in' }, '<')

    // Overlay slides up
    tl.to(container, {
      yPercent: -100,
      duration: 0.6,
      ease: 'power4.inOut',
    })

    return () => {
      tl.kill()
    }
  }, [])

  // Always render — background is visible from first SSR paint, no flash
  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] bg-bg-base flex flex-col items-center justify-center"
    >
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="w-72 sm:w-80 md:w-96"
        aria-label="བཀྲ་ཤིས་བདེ་ལེགས། (Tashi Delek)"
      >
        <defs>
          <clipPath id="loader-tibetan-reveal">
            <rect
              ref={clipRectRef}
              x="0"
              y="0"
              width="0"
              height={SVG_HEIGHT}
            />
          </clipPath>
        </defs>
        <text
          ref={tibetanTextRef}
          clipPath="url(#loader-tibetan-reveal)"
          className="fill-text-primary"
          style={{ fontFamily: 'var(--font-tibetan)', opacity: 0 }}
          fontSize="42"
          textAnchor="middle"
          x={SVG_WIDTH / 2}
          y="55"
        >
          བཀྲ་ཤིས་བདེ་ལེགས།
        </text>
      </svg>

      <p
        ref={subtitleRef}
        className="text-text-secondary text-lg tracking-widest mt-3 font-light"
        style={{ opacity: 0 }}
      >
        Tashi Delek
      </p>
    </div>
  )
}

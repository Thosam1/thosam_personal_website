'use client'

import { createContext, useContext, useCallback, useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { gsap, ScrollTrigger } from '@/animations/gsapAnimations'
import { getLenis } from '@/components/SmoothScroll'

const SVG_WIDTH = 500
const SVG_HEIGHT = 80

// --- Context ---

const PageTransitionContext = createContext<{
  animatePageOut: (href: string) => void
}>({ animatePageOut: () => {} })

export function usePageTransition() {
  return useContext(PageTransitionContext)
}

// --- TransitionLink ---

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export function TransitionLink({ href, children, className, onClick, style }: TransitionLinkProps) {
  const { animatePageOut } = usePageTransition()

  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const isHash = href.startsWith('#')

  if (isExternal || isHash) {
    return (
      <NextLink href={href} className={className} style={style} onClick={onClick}>
        {children}
      </NextLink>
    )
  }

  return (
    <NextLink
      href={href}
      className={className}
      style={style}
      onClick={onClick}
      onNavigate={(e) => {
        e.preventDefault()
        animatePageOut(href)
      }}
    >
      {children}
    </NextLink>
  )
}

// --- Provider + Overlay ---

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const overlayRef = useRef<HTMLDivElement>(null)
  const isTransitioning = useRef(false)

  useEffect(() => {
    if (overlayRef.current) {
      gsap.set(overlayRef.current, { yPercent: -100, pointerEvents: 'none', visibility: 'hidden' })
    }
  }, [])

  const animatePageIn = useCallback(() => {
    const overlay = overlayRef.current
    if (!overlay) return

    const tibetanText = overlay.querySelector('#tibetan-text')
    const clipRect = overlay.querySelector('#clip-rect')
    const subtitle = overlay.querySelector('#subtitle')

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlay, { yPercent: -100, pointerEvents: 'none', visibility: 'hidden', touchAction: '' })
        gsap.set(clipRect, { attr: { width: 0, x: 0 } })
        gsap.set(tibetanText, { opacity: 0, y: 0 })
        gsap.set(subtitle, { opacity: 0, y: 0 })
        isTransitioning.current = false
        document.body.style.overflow = ''
        getLenis()?.start()
        ScrollTrigger.refresh(true)
      },
    })

    // Fade out both text elements together
    tl.to(tibetanText, { opacity: 0, y: -5, duration: 0.4, ease: 'power2.in' })
    tl.to(subtitle, { opacity: 0, y: -5, duration: 0.3, ease: 'power2.in' }, '<')

    // Overlay slides UP
    tl.to(overlay, { yPercent: -100, duration: 0.6, ease: 'power4.inOut' })
  }, [])

  useEffect(() => {
    if (!isTransitioning.current) return
    animatePageIn()
  }, [pathname, animatePageIn])

  const animatePageOut = useCallback(
    (href: string) => {
      if (isTransitioning.current) return
      if (href === pathname) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        router.push(href)
        return
      }

      isTransitioning.current = true
      document.body.style.overflow = 'hidden'
      getLenis()?.stop()

      const overlay = overlayRef.current
      if (!overlay) {
        router.push(href)
        return
      }

      const tibetanText = overlay.querySelector('#tibetan-text')
      const clipRect = overlay.querySelector('#clip-rect')
      const subtitle = overlay.querySelector('#subtitle')

      const tl = gsap.timeline({
        onComplete: () => {
          window.scrollTo(0, 0)
          router.push(href)
        },
      })

      tl.set(overlay, { pointerEvents: 'auto', visibility: 'visible', touchAction: 'none' })

      // 0.6s: Overlay slides DOWN
      tl.fromTo(
        overlay,
        { yPercent: -100 },
        { yPercent: 0, duration: 0.6, ease: 'power4.inOut' }
      )

      // 0.6s: Clip-path reveals L→R + Tibetan text fades in
      tl.fromTo(
        clipRect,
        { attr: { width: 0, x: 0 } },
        { attr: { width: SVG_WIDTH }, duration: 0.6, ease: 'power3.inOut' }
      )
      tl.fromTo(
        tibetanText,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '<'
      )

      // Subtitle fades in (overlapping within text reveal)
      tl.fromTo(
        subtitle,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.3'
      )
    },
    [pathname, router]
  )

  return (
    <PageTransitionContext.Provider value={{ animatePageOut }}>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[55] overscroll-none"
      >
        <div className="absolute inset-0 bg-bg-base flex flex-col items-center justify-center">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-72 sm:w-80 md:w-96"
            aria-label="བཀྲ་ཤིས་བདེ་ལེགས། (Tashi Delek)"
          >
            <defs>
              <clipPath id="tibetan-reveal">
                <rect id="clip-rect" x="0" y="0" width="0" height={SVG_HEIGHT} />
              </clipPath>
            </defs>
            <text
              id="tibetan-text"
              clipPath="url(#tibetan-reveal)"
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
            id="subtitle"
            className="text-text-secondary text-lg tracking-widest mt-3 font-light"
            style={{ opacity: 0 }}
          >
            Tashi Delek
          </p>
        </div>
      </div>

      {children}
    </PageTransitionContext.Provider>
  )
}

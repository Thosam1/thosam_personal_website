'use client'

import NextLink from 'next/link'

interface TransitionLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}

export function TransitionLink({ href, children, className, onClick, style }: TransitionLinkProps) {
  return (
    <NextLink href={href} className={className} style={style} onClick={onClick}>
      {children}
    </NextLink>
  )
}

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

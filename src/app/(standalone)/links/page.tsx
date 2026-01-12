'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { fadeUpVariant } from '@/animations/animations'
import { FULL_NAME, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, YOUTUBE_LINK, EMAIL_LINK } from '@/constants'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiArrowRight,
  FiStar,
  FiMail
} from 'react-icons/fi'

// === DATA STRUCTURES ===

const profileData = {
  name: FULL_NAME,
  avatar: '/home/graduation_pic.webp',
  bio: 'Computer Science Student at ETH Zurich',
}

const socialLinks = [
  { name: 'GitHub', icon: FiGithub, url: GITHUB_LINK },
  { name: 'Instagram', icon: FiInstagram, url: INSTAGRAM_LINK },
  { name: 'LinkedIn', icon: FiLinkedin, url: LINKEDIN_LINK },
  { name: 'YouTube', icon: FiYoutube, url: YOUTUBE_LINK },
]

const links = [
  {
    id: 1,
    title: 'Portfolio',
    subtitle: 'View my work & projects',
    url: '/portfolio',
    icon: null,
    external: false
  },
  {
    id: 2,
    title: 'Blog',
    subtitle: 'Read my latest articles',
    url: '/blog',
    icon: null,
    external: false
  },
  {
    id: 3,
    title: 'GitHub',
    subtitle: 'Check out my code',
    url: GITHUB_LINK,
    icon: FiGithub,
    external: true
  },
  {
    id: 4,
    title: 'Contact Me',
    subtitle: 'Get in touch via email',
    url: EMAIL_LINK,
    icon: FiMail,
    external: true
  },
]

const featuredCard = {
  title: 'Latest Post',
  subtitle: 'Check out my newest article',
  description: 'My journey learning Tibetan and connecting with my heritage',
  url: '/blog',
  icon: FiStar,
}

// === MAIN COMPONENT ===

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container max-w-[600px] mx-auto px-8 pt-16 pb-8">
        <ProfileSection />
        <SocialRow />
        <FeaturedCard />
        <LinksSection />
      </div>
    </main>
  )
}

// === SUB-COMPONENTS ===

const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-8">
      {/* Avatar - NO BADGE */}
      <div className="relative">
        <Image
          src={profileData.avatar}
          alt={profileData.name}
          width={120}
          height={120}
          className="rounded-full border-4 border-gray-100 shadow-md"
          priority
        />
      </div>

      {/* Name - responsive font size */}
      <h1 className="font-semibold text-3xl md:text-4xl text-gray-800">
        {profileData.name}
      </h1>

      {/* Bio */}
      <h2 className="font-light text-lg text-gray-500 leading-loose">
        {profileData.bio}
      </h2>
    </div>
  )
}

const SocialRow = () => {
  return (
    <div className="flex justify-center items-center gap-4 mb-8">
      {socialLinks.map((social) => {
        const IconComponent = social.icon
        return (
          <Link
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-12 h-12 text-center text-gray-500 hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <IconComponent className="text-xl" />
          </Link>
        )
      })}
    </div>
  )
}

const FeaturedCard = () => {
  const IconComponent = featuredCard.icon

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeUpVariant(0.1)}
      className="w-full mb-8"
    >
      <Link href={featuredCard.url}>
        <motion.div
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25
          }}
          className="w-full p-6 rounded-lg border-2 border-gray-200 bg-gradient-to-br from-blue-50 to-white shadow-md hover:shadow-lg"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100">
              <IconComponent className="text-2xl text-blue-600" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">
                {featuredCard.title}
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">
                {featuredCard.subtitle}
              </h3>
              <p className="font-light text-gray-600 leading-relaxed">
                {featuredCard.description}
              </p>
            </div>

            {/* Arrow indicator - rotated 45 degrees */}
            <FiArrowRight className="flex-shrink-0 text-xl text-gray-400 rotate-[-45deg]" />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

const LinksSection = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      {links.map((link, index) => {
        const IconComponent = link.icon

        return (
          <motion.div
            key={link.id}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUpVariant(0.1 * (index + 2))}
            className="w-full"
          >
            <Link
              href={link.url}
              target={link.external ? '_blank' : '_self'}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                className="w-full py-4 px-6 flex items-center justify-between text-left rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:shadow-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  {/* Optional left icon */}
                  {IconComponent && (
                    <IconComponent className="text-xl text-gray-500 flex-shrink-0" />
                  )}
                  <div>
                    <div className="font-semibold text-lg">{link.title}</div>
                    <div className="font-light text-sm text-gray-500">{link.subtitle}</div>
                  </div>
                </div>

                {/* Right arrow - rotated 45 degrees */}
                <FiArrowRight className="text-xl text-gray-400 flex-shrink-0 rotate-[-45deg]" />
              </motion.button>
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}

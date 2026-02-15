import { EMAIL_LINK, FULL_NAME, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, YOUTUBE_LINK } from '@/constants'
import Link from 'next/link'
import React from 'react'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-340 py-10 px-4 sm:px-6 lg:px-8 mx-auto">

      <div className="text-center">

        {/* Divider */}
        <div className="py-4 max-w-sm m-auto">
          <hr className='border-border-default border' />
        </div>

        {/* Socials */}
        <div className="mt-3 space-x-2">


          <Link
            href={YOUTUBE_LINK}
            title="Youtube"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-text-subdued hover:bg-bg-highlight rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-bg-base transition"
          >
            <FiYoutube />
          </Link>
          <Link
            href={INSTAGRAM_LINK}
            title="Instagram"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-text-subdued hover:bg-bg-highlight rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-bg-base transition"
          >
            <FiInstagram />
          </Link>
          <Link
            href={GITHUB_LINK}
            title="Github"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-text-subdued hover:bg-bg-highlight rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-bg-base transition"
          >
            <FiGithub />
          </Link>
          <Link
            href={LINKEDIN_LINK}
            title="Linkedin"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-text-subdued hover:bg-bg-highlight rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-bg-base transition"
          >
            <FiLinkedin />
          </Link>
          <Link
            href={EMAIL_LINK}
            title="Email"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-text-subdued hover:bg-bg-highlight rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-bg-base transition"
          >
            <FiMail />
          </Link>
        </div>

        <div className="mt-3">
          <p className="text-text-subdued">{FULL_NAME}</p>
          <p className="text-text-subdued">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
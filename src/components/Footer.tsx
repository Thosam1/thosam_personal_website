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
          <hr className='border-gray-200 border' />
        </div>

        {/* Socials */}
        <div className="mt-3 space-x-2">


          <Link
            href={YOUTUBE_LINK}
            title="Youtube"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 focus:ring-offset-white transition"
          >
            <FiYoutube />
          </Link>
          <Link
            href={INSTAGRAM_LINK}
            title="Instagram"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 focus:ring-offset-white transition"
          >
            <FiInstagram />
          </Link>
          <Link
            href={GITHUB_LINK}
            title="Github"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 focus:ring-offset-white transition"
          >
            <FiGithub />
          </Link>
          <Link
            href={LINKEDIN_LINK}
            title="Linkedin"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 focus:ring-offset-white transition"
          >
            <FiLinkedin />
          </Link>
          <Link
            href={EMAIL_LINK}
            title="Email"
            target='_blank'
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-hidden focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 focus:ring-offset-white transition"
          >
            <FiMail />
          </Link>
        </div>

        <div className="mt-3">
          <p className="text-gray-500">{FULL_NAME}</p>
          <p className="text-gray-500">© 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
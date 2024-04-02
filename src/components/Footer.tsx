import { EMAIL, FULL_NAME, GITHUB_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, YOUTUBE_LINK } from '@/constants'
import Link from 'next/link'
import React from 'react'
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
  FiMail,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">

      <div className="text-center">

        {/* Divider */}
        <div className="py-4 max-w-sm m-auto">
          <hr className='border-gray-200 border-1 dark:border-white' />
        </div>

        {/* Socials */}
        <div className="mt-3 space-x-2">


          <Link
            href={YOUTUBE_LINK}
            title="Youtube"
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          >
            <FiYoutube />
          </Link>
          <Link
            href={INSTAGRAM_LINK}
            title="Instagram"
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          >
            <FiInstagram />
          </Link>
          <Link
            href={GITHUB_LINK}
            title="Github"
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          >
            <FiGithub />
          </Link>
          <Link
            href={LINKEDIN_LINK}
            title="Linkedin"
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
          >
            <FiLinkedin />
          </Link>
          <Link
            href={EMAIL}
            title="Email"
            className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800"
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
"use client";
import { EMAIL, EMAIL_LINK } from '@/constants'
import Link from 'next/link'
import { Wrapper } from "@/components/Wrapper";
import FadeInAnimation from "@/animations/FadeInAnimation";
import ZoomIntroAnimation from "@/animations/ZoomIntroAnimation";

const Home = () => (
    <main>
        {/*<NextSeo {...SEO}/>*/}
        <Hero />
        {/* <AboutMe /> */}
        {/* <ContactMe /> */}
    </main>
)
export default Home

const Hero = () => (
    // <ZoomIntroAnimation>
    <div className="min-h-screen-md flex items-center justify-center px-8 pt-36 pb-8 lg:py-20">
        <div className="max-w-[75rem] lg:px-8 mx-auto">
            <div className="items-center md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
                <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-2 md:space-y-4">
                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            Hi everyone 👋, I&apos;m Thösam
                        </h2>
                        <p className="text-gray-500">
                            I am a software engineer, creator and student living in Switzerland.
                        </p>
                        <p>
                            On this website, you can find useful resources on topics like : coding, study, life, guitar, books, ... Feel free to check out my Blog if you like reading, otherwise you can check my Projects I have been working on. Or learn more about me.
                        </p>
                    </div>

                    <div className="flex justify-start pb-10 md:pb-0">
                        <Link href="/portfolio" style={{ marginRight: '16px' }}>
                            <button type="button"
                                className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                My Portfolio
                            </button>
                        </Link>
                        <Link href={EMAIL_LINK}>
                            <button type="button"
                                className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Contact me
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center items-center flex-col">
                    <img className="max-h-[35rem]" src="/home/thosam_auth_image.webp"
                        alt="Thösam in Fribourg" />
                    <div className='flex items-right'>
                        <p className='py-3 font-light text-sm text-zinc-600'>Thösam Norlha-Tsang 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // </ZoomIntroAnimation>
)

const AboutMe = () => (
    <Wrapper>
        <FadeInAnimation>
            <h1 className="font-semibold text-2xl">
                About Me
            </h1>
        </FadeInAnimation>
        <FadeInAnimation>
            <p className="mt-2 text-lg text-gray-400 py-2">
                Hi everyone 👋, I&apos;m Thösam Norlha-Tsang. I go to EPFL where I study computer science. My personal website is where I showcase my projects, writing, statistics, experience, and more. Feel free to reach out via email or any social media. or subscribe to my newsletter !
            </p>
        </FadeInAnimation>
    </Wrapper>
)



const ContactMe = () => (
    <Wrapper>
        <div>
            <FadeInAnimation>
                <h1 className="font-semibold text-2xl">
                    Contact Me
                </h1>
            </FadeInAnimation>
            <FadeInAnimation>
                <p className="mt-2 text-lg text-gray-400 py-2">
                    <Link href={EMAIL_LINK}>
                        <button type="button"
                            className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Contact me
                        </button>
                    </Link>
                </p>
            </FadeInAnimation>
        </div>
    </Wrapper>
)
import {EMAIL_LINK} from '@/constants'
import Link from 'next/link'
import Image from 'next/image'
import CustomLink from "@/components/markdown/CustomLink";

// https://github.com/stevenvachon/broken-link-checker

const Home = () => (
    <main>
        <Hero/>
    </main>
)
export default Home

const Hero = () => (
    <div className="min-h-screen-md flex items-center justify-center px-8 pt-36 pb-8 lg:py-8">
        <div className="max-w-300 lg:px-8 mx-auto">
            <div className="items-center md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
                <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-6">
                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            Hi everyone 👋, I&apos;m Thösam
                        </h2>

                        <div className="font-light leading-loose space-y-6">
                            <p>
                                I am a software engineer, content creator and student living in Switzerland.
                            </p>
                            <p>
                                On this website, you can find useful resources on topics like : coding, study, life,
                                guitar,
                                books, ... Feel free to check out my <CustomLink href="/blog">blog</CustomLink> if you
                                like
                                reading, otherwise you can check some of the <CustomLink
                                href="/portfolio">projects</CustomLink> I
                                have been working on !
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start pb-10 md:pb-0">
                        <Link href="/portfolio" style={{marginRight: '16px'}}>
                            <button type="button"
                                    className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-gray-600">
                                My Portfolio
                            </button>
                        </Link>
                        <Link href={EMAIL_LINK}>
                            <button type="button"
                                    className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-gray-600">
                                Contact me
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center md:items-end flex-col">
                    <Image
                        src="/home/dharamsala_pic.webp"
                        alt="Thösam in Dharamsala, India"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 'auto', maxHeight: '35rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'}}
                        priority={true}
                    />
                    <p className='py-3 font-light text-sm text-zinc-600'>Thösam Norlha-Tsang 2024</p>
                </div>
            </div>
        </div>
    </div>
)
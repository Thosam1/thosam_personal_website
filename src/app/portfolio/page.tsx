import {Wrapper} from "@/components/Wrapper";
import skillsList from "../../../data/portfolio/skillsList";
import SkillCard from "@/components/SkillCard";
import projectsList from "../../../data/portfolio/projectsList";
import Link from "next/link";
import {EMAIL_LINK, FULL_NAME, WEBSITE_URL} from '@/constants';
import type {Metadata} from 'next';

const title = 'Portfolio | Thösam Norlha-Tsang'
const description = 'Hello there 👋, this is my portfolio where you can learn more about my work'
const url = `${WEBSITE_URL}/portfolio`;
export const metadata: Metadata = {
    title,
    description,
    verification: {google: process.env.GOOGLE_SEO_CODE},
    alternates: {
        canonical: url,
    },
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url,
        siteName: FULL_NAME,
        title,
        description,
        images: [`${WEBSITE_URL}/website_thumbnail.png`]
    },
    twitter: {
        title,
        description,
        card: 'summary_large_image', // summary_large_image
        images: [`${WEBSITE_URL}/website_thumbnail.png`]
    },
}

export default function Portfolio() {
    return (
        <>
            <Hero/>
            {/*<AboutMe/>*/}
            {/*<TeckStack/>*/}
            <Projects/>
        </>
    )
}

const Hero = () => (
    <div className="min-h-screen-md flex items-center justify-center px-8 pt-36 pb-8 lg:py-20">
        <div className="max-w-[75rem] lg:px-8 mx-auto">
            <div className="items-center md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
                <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-2 md:space-y-4">
                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            Hi everyone 👋, I&apos;m Thösam
                        </h2>
                        <p>
                            I am a software engineer, content creator and student living in Switzerland.
                        </p>
                        <p>
                            This is my portfolio page :)
                        </p>
                    </div>

                    <div className="flex justify-start pb-10 md:pb-0">
                        <Link href="/portfolio" style={{marginRight: '16px'}}>
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
                         alt="Thösam in Fribourg"/>
                    <div className='flex items-right'>
                        <p className='py-3 font-light text-sm text-zinc-600'>Thösam Norlha-Tsang 2023</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

// const AboutMe = () => (
//     <Wrapper>
//         <h1 className="font-semibold text-2xl">
//             About Me
//         </h1>
//         <p className="mt-2 text-lg text-gray-400 py-2">
//             Hi everyone 👋, I&apos;m Thösam Norlha-Tsang. I go to ETHZ where I study computer science. My personal
//             website is where I showcase my projects, writing, statistics, experience, and more. Feel free to reach
//             out via email or any social media. or subscribe to my newsletter !
//         </p>
//     </Wrapper>
// )

const TeckStack = () => (
    <Wrapper>
        <h1 className="font-semibold text-2xl py-6">
            Tech Stack
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
            {
                skillsList().map((item) =>
                    <SkillCard name={item.name} image={item.image} link={item.link} description={item.description}/>
                )
            }
        </div>
    </Wrapper>
)

const Projects = () => (
    <Wrapper>
        <h1 className="font-semibold text-2xl py-6">
            My Projects
        </h1>
        {
            projectsList().map((item) =>
                <>
                    <div className="flex justify-center items-left flex-col py-12">
                        <img className="max-w" src={item.images[0]} alt={item.title}/>

                        <div className="flex flex-col gap-4 text-left">
                            <div className="font-bold text-2xl pt-6">
                                {item.title}
                            </div>
                            <div>
                                {item.description}
                            </div>
                            <div className="flex flex-row gap-5">
                                <Link href={item.demoLink} className="hover:underline">View Demo</Link>
                                <Link href={item.githubLink} className="hover:underline">View Source</Link>
                            </div>
                        </div>
                    </div>
                </>
            )
        }
    </Wrapper>
)
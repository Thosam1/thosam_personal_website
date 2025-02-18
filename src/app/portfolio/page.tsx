import {Wrapper} from '@/components/Wrapper';
import projectsList from '../../../data/portfolio/projectsList';
import Link from 'next/link';
import Image from 'next/image'
import {EMAIL_LINK, FULL_NAME} from '@/constants';
import type {Metadata} from 'next';
import ProjectCard from '@/components/ProjectCard';
import BA1List from '../../../data/portfolio/education/BA1List';
import CourseCard from '@/components/CourseCard';
import BA2List from '../../../data/portfolio/education/BA2List';
import BA3List from '../../../data/portfolio/education/BA3List';
import BA4List from '../../../data/portfolio/education/BA4List';
import BA5List from '../../../data/portfolio/education/BA5List';
import BA6List from '../../../data/portfolio/education/BA6List';
import MA1List from '../../../data/portfolio/education/MA1List';
import MA2List from "../../../data/portfolio/education/MA2List";
import MA3List from "../../../data/portfolio/education/MA3List";
import {adnovumInternship} from "../../../data/portfolio/worksList";
import WorkCard from "@/components/WorkCard";

const title = 'Portfolio | Thösam Norlha-Tsang'
const description = 'Hello there 👋, this is my portfolio where you can learn more about my work'
const url = `${process.env.WEBSITE_URL}/portfolio`;
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
        images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
    },
    twitter: {
        title,
        description,
        card: 'summary_large_image', // summary_large_image
        images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
    },
}

export default function Portfolio() {
    return (
        <>
            <Hero/>
            {/*<AboutMe/>*/}
            {/*<TeckStack/>*/}
            <WorkExperience />
            <Projects/>
            <Education/>
        </>
    )
}

const Hero = () => (
    <div className="min-h-screen-md flex items-center justify-center px-8 pt-36 pb-8 lg:py-8">
        <div className="max-w-[75rem] lg:px-8 mx-auto">
            <div className="items-center md:grid md:grid-cols-2 md:gap-12 xl:gap-32">
                <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-6">
                        <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                            Hi everyone 👋, I&apos;m Thösam
                        </h2>

                        <div className="font-light leading-loose space-y-6">
                            <p>
                                I am a computer science student at ETH Zurich with a profound enthusiasm for science and
                                new
                                technologies. My goal is to leverage my technical skills to make a significant, positive
                                contribution to society. I believe our happiness depends on the well-being of those
                                around
                                us, guiding my life&apos;s goals beyond personal desires.
                            </p>

                            {/*<p>*/}
                            {/*    My interests span across various activities, offering me a well-rounded lifestyle:*/}
                            {/*</p>*/}
                            {/*<ul className="list-disc pl-8">*/}
                            {/*    <li>Avid reader, continuously expanding my knowledge and perspectives.</li>*/}

                            {/*    <li>Martial arts enthusiast, practicing Karate (7 years), Taekwondo + Hapkido (2*/}
                            {/*        years).*/}
                            {/*    </li>*/}
                            {/*    <li>Outdoor enthusiast, enjoying nature through walking and running.</li>*/}

                            {/*    <li>Salsa dancer, practising weekly (1 year). Also enjoying ballroom dances, West Coast*/}
                            {/*        Swing, and*/}
                            {/*        Bachata (1 semester).*/}
                            {/*    </li>*/}

                            {/*    <li>Amateur Guitarist, learning on my own with youtube.</li>*/}
                            {/*</ul>*/}
                            {/*<p>You can checkout my Github, my youtube channel or my blog posts</p>*/}
                            {/*<p>*/}

                            {/*    Dive deeper into my thoughts and ideas by reading my blog posts.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*    For those interested in code and ongoing projects, visit my GitHub profile.*/}
                            {/*</p>*/}

                            <p>
                                I am always open to new opportunities and eager to connect with like-minded
                                individuals.
                                Let&apos;s collaborate and make the world a better place, one step at a time!
                            </p>
                            {/*<p>*/}
                            {/*	I am a software engineer, content creator and student living in Switzerland.*/}
                            {/*</p>*/}
                            {/*<p>*/}
                            {/*	This is my portfolio page :)*/}
                            {/*</p>*/}
                        </div>

                    </div>

                    <div className="flex justify-center md:justify-start pb-10 md:pb-0">
                        <Link href="/portfolio/cv/CV_Developer_Thosam.pdf" download="CV_Developer_Thosam"
                              target="_blank"
                              style={{marginRight: '16px'}}>
                            <button type="button"
                                    className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Download my CV
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

                <div className="flex items-center md:items-end flex-col">
                    <Image
                        src="/home/thosam_auth_image.webp"
                        alt="Thösam in Fribourg"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width: 'auto', maxHeight: '35rem'}}
                        priority={true}
                    />
                    <p className="py-3 font-light text-sm text-zinc-600">Thösam Norlha-Tsang 2023</p>
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

//const TeckStack = () => (
//    <Wrapper>
//        <h1 className="font-semibold text-2xl py-6">
//            Tech Stack
//        </h1>
//        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
//            {
//                skillsList().map((item) =>
//                    <SkillCard name={item.name} image={item.image} link={item.link} key={item.name}
// description={item.description}/> ) } </div> </Wrapper> )

const WorkExperience = () => (
    <Wrapper>
        <h1 className="font-semibold text-2xl py-6 md:text-center md:text-4xl md:py-16">
            Work Experience
        </h1>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-16 lg:w-1/2">
                <WorkCard work={adnovumInternship()} key={adnovumInternship().title}/>
            </div>
        </div>
    </Wrapper>
)

const Projects = () => (
    <Wrapper>
        <h1 className="font-semibold text-2xl py-6 md:text-center md:text-4xl md:py-16">
            My Projects
        </h1>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-16 lg:w-1/2">
                {
                    projectsList().map((item) =>
                        <ProjectCard project={item} key={item.title}/>
                    )
                }
            </div>
        </div>
    </Wrapper>
)

const Education = () => (
    <Wrapper>
        <div className="md:text-center">
            <h1 className="font-semibold text-4xl py-4">
                Education
            </h1>
            <h1 className="font-semibold text-2xl py-4">
                EPFL - Bachelor of Computer Science
            </h1>
            <h1 className="font-semibold text-xl py-6">
                EPFL - Year 1 - Semester 1
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {BA1List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-xl py-6">
                EPFL - Year 1 - Semester 2
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {BA2List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-xl py-6">
                EPFL - Year 2 - Semester 3
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {BA3List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-xl py-6">
                EPFL - Year 2 - Semester 4
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {BA4List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-xl py-6">
                EPFL - Year 3 - Semester 5
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {BA5List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-xl py-6">
                EPFL - Year 3 - Semester 6
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {BA6List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-2xl py-4 pt-12">
                ETHZ - Master of Computer Science
            </h1>
            <h1 className="font-semibold text-xl py-6">
                ETHZ - Year 1 - Semester 1
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {MA1List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>
            {/*<Wrapper>*/}
            {/*<div className=" mx-auto pb-8 px-8">*/}
            {/*    <div className="items-center flex flex-wrap">*/}
            {/*        <div className="w-full ml-auto mr-auto text-left no-underline">*/}
            {/*            <WorkCard work={adnovumInternship()} key={adnovumInternship().title}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
                {/*</Wrapper>*/}

            <h1 className="font-semibold text-xl py-6">
                ETHZ - Year 2 - Semester 2
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {MA2List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>

            <h1 className="font-semibold text-xl py-6">
                ETHZ - Year 2 - Semester 3
            </h1>
            <div className="grid md:grid-cols-2 gap-6 text-left pb-12">
                {MA3List().map((course) => <CourseCard course={course} key={course.code}/>)}
            </div>
        </div>
    </Wrapper>
)

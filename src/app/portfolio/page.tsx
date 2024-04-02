import FadeInAnimation from "@/animations/FadeInAnimation";
import { Wrapper } from "@/components/Wrapper";
import skillsList from "../../../data/portfolio/skillsList";
import SkillCard from "@/components/SkillCard";
import projectsList from "../../../data/portfolio/projectsList";
import Link from "next/link";
import { Divider } from "@/components/Divider";


export default function Portfolio() {
    return (
        <>
            <AboutMe />
            <TeckStack />
            <Projects />
        </>
    )
}

const AboutMe = () => (
    <Wrapper>
        <FadeInAnimation>
            <h1 className="font-semibold text-2xl">
                About Me
            </h1>
        </FadeInAnimation>
        <FadeInAnimation>
            <p className="mt-2 text-lg text-gray-400 py-2">
                Hi everyone 👋, I'm Thösam Norlha-Tsang. I go to EPFL where I study computer science. My personal website is where I showcase my projects, writing, statistics, experience, and more. Feel free to reach out via email or any social media. or subscribe to my newsletter !
            </p>
        </FadeInAnimation>
    </Wrapper>
)

const TeckStack = () => (
    <Wrapper>
        <FadeInAnimation>
            <h1 className="font-semibold text-2xl py-6">
                Tech Stack
            </h1>
        </FadeInAnimation>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
            {
                skillsList().map((item, index) =>
                    <FadeInAnimation key={index}>
                        <SkillCard key={index} name={item.name} image={item.image} link={item.link} description={item.description} />
                    </FadeInAnimation>
                )
            }
        </div>
    </Wrapper>
)

const Projects = () => (
    <Wrapper>
        <FadeInAnimation>
            <h1 className="font-semibold text-2xl py-6">
                My Projects
            </h1>
        </FadeInAnimation>
        {
            projectsList().map((item, index) =>
                <FadeInAnimation key={index}>
                    <Divider />
                    <div className="flex justify-center items-center flex-col py-12">
                        <img className="rounded-lg max-w" src={item.images[0]} alt={item.title} />

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
                </FadeInAnimation>
            )
        }
    </Wrapper>
)
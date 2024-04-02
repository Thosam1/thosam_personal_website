import FadeInAnimation from "@/animations/FadeInAnimation";
import { Wrapper } from "@/components/Wrapper";

export default function Portfolio() {
    return (
        <>
        <AboutMe /> 
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
    <></>
)
import { CourseType, ICourse } from './interfaces';

export default function BA4List(): ICourse[] {
    return [
        {
            name: "Parallelism and concurrency",
            code: "CS-206",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/parallelism-and-concurrency-CS-206",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Probabilities and statistics",
            code: "MATH-232",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/probabilities-and-statistics-MATH-232",
            credits: 6,
            type: CourseType.MATH,
        },
        {
            name: "Computer architecture II",
            code: "CS-209",
            link: "https://edu.epfl.ch/coursebook/en/computer-architecture-ii-CS-209",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Theory of computation",
            code: "CS-251",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/theory-of-computation-CS-251",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "System oriented programming",
            code: "CS-207",
            link: "https://edu.epfl.ch/studyplan/en/bachelor/computer-science/coursebook/system-oriented-programming-CS-207",
            credits: 3,
            type: CourseType.CS,
        },
        {
            name: "System programming project",
            code: "CS-212",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/projet-programmation-systeme-CS-212",
            credits: 2,
            type: CourseType.CS,
        },
        {
            name: "Sustainable development A",
            code: "HUM-226",
            link: "https://edu.epfl.ch/studyplan/en/bachelor/humanities-and-social-sciences-program/coursebook/sustainable-development-a-HUM-226",
            credits: 2,
            type: CourseType.HUM,
        },
    ];
}

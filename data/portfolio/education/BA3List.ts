import { CourseType, ICourse } from './interfaces';

export default function BA3List(): ICourse[] {
    return [
        {
            name: "Algorithms",
            code: "CS-250",
            link: "https://edu.epfl.ch/coursebook/en/algorithms-CS-250",
            credits: 6,
            type: CourseType.CS,
        },
        {
            name: "Functional programming",
            code: "CS-210",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/functional-programming-CS-210",
            credits: 5,
            type: CourseType.CS,
        },
        {
            name: "Introduction to machine learning",
            code: "CS-233(a)",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/introduction-to-machine-learning-ba3-CS-233-A",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Numerical methods for visual computing and ML",
            code: "CS-328",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/numerical-methods-for-visual-computing-and-ml-CS-328",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Computer architecture I",
            code: "CS-208",
            link: "https://edu.epfl.ch/coursebook/en/computer-architecture-i-CS-208",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Computer networks",
            code: "COM-208",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/computer-networks-COM-208",
            credits: 5,
            type: CourseType.COM,
        },
        {
            name: "General physics: electromagnetism",
            code: "PHYS-114",
            link: "https://edu.epfl.ch/studyplan/fr/bachelor/informatique/coursebook/general-physics-electromagnetism-PHYS-114",
            credits: 4,
            type: CourseType.PHYS,
        },
        {
            name: "Analysis III",
            code: "MATH-203(b)",
            link: "https://edu.epfl.ch/studyplan/en/bachelor/computer-science/coursebook/analysis-iii-MATH-203-B",
            credits: 4,
            type: CourseType.MATH,
        },
        {
            name: "Evolutionary psychology",
            code: "HUM-275",
            link: "https://edu.epfl.ch/studyplan/en/bachelor/humanities-and-social-sciences-program/coursebook/evolutionary-psychology-HUM-275",
            credits: 2,
            type: CourseType.HUM,
        },
    ];
}

import { CourseType, ICourse } from './interfaces';

export default function BA1List(): ICourse[] {
    return [
        {
            name: "Advanced information, computation, communication I",
            code: "CS-101",
            link: "https://edu.epfl.ch/coursebook/fr/advanced-information-computation-communication-i-CS-101",
            credits: 7,
            type: CourseType.CS,
        },
        {
            name: "Introduction to programming",
            code: "CS-107",
            link: "https://edu.epfl.ch/coursebook/en/introduction-to-programming-CS-107",
            credits: 5,
            type: CourseType.CS,
        },
        {
            name: "Linear Algebra",
            code: "MATH-111(en)",
            link: "https://edu.epfl.ch/coursebook/en/linear-algebra-english-MATH-111-EN",
            credits: 6,
            type: CourseType.MATH,
        },
        {
            name: "Analysis I",
            code: "MATH-101(en)",
            link: "https://edu.epfl.ch/coursebook/en/analysis-i-english-MATH-101-EN",
            credits: 6,
            type: CourseType.MATH,
        },
        {
            name: "General Physics: Classical Mechanics",
            code: "PHYS-101(en)",
            link: "https://edu.epfl.ch/coursebook/en/general-physics-mechanics-english-PHYS-101-EN",
            credits: 6,
            type: CourseType.PHYS,
        },
    ];
}

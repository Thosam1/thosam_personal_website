import { CourseType, ICourse } from './interfaces';

export default function BA2List(): ICourse[] {
    return [
        {
            name: "Practice of object-oriented programming",
            code: "CS-108",
            link: "https://edu.epfl.ch/coursebook/en/practice-of-object-oriented-programming-CS-108",
            credits: 9,
            type: CourseType.CS,
        },
        {
            name: "Digital system design",
            code: "CS-173",
            link: "https://edu.epfl.ch/coursebook/en/digital-system-design-CS-173",
            credits: 6,
            type: CourseType.CS,
        },
        {
            name: "Advanced information, computation, communication II",
            code: "COM-102",
            link: "https://edu.epfl.ch/coursebook/en/advanced-information-computation-communication-ii-COM-102",
            credits: 7,
            type: CourseType.COM,
        },
        {
            name: "Analysis II",
            code: "MATH-106(en)",
            link: "https://edu.epfl.ch/coursebook/en/analysis-ii-english-MATH-106-EN",
            credits: 6,
            type: CourseType.MATH,
        },
        {
            name: "Global issues: health A",
            code: "HUM-125(a)",
            link: "https://edu.epfl.ch/coursebook/en/global-issues-health-a-HUM-125-A",
            credits: 2,
            type: CourseType.HUM,
        },
    ];
}

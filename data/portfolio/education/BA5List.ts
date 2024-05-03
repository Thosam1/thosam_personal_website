import { CourseType, ICourse } from './interfaces';

export default function BA5List(): ICourse[] {
    return [
        {
            name: "Software Engineering",
            code: "CS-305",
            link: "https://edu.epfl.ch/coursebook/en/software-engineering-CS-305",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Computer Security",
            code: "COM-301",
            link: "https://edu.epfl.ch/coursebook/en/computer-security-COM-301",
            credits: 4,
            type: CourseType.COM,
        },
        {
            name: "Stochastic models in communication",
            code: "COM-300",
            link: "https://edu.epfl.ch/coursebook/en/stochastic-models-in-communication-COM-300",
            credits: 6,
            type: CourseType.COM,
        },
        {
            name: "Quantum information processing",
            code: "COM-309",
            link: "https://edu.epfl.ch/coursebook/en/quantum-information-processing-COM-309",
            credits: 4,
            type: CourseType.COM,
        },
        {
            name: "Neuroscience",
            code: "BIO-311",
            link: "https://edu.epfl.ch/coursebook/en/neuroscience-BIO-311",
            credits: 4,
            type: CourseType.BIO,
        },
        {
            name: "Introduction to multiprocessor architecture",
            code: "CS-307",
            link: "https://edu.epfl.ch/coursebook/en/introduction-to-multiprocessor-architecture-CS-307",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Introduction to operating systems",
            code: "CS-323",
            link: "https://edu.epfl.ch/coursebook/en/introduction-to-operating-systems-CS-323",
            credits: 5,
            type: CourseType.CS,
        },
        {
            name: "Foundations in financial economics",
            code: "MGT-301",
            link: "https://edu.epfl.ch/coursebook/en/foundations-in-financial-economics-MGT-301",
            credits: 2,
            type: CourseType.MGT,
        },
        {
            name: "General Chemistry",
            code: "CH-160(b)",
            link: "https://edu.epfl.ch/coursebook/en/general-chemistry-CH-160-B",
            credits: 3,
            type: CourseType.CH,
        },
    ];
}

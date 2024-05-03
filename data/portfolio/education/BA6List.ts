import { CourseType, ICourse } from './interfaces';

export default function BA6List(): ICourse[] {
    return [
        {
            name: "Software Development Project",
            code: "CS-306",
            link: "https://edu.epfl.ch/coursebook/en/software-development-project-CS-306",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Introduction to Database systems",
            code: "CS-322",
            link: "https://edu.epfl.ch/coursebook/en/introduction-to-database-systems-CS-322",
            credits: 4,
            type: CourseType.CS,
        },
        {
            name: "Internet Analytics",
            code: "COM-308",
            link: "https://edu.epfl.ch/coursebook/en/internet-analytics-COM-308",
            credits: 5,
            type: CourseType.COM,
        },
        {
            name: "Introduction to Computer Graphics",
            code: "CS-341",
            link: "https://edu.epfl.ch/coursebook/en/introduction-to-computer-graphics-CS-341",
            credits: 6,
            type: CourseType.CS,
        },
        {
            name: "Bachelor Project: Bandit Algorithms For Recommendation Systems",
            code: "CS-398",
            link: "https://edu.epfl.ch/coursebook/en/project-in-computer-science-i-CS-398",
            credits: 8,
            type: CourseType.CS,
        },
        {
            name: "Human Computer Interaction",
            code: "CS-213",
            link: "https://edu.epfl.ch/coursebook/en/human-computer-interaction-CS-213",
            credits: 5,
            type: CourseType.CS,
        },
        {
            name: "Digital Humanities",
            code: "HUM-369",
            link: "https://edu.epfl.ch/coursebook/en/digital-humanities-HUM-369",
            credits: 2,
            type: CourseType.HUM,
        },
    ];
}

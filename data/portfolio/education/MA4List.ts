import { CourseType, ICourse } from './interfaces';

export default function MA4List(): ICourse[] {
    return [
        {
            name: "Algorithms Lab",
            code: "263-0006-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=172035&semkez=2023W&ansicht=LEHRVERANSTALTUNGEN&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
        {
            name: "Advanced Machine Learning",
            code: "252-0535-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=181977&lang=en",
            credits: 10,
            type: CourseType.CS,
        },
        {
            name: "Reliable and Trustworthy Artificial Intelligence",
            code: "263-2400-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lang=en&lerneinheitId=163199&semkez=2022W&ansicht=LEHRVERANSTALTUNGEN&",
            credits: 6,
            type: CourseType.CS,
        },
        {
            name: "Practical work in Data Science",
            code: "263-0650-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=194359&semkez=2025W&ansicht=LEHRVERANSTALTUNGEN&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
        {
            name: "Seminar in Data Science",
            code: "252-0535-00",
            link: "",
            credits: 2,
            type: CourseType.CS,
        },
    ];
}

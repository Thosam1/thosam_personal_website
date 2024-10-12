import { CourseType, ICourse } from './interfaces';

export default function MA2List(): ICourse[] {
    return [
        {
            name: "Advanced Machine Learning",
            code: "252-0535-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=181977&lang=en",
            credits: 10,
            type: CourseType.CS,
        },
        {
            name: "Probabilistic Artificial Intelligence",
            code: "263-5210-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=183167&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
        {
            name: "Artificial Intelligence in Education",
            code: "263-5005-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=182452&lang=en",
            credits: 3,
            type: CourseType.CS,
        },
        {
            name: "Technology and Entrepreneurship",
            code: "263-5058-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=186440&lang=en",
            credits: 3,
            type: CourseType.MGT,
        },
        {
            name: "Introduction to Marketing",
            code: "363-0403-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=181983&lang=en",
            credits: 3,
            type: CourseType.MGT,
        },
        {
            name: "Principles of Macroeconomics",
            code: "363-0565-00",
            link: "https://www.vorlesungen.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2024W&ansicht=KATALOGDATEN&lerneinheitId=182246&lang=en",
            credits: 3,
            type: CourseType.MGT,
        },
    ];
}

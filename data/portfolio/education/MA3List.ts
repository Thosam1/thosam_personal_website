import { CourseType, ICourse } from './interfaces';

export default function MA2List(): ICourse[] {
    return [
        {
            name: "Machine Learning for Health Care",
            code: "261-5120-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=188696&lang=en",
            credits: 5,
            type: CourseType.CS,
        },
        {
            name: "Computational Intelligence Lab",
            code: "263-0008-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=187186&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
        {
            name: "Machine Perception",
            code: "263-3710-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=188863&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
        // {
        //     name: "Interactive Machine Learning: Visualization & Explainability",
        //     code: "263-5052-00",
        //     link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=187924&lang=en",
        //     credits: 5,
        //     type: CourseType.CS,
        // },
        {
            name: "Large Language Models",
            code: "263-5354-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=188463&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
        {
            name: "Human Resource Management: Leading Teams",
            code: "363-0302-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=187840&lang=en",
            credits: 3,
            type: CourseType.MGT,
        },
        {
            name: "Project Management",
            code: "363-0764-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=187782&lang=en",
            credits: 2,
            type: CourseType.MGT,
        },
        // {
        //     name: "Introduction to Finance",
        //     code: "363-0560-00",
        //     link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=188670&lang=en",
        //     credits: 3,
        //     type: CourseType.MGT,
        // },
        // {
        //     name: "Entrepreneurship",
        //     code: "363-1077-00",
        //     link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=188341&lang=en",
        //     credits: 3,
        //     type: CourseType.MGT,
        // },
        // {
        //     name: "Decentralized Finance",
        //     code: "363-1153-00",
        //     link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?semkez=2025S&ansicht=KATALOGDATEN&lerneinheitId=188887&lang=en",
        //     credits: 3,
        //     type: CourseType.MGT,
        // },
    ];
}

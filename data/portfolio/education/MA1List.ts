import { CourseType, ICourse } from './interfaces';

export default function MA1List(): ICourse[] {
    return [
        {
            name: "Big Data",
            code: "263-3010-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=172464&semkez=2023W&ansicht=LEHRVERANSTALTUNGEN&lang=en",
            credits: 10,
            type: CourseType.CS,
        },
        {
            name: "Network Security",
            code: "263-4640-00",
            link: "https://www.vvz.ethz.ch/Vorlesungsverzeichnis/lerneinheit.view?lerneinheitId=173649&semkez=2023W&ansicht=LEHRVERANSTALTUNGEN&lang=en",
            credits: 8,
            type: CourseType.CS,
        },
    ];
}

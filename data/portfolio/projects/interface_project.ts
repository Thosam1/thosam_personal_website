export default interface IProject {
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    pdfLink?: string;
    tags: string[];
    images: string[];
}
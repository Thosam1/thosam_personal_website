export function amperecloud(): IWork {
    return {
        title: 'Software Engineer At Amperecloud',
        description: 'Worked 6 months as a software engineer in Berlin, Germany. Building microservices to accelerate the transition to renewable energies.',
        dates: 'February 2026 – July 2026',
        blogLink: '',
        recommendationLink: '',
        tags: [
            'Typescript',
            'WebDev'
        ],
        images: [
            '/portfolio/internships/amperecloud.png',
        ]
    };
}

export function adnovumInternship(): IWork {
    return {
        title: 'Software Engineer At Adnovum',
        description: '6 month internship at Adnovum in software engineering in Zurich, Switzerland. Working with spring boot microservices using agile software development methodology.',
        dates: 'February 2024 – July 2024',
        blogLink: '',
        recommendationLink: '/portfolio/internships/adnovum_exit_recommendation_letter.pdf',
        tags: [
            'Java',
            'WebDev'
        ],
        images: [
            '/portfolio/internships/adnovum.jpg',
        ]
    };
}

export function privateTutor(): IWork {
    return {
        title: 'Private tutor',
        dates: 'January 2015 – May 2023',
        description: 'For over eight years, I had the privilege of tutoring more than 20 students in mathematics, physics, and sciences. What began as a simple way to help classmates grew into a meaningful part of my life. ' +
            'I shared my passion for these subjects and watched my students gain confidence, clarity and curiosity. My approach was always guided by patience, compassion and this genuine wish to see them succeed, not just at school but also in life.',
        blogLink: '',
        recommendationLink: '',
        tags: [],
        images: [
            '/portfolio/internships/tutoring.png',
        ]
    };
}

export interface IWork {
    title: string;
    dates: string;
    description: string;
    blogLink: string;
    recommendationLink: string;
    tags: string[];
    images: string[];
}
export function adnovumInternship(): IWork {
    return {
        title: 'Software Engineer At Adnovum',
        description: '6 month internship at Adnovum in software engineering in Zurich, Switzerland. Working with spring boot microservices using agile software development methodology.',
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

export interface IWork {
    title: string;
    description: string;
    blogLink: string;
    recommendationLink: string;
    tags: string[];
    images: string[];
}
export default function projectsList(): IProject[] {
    return [
        {
            title: 'ConnectOut',
            description: 'Connect Out is a social activity platform that enables users to join and discover new activities based on their interests. It fosters social interaction and community engagement, making it easier to meet like-minded people and discover new hobbies. ',
            githubLink: 'https://github.com/ConnectOut-sdp/sdp2023',
            demoLink: 'https://www.youtube.com/watch?v=Oil0FFvZltE',
            tags: [
                'Mobile',
                'Android',
                'Java'
            ],
            images: [
                '/portfolio/projects/connect_out.png'
            ]
        },
        {
            title: 'Bandits Algorithms For Recommendation Systems',
            description: 'Bachelor/research project in the field of recommendation systems.',
            githubLink: 'https://github.com/Thosam1/BachelorProject',
            demoLink: '',
            tags: [
                'Python',
                'Data Science',
                'Research'
            ],
            images: [
                '/portfolio/projects/bachelor_project.png'
            ]
        },
        {
            title: 'UniSublet',
            description: 'A mobile application built using react native with expo cli and typescript, coupled with a backend' +
                ' in node and mongoDb. The mission of this project is to allow students to sublet their rooms during holidays.',
            githubLink: 'https://github.com/Thosam1/UniHousing',
            demoLink: '',
            tags: [
                'React Native',
                'Typescript',
                'Expo',
                'NodeJS',
                'MongoDB'
            ],
            images: [
                '/portfolio/projects/UniHousing_mockup.png',
            ]
        },
        {
            title: 'Personal Web App 🔥',
            description: 'Past personal website made using Next.js and Chakra UI, merged my portfolio and my blog in a single' +
                ' place.',
            githubLink: 'https://github.com/Thosam1/thosam_personal_blog',
            demoLink: 'https://thosam.vercel.app/',
            tags: [
                'WebDev',
                'NextJs'
            ],
            images: [
                '/portfolio/projects/bg_personal_website.png'
            ]
        },
        {
            title: 'TalkZone - for university students',
            description: 'Coded a social network application (with a friend) for our own and neighboring universities. Allowing students to express themselves about courses and campus life. Frontend coded in VueJS and backend in Java Spring.',
            githubLink: 'https://github.com/talkzone-ch',
            demoLink: 'https://talkzone.ch/',
            tags: [
                'WebDev',
                'VueJs',
                'Java Spring'
            ],
            images: [
                '/portfolio/projects/talkzone_image.png'
            ]
        },
        {
            title: 'Water Simulation',
            description: 'A project coded from scratch for our Introduction to Computer Graphics class that simulates water using ThreeJS.',
            githubLink: 'https://github.com/MikaelKalajdzic/watersim/tree/master',
            demoLink: 'https://www.youtube.com/watch?v=EFDqDePbHUw',
            tags: [
                'ThreeJS',
                'GLSL',
                'Javascript'
            ],
            images: [
                '/portfolio/projects/water_simulation.png',
            ]
        },
        {
            title: 'Tchu',
            description: 'A project made during my first year as a CS student (over 200h). It is a game played by 2 players through a network connection.',
            githubLink: 'https://github.com/Thosam1/tCHu_projetBA2',
            demoLink: '',
            tags: [
                'Java',
            ],
            images: [
                '/portfolio/projects/tchu_image.png',
            ]
        },
        {
            title: 'Pacman - Save PacWoman',
            description: 'Pacman variant made during my first year as a CS student at EPFL, it has 3 levels and the difficulty is insanely hard.',
            githubLink: 'https://github.com/Thosam1/Pacman_MP2/tree/main/CS07-MP2-2020-V2',
            demoLink: '',
            tags: [
                'Java',
            ],
            images: [
                '/portfolio/projects/pacman_lv2.png',
            ]
        },
        {
            title: 'E-commerce web app',
            description: 'E-commerce platform made using React and the main goal was to learn about React and GraphQL. Supports stripe payments, Firebase Auth and Firestore.',
            githubLink: 'https://github.com/Thosam1/megaBigE_commerceWebApp',
            demoLink: '',
            tags: [
                'WebDev',
                'React'
            ],
            images: [
                '/portfolio/projects/ecommerce_image.png',
            ]
        },
        {
            title: 'First Portfolio Website',
            description: 'First try to make a portfolio made using React, learned about Sanity as CMS, framer-motion for animations and page wrappers.',
            githubLink: 'https://github.com/Thosam1/thosam_portfolio',
            demoLink: 'https://thosam-norlha-portfolio.netlify.app/',
            tags: [
                'WebDev',
                'React'
            ],
            images: [
                '/portfolio/projects/portfolio_image.png',
            ]
        },
        {
            title: 'First Blog Website',
            description: 'First try to make a blog made using Next.js and Tailwind CSS, learned about graphCMS, graphQL, light/dark themes, graphQL. But had to upload images every time to graphCMS (time consuming) and as a first try, the structure/code were bad, so I made the current personal website.',
            githubLink: 'https://github.com/Thosam1/thosam_blog',
            demoLink: 'https://thosam-blog.vercel.app/',
            tags: [
                'WebDev',
                'NextJs'
            ],
            images: [
                '/portfolio/projects/first_blog.png',
            ]
        },
    ];
}

export interface IProject {
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
    tags: string[];
    images: string[];
}
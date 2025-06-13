import IProject from "./interface_project";

export default function softwareProjectsList(): IProject[] {
    return [
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

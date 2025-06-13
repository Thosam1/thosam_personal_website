import IProject from "./interface_project";

export default function softwareProjectsList(): IProject[] {
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
    ];
}

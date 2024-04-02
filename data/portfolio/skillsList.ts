export default function skillsList(): Skill[] {
    return [
        {
          name: 'Java',
          description: 'Desktop Applications, Backend Development, Android Development',
          link: 'https://www.java.com/en/',
          type: 'development',
          image: '/portfolio/skills/java.png'
        },
        {
          name: 'Python',
          description: 'Data Science, Research',
          link: 'https://www.python.org/',
          type: 'development',
          image: '/portfolio/skills/python.png'
        },
        {
          name: 'Javascript',
          description: 'Web development (full-stack), Mobile development (full-stack)',
          link: '',
          type: 'development',
          image: '/portfolio/skills/javascript.png'
        },
        {
          name: 'Typescript',
          description: 'Web development (full-stack), Mobile development (full-stack)',
          link: '',
          type: 'development',
          image: '/portfolio/skills/typescript.png'
        },
        {
          name: 'React',
          description: 'Web development (front-end)',
          link: 'https://reactjs.org/',
          type: 'development',
          image: '/portfolio/skills/react.png'
        },
        {
          name: 'React Native',
          description: 'Mobile Development (front-end)',
          link: 'https://reactnative.dev',
          type: 'development',
          image: '/portfolio/skills/react.png'
        },
        {
          name: 'Redux',
          description: 'Web development (front-end)',
          link: 'https://reactjs.org/',
          type: 'development',
          image: '/portfolio/skills/redux.png'
        },
        {
          name: 'Vue',
          description: 'Web development (front-end)',
          link: 'https://vuejs.org/',
          type: 'development',
          image: '/portfolio/skills/vue.png'
        },
        {
          name: 'MongoDB',
          description: 'Web development (backend)',
          link: '',
          type: 'development',
          image: '/portfolio/skills/mongo_db.png'
        },
        {
          name: 'SQL',
          description: 'Web development (backend)',
          link: '',
          type: 'development',
          image: '/portfolio/skills/sql.png'
        },
        {
          name: 'Node',
          description: 'Web development (backend), using typescript',
          link: '',
          type: 'development',
          image: '/portfolio/skills/node_js.png'
        },
        {
          name: 'Scala',
          description: 'Functional Programming, Parallelism, Concurrency',
          link: 'https://www.python.org/',
          type: 'development',
          image: '/portfolio/skills/scala.png'
        },
        {
          name: 'Git',
          description: 'Source Code Management',
          link: 'https://www.python.org/',
          type: 'development',
          image: '/portfolio/skills/git.png'
        },
        {
          name: 'C',
          description: 'Structured Programming Language',
          link: 'https://www.cprogramming.com/',
          type: 'development',
          image: '/portfolio/skills/c.png'
        },
        {
          name: 'Assembly',
          description: 'NIOS II, Computer Architecture',
          link: 'https://www.python.org/',
          type: 'hardware',
          image: '/portfolio/skills/assembly.png'
        },
        {
          name: 'VHDL',
          description: 'Computer Architecture, Hardware Description Language',
          link: 'https://vhdlguide.readthedocs.io/en/latest/',
          type: 'hardware',
          image: '/portfolio/skills/vhdl.png'
        },
      ] as Skill[];
}

interface Skill {
    name: string;
    description: string;
    link: string;
    type: 'development' | 'hardware';
    image: string;
}

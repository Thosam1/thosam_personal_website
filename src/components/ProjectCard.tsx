'use client'
import CustomLink from '@/components/markdown/CustomLink';
import { IProject } from '../../data/portfolio/projectsList'; // Assuming CustomLink is a custom component you've defined
import { motion } from 'framer-motion';

export default function ProjectCard({ project }: { project: IProject }) {
	return (
		<motion.div
			className="max-w-full rounded overflow-hidden shadow-md"
			whileHover={{ y: -4 }}
		>
			<img className="w-full" src={project.images[0]} alt={project.title}/>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{project.title}</div>
				<p className="text-gray-700 text-base">{project.description}</p>
				<div className="pt-4 flex flex-row gap-5">
					{project.demoLink !== '' &&
						<CustomLink href={project.demoLink}>View Demo</CustomLink>
					}
					<CustomLink href={project.githubLink}>View Source</CustomLink>
				</div>
				{/*<div className="pt-4 pb-2">*/}
				{/*    {project.tags.map((tag) =>*/}
				{/*        <div key={project.title + tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {tag}</div>*/}
				{/*    )}*/}
				{/*</div>*/}
			</div>
		</motion.div>
	);
};

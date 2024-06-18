'use client'
import Image from 'next/image'
import CustomLink from '@/components/markdown/CustomLink';
import { IProject } from '../../data/portfolio/projectsList'; // Assuming CustomLink is a custom component you've defined
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/animations/animations';

export default function ProjectCard({ project }: Readonly<{ project: IProject }>) {
	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			variants={fadeUpVariant(0.2)}
		>
			<motion.div
				className="max-w-full rounded overflow-hidden shadow-md"
				whileHover={{ y: -4 }}
			>
				<Image
					src={project.images[0]}
					alt={project.title}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }} // optional
				/>
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
		</motion.div>
	);
};

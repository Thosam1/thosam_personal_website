'use client'
import Image from 'next/image'
import CustomLink from '@/components/markdown/CustomLink';
import IProject from '../../data/portfolio/projects/interface_project';
import { useRef, useEffect } from 'react';
import { gsap } from '@/animations/gsapAnimations';

export default function ProjectCard({ project }: Readonly<{ project: IProject }>) {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					gsap.fromTo(el,
						{ y: 20, opacity: 0 },
						{ y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
					)
					observer.disconnect()
				}
			},
			{ threshold: 0.1 }
		)

		observer.observe(el)
		return () => observer.disconnect()
	}, [])

	return (
		<div ref={ref} style={{ opacity: 0 }}>
			<div
				className="max-w-full rounded-xs overflow-hidden shadow-md bg-bg-elevated transition-transform duration-200 hover:-translate-y-1"
			>
				<Image
					src={project.images[0]}
					alt={project.title}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
				/>
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2 text-text-primary">{project.title}</div>
					<p className="text-text-secondary font-light leading-loose">{project.description}</p>
					<div className="pt-4 flex flex-row gap-5">
						{project.demoLink !== '' &&
							<CustomLink href={project.demoLink}>View Demo</CustomLink>
						}
						{project.pdfLink &&
							<CustomLink href={project.pdfLink}>Download PDF</CustomLink>
						}
						<CustomLink href={project.githubLink}>View Source</CustomLink>
					</div>
				</div>
			</div>
		</div>
	);
};

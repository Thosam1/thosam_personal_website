'use client'
import React, { useRef } from 'react';
import { CourseType, ICourse } from '../../data/portfolio/education/interfaces';
import CustomLink from '@/components/markdown/CustomLink';
import { useGSAP, fadeUp } from '@/animations/gsapAnimations';

const getBorderColor = (type: CourseType): string => {
	switch (type) {
		case CourseType.CS:
			return 'border-l-green-300';
		case CourseType.COM:
			return 'border-l-blue-300';
		case CourseType.MATH:
			return 'border-l-purple-300';
		case CourseType.PHYS:
			return 'border-l-yellow-300';
		case CourseType.BIO:
			return 'border-l-teal-300';
		case CourseType.CH:
			return 'border-l-pink-300';
		case CourseType.MGT:
			return 'border-l-purple-300';
		case CourseType.HUM:
			return 'border-l-red-300';
		default:
			return 'border-l-gray-500';
	}
};

export default function CourseCard({ course, index = 0 }: Readonly<{ course: ICourse; index?: number }>) {
	const ref = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (ref.current) fadeUp(ref.current, { delay: 0.1 + index * 0.08 })
	}, { scope: ref })

	return (
		<div ref={ref} style={{ opacity: 0 }}>
			<div
				className={`max-w-(--breakpoint-sm) items-center border rounded-xl p-4 border-l-8 ${getBorderColor(
					course.type)} shadow-md bg-bg-elevated transition-transform duration-200 hover:-translate-y-1`}
			>
				<div className="flex flex-col w-full">
					<p className="font-semibold text-text-secondary">{course.name}</p>
					<div className="flex flex-row justify-between">
						<p className="text-text-subdued">{course.code} · {course.credits} credits</p>
						<CustomLink href={course.link}>Course Link</CustomLink>
					</div>
				</div>
			</div>
		</div>
	);
};

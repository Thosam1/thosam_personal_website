'use client'
import React from 'react';
import { CourseType, ICourse } from '../../data/portfolio/education/interfaces';
import CustomLink from '@/components/markdown/CustomLink';
import { motion } from 'framer-motion';
import { fadeUpVariant } from '@/animations/animations';

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

export default function CourseCard({ course }: Readonly<{ course: ICourse }>) {
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
				className={`max-w-screen-sm items-center border rounded-xl p-4 border-l-8 ${getBorderColor(
					course.type)} shadow-md`}
				whileHover={{ y: -4 }}
			>
				<div className="flex flex-col w-full">
					<p className="font-semibold text-slate-700">{course.name}</p>
					<div className="flex flex-row justify-between">
						<p className="text-slate-500">{course.code} · {course.credits} credits</p>
						<CustomLink href={course.link}>Course Link</CustomLink>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

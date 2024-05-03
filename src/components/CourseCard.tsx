import React from 'react';
import { ICourse } from '../../data/portfolio/education/interfaces';

export default function CourseCard ({ course } : { course: ICourse }) {
	return (
		<div className='flex flex-row items-center border rounded-xl p-4 border-l-8 border-l-amber-400 shadow-md'>
			<div className='flex flex-col'>
				<p className='font-semibold text-slate-600'>{course.name}</p>
			</div>
		</div>
	);
};

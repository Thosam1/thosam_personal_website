'use client'
import React from 'react'
import { Workout } from '../../data/sports/workoutsList';
import { format, parseISO } from 'date-fns';
import { fadeUpVariant } from '@/animations/animations';
import { motion } from 'framer-motion';

type WorkoutCardProps = {
	workout: Workout;
	onClick: (workout: Workout) => void;
};

export default function WorkoutCard({ workout, onClick }: Readonly<WorkoutCardProps>) {

	return (
		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			variants={fadeUpVariant()}
			onClick={() => onClick(workout)}
		>
			{/*<Link href={workout.url} target="_blank" rel="noopener noreferrer" className="unstyled">*/}
			<div className="bg-bg-elevated p-10 hover:bg-bg-highlight shadow-xs cursor-pointer">
				<div className="flex justify-end">
					<p className="text-text-subdued text-sm font-sm">{format(parseISO(workout.date), 'MMMM dd, yyyy')}</p>
				</div>

				<h2 className="text-2xl font-bold text-text-primary my-2">{workout.title}</h2>
				{workout.exercises.slice(0, 2).map((exercise, index) => (
					<div key={exercise.name + index} className="mt-2">
						<p className="text-md font-semibold text-text-secondary">{exercise.sets.length} x {exercise.name}</p>
					</div>
				))}
				{workout.exercises.length > 2 &&
					<div className="mt-2">
						<p className="text-md font-semibold text-text-secondary">[...]</p>
					</div>}
			</div>
			{/*</Link>*/}
		</motion.div>
	);
};

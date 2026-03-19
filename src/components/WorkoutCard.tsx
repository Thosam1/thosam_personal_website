'use client'
import React, { useRef } from 'react'
import { Workout } from '../../data/sports/workoutsList';
import { format, parseISO } from 'date-fns';
import { useGSAP, fadeUp } from '@/animations/gsapAnimations';

type WorkoutCardProps = {
	workout: Workout;
	onClick: (workout: Workout) => void;
};

export default function WorkoutCard({ workout, onClick }: Readonly<WorkoutCardProps>) {
	const ref = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (ref.current) fadeUp(ref.current)
	}, { scope: ref })

	return (
		<div ref={ref} style={{ opacity: 0 }} onClick={() => onClick(workout)}>
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
		</div>
	);
};

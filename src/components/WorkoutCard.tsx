'use client'
import React from 'react'
import Link from 'next/link';
import { Workout } from '../../data/sports/workoutsList';
import { format, parseISO } from 'date-fns';
import { fadeUpVariant } from '@/animations/animations';
import { motion } from 'framer-motion';

type WorkoutCardProps = {
	workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
	return (
		//<div className="bg-white shadow-lg p-4 lg:p-8">
		//		<h2 className="text-2xl font-bold mb-2">{workout.title}</h2>
		//		<p className="text-gray-600">{workout.date}</p>
		//		{workout.exercises.map((exercise, index) => (
		//			<div key={index} className="mt-4">
		//				<h3 className="text-xl font-semibold">{exercise.name}</h3>
		//				<ol className="list-decimal list-inside ml-4">
		//					{exercise.sets.map((set, setIndex) => (
		//						<li key={setIndex} className="text-gray-700">
		//							{set.weight && `${set.weight} × ${set.reps}`}
		//							{set.time && `Time: ${set.time}`}
		//							{set.distance && `${set.distance} km | ${set.time} min`}
		//						</li>
		//					))}
		//				</ol>
		//			</div>
		//		))}
		//</div>

		<motion.div
			initial="initial"
			whileInView="animate"
			viewport={{
				once: true,
			}}
			variants={fadeUpVariant()}
		>
			<Link href={workout.url} target="_blank" rel="noopener noreferrer" className="unstyled">
				<div className="bg-white shadow-md p-10 hover:bg-gray-100">
					<div className="flex justify-end">
						<p className="text-gray-600 text-sm font-sm">{format(parseISO(workout.date), 'MMMM dd, yyyy')}</p>
					</div>

					<h2 className="text-2xl font-bold text-slate-800 my-2">{workout.title}</h2>
					{workout.exercises.map((exercise, index) => (
						<div key={index} className="mt-2">
							<p className="text-md font-semibold text-slate-700">{exercise.sets.length} x {exercise.name}</p>
						</div>
					))}
				</div>
			</Link>
		</motion.div>
	);
};

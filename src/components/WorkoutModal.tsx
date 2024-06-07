'use client'
import React, { useEffect } from 'react'
import Link from 'next/link';
import { Set, Workout } from '../../data/sports/workoutsList';
import { format, parseISO } from 'date-fns';


type WorkoutModalProps = {
	workout: Workout;
	onClose: () => void;
};

export default function WorkoutModal({ workout, onClose }: Readonly<WorkoutModalProps>) {

	// Close modal when clicking outside of it
	const handleOutsideClick = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		if (!target.closest('.modal-content')) {
			onClose();
		}
	}

	useEffect(() => {

		// Prevent background scrolling when modal is open
		document.body.style.overflow = 'hidden';

		document.addEventListener('mousedown', handleOutsideClick);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.body.style.overflow = 'auto';
		};

	});

	const displayElt = (set: Set) => {
		if (set.reps) {
			// case for weight lifting, pull ups
			return set.weight ? `${set.weight} × ${set.reps} reps` : `0 kg × ${set.reps} reps`;
		} else if (set.distance) {
			// case for running, swimming, walking
			return `${set.distance} km | ${set.time} min`;
		} else if (set.time) {
			// case for plank, ...
			return set.time && `Time: ${set.time}`;

		}
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-20">
			<div className="modal-content bg-white p-10 w-full h-full overflow-auto">
				<div className="flex justify-end">
					<p className="text-gray-600 text-sm font-sm">{format(parseISO(workout.date), 'MMMM dd, yyyy')}</p>
				</div>

				<h2 className="text-2xl font-bold text-slate-800 my-2">{workout.title}</h2>
				{workout.exercises.map((exercise, index) => (
					<div key={exercise.name + index} className="mt-4">
						<h3 className="text-xl font-semibold">{exercise.name}</h3>
						<ol className="list-decimal list-inside ml-4">
							{exercise.sets.map((set, setIndex) => (
								<li key={setIndex + 1} className="text-gray-700">
									{ displayElt(set) }
								</li>
							))}
						</ol>
					</div>
				))}

				<div className="py-8 bg-white" />

				<div className="absolute bottom-20 left-20 right-20 flex flex-row justify-end p-4 gap-4 bg-white">
					<button
						type="button"
						className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						onClick={onClose}
					>
						Close
					</button>
					<Link href={workout.url} target="_blank" rel="noopener noreferrer" className="unstyled">
						<button
							type="button"
							className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium border border-gray-200 bg-blue-950 text-gray-100 shadow-sm hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
						>
							Workout Link
						</button>
					</Link>
				</div>

			</div>

		</div>
	);
};

'use client'
import React, { useState } from 'react'
import workoutList, { Workout } from '../../data/sports/workoutsList';
import WorkoutCard from '@/components/WorkoutCard';
import WorkoutModal from '@/components/WorkoutModal';


export default function Workouts() {

	const [showModal, setShowModal] = useState<boolean>(false);
	const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

	const handleCardClick = (workout: Workout) => {
		setSelectedWorkout(workout);
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
		setSelectedWorkout(null);
	};

	return (
		<>
			<div className="container max-w-(--breakpoint-md) mx-auto pt-16 pb-8 px-8">
				<div className="items-center flex flex-wrap">
					<div className="w-full text-left no-underline flex flex-col gap-5">
						{
							workoutList().map((item) =>
								<WorkoutCard workout={item} key={item.title + item.date + item.url} onClick={handleCardClick}/>
							)
						}
					</div>
				</div>
			</div>
			{showModal && selectedWorkout && <WorkoutModal workout={selectedWorkout} onClose={handleCloseModal}/>}
		</>

	);
};

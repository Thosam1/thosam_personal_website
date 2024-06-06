interface Set {
	weight?: string;
	reps?: number;
	distance?: number;
	time?: string;
}

interface Exercise {
	name: string;
	sets: Set[];
}

export interface Workout {
	date: string;
	title: string;
	exercises: Exercise[];
	url: string;
}

export default function workoutList(): Workout[] {
	return [
		{
			date: "2024-06-05",
			title: "Evening Workout",
			exercises: [
				{
					name: "Running",
					sets: [
						{ distance: 5, time: "30:00" }
					]
				},
				{
					name: "Pull Up",
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 3 }
					]
				}
			],
			url: "https://strong.app.link/kIpcjMJUcKb"
		},
		{
			date: "2024-05-26",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+10 kg", reps: 5 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ reps: 7 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+10 kg", reps: 6 },
						{ weight: "+10 kg", reps: 6 },
						{ weight: "+10 kg", reps: 6 },
						{ weight: "+10 kg", reps: 6 },
						{ reps: 10 }
					]
				}
			],
			url: "https://strong.app.link/gXi33I9adKb"
		},
		{
			date: '2024-05-24',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ reps: 9 },
						{ reps: 4 },
						{ reps: 6 },
						{ reps: 5 },
						{ reps: 4 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ reps: 6 },
						{ reps: 6 },
						{ reps: 8 },
						{ reps: 8 },
						{ reps: 6 }
					]
				}
			],
			url: 'https://strong.app.link/ZdGk758adKb'
		},
		{
			date: '2024-05-23',
			title: 'Legs',
			exercises: [
				{
					name: 'Glute Kickback (Machine)',
					sets: [
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 }
					]
				},
				{
					name: 'Seated Leg Curl (Machine)',
					sets: [
						{ weight: '40.5 kg', reps: 12 },
						{ weight: '40.5 kg', reps: 12 },
						{ weight: '40.5 kg', reps: 12 },
						{ weight: '40.5 kg', reps: 15 }
					]
				},
				{
					name: 'Rowing (Machine)',
					sets: [
						{ distance: 2, time: '8:43' },
						{ distance: 2, time: '9:09' }
					]
				},
				{
					name: 'Chest Fly',
					sets: [
						{ weight: '38.5 kg', reps: 8 },
						{ weight: '38.5 kg', reps: 8 },
						{ weight: '38.5 kg', reps: 8 },
						{ weight: '38.5 kg', reps: 10 }
					]
				},
				{
					name: 'Reverse Fly (Machine)',
					sets: [
						{ weight: '25 kg', reps: 8 },
						{ weight: '25 kg', reps: 8 },
						{ weight: '25 kg', reps: 8 },
						{ weight: '25 kg', reps: 10 }
					]
				},
				{
					name: 'Back Extension (Machine)',
					sets: [
						{ weight: '58.5 kg', reps: 15 },
						{ weight: '58.5 kg', reps: 15 },
						{ weight: '58.5 kg', reps: 14 },
						{ weight: '58.5 kg', reps: 15 }
					]
				}
			],
			url: 'https://strong.app.link/gyiscu8adKb'
		},
		{
			date: '2024-05-22',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ reps: 6 }
					]
				},
				{
					name: 'Plank',
					sets: [
						{ time: '2:00' },
						{ time: '2:00' }
					]
				},
				{
					name: 'Forearms (rings)',
					sets: [
						{ reps: 10 }
					]
				}
			],
			url: 'https://strong.app.link/jukd4MB9cKb'
		},
		{
			date: '2024-05-19',
			title: 'Running',
			exercises: [
				{
					name: 'Running',
					sets: [
						{ distance: 4.5 }
					]
				}
			],
			url: 'https://strong.app.link/AfdAT06adKb'
		},
		{
			date: '2024-05-17',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 }
					]
				},
				{
					name: 'Back Extension (Machine)',
					sets: [
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 }
					]
				},
				{
					name: 'Chest Fly',
					sets: [
						{ weight: '31.5 kg', reps: 12 },
						{ weight: '31.5 kg', reps: 12 },
						{ weight: '31.5 kg', reps: 12 },
						{ weight: '38.5 kg', reps: 10 }
					]
				},
				{
					name: 'Reverse Fly (Machine)',
					sets: [
						{ weight: '18 kg', reps: 14 },
						{ weight: '18 kg', reps: 14 },
						{ weight: '18 kg', reps: 14 },
						{ weight: '18 kg', reps: 14 }
					]
				},
				{
					name: 'Shoulder Press (Machine)',
					sets: [
						{ weight: '31.5 kg', reps: 12 },
						{ weight: '22.5 kg', reps: 12 },
						{ weight: '22.5 kg', reps: 10 },
						{ weight: '13.5 kg', reps: 14 }
					]
				},
				{
					name: 'Lat Pulldown (Machine)',
					sets: [
						{ weight: '49.5 kg', reps: 10 },
						{ weight: '58.5 kg', reps: 10 },
						{ weight: '58.5 kg', reps: 10 },
						{ weight: '49.5 kg', reps: 10 }
					]
				},
				{
					name: 'Plank',
					sets: [
						{ time: '2:00' },
						{ time: '2:00' },
						{ time: '2:00' }
					]
				},
				{
					name: 'Forearms (rings)',
					sets: [
						{ reps: 10 },
						{ reps: 10 },
						{ reps: 10 }
					]
				}
			],
			url: 'https://strong.app.link/n0o0Nv5adKb'
		},
		{
			date: '2022-05-15',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 3 },
						{ weight: '+10 kg', reps: 3 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 5 }
					]
				},
				{
					name: 'Back Extension (Machine)',
					sets: [
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 },
						{ weight: '49.5 kg', reps: 12 }
					]
				},
				{
					name: 'Chest Fly',
					sets: [
						{ weight: '25 kg', reps: 12 },
						{ weight: '25 kg', reps: 12 },
						{ weight: '25 kg', reps: 12 },
						{ weight: '25 kg', reps: 12 }
					]
				},
				{
					name: 'Reverse Fly (Machine)',
					sets: [
						{ weight: '11.5 kg', reps: 14 },
						{ weight: '11.5 kg', reps: 14 },
						{ weight: '11.5 kg', reps: 14 },
						{ weight: '11.5 kg', reps: 14 }
					]
				},
				{
					name: 'Shoulder Press (Machine)',
					sets: [
						{ weight: '22.5 kg', reps: 10 },
						{ weight: '22.5 kg', reps: 10 },
						{ weight: '22.5 kg', reps: 10 },
						{ weight: '22.5 kg', reps: 8 },
						{ weight: '13.5 kg', reps: 5 }
					]
				},
				{
					name: 'Lat Pulldown (Machine)',
					sets: [
						{ weight: '49.5 kg', reps: 10 },
						{ weight: '49.5 kg', reps: 10 },
						{ weight: '49.5 kg', reps: 10 },
						{ weight: '49.5 kg', reps: 10 }
					]
				},
				{
					name: 'Plank',
					sets: [
						{ time: '2:00' },
						{ time: '2:00' },
						{ time: '2:00' }
					]
				}
			],
			url: 'https://strong.app.link/rHfbVyyOFJb'
		}
	];
}

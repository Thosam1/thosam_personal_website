export interface Set {
	weight?: string;
	reps?: number;
	distance?: number;
	time?: string;
}

export interface Exercise {
	name: string;
	sets: Set[];
}

export interface Workout {
	date: string;
	title: string;
	exercises: Exercise[];
	workoutNotes?: string;
	url: string;
}

export default function workoutList(): Workout[] {
	return [
		{
			date: "2024-06-24",
			title: "Running",
			exercises: [
				{
					name: "Running",
					sets: [
						{ distance: 7, time: "40:00" }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/Xri4yYHtKKb"
		},
		{
			date: "2024-06-23",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+15 kg", reps: 3 },
						{ weight: "+15 kg", reps: 3 },
						{ reps: 7 },
						{ reps: 7 },
						{ reps: 7 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+15 kg", reps: 6 },
						{ weight: "+15 kg", reps: 6 },
						{ reps: 7 },
						{ reps: 7 },
						{ reps: 10 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/W1FWT9GtKKb"
		},
		{
			date: "2024-06-21",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+15 kg", reps: 3 },
						{ weight: "+15 kg", reps: 3 },
						{ weight: "+15 kg", reps: 3 },
						{ weight: "+15 kg", reps: 3 },
						{ weight: "+15 kg", reps: 3 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+15 kg", reps: 6 },
						{ weight: "+15 kg", reps: 6 },
						{ weight: "+15 kg", reps: 6 },
						{ weight: "+15 kg", reps: 6 },
						{ weight: "+15 kg", reps: 6 }
					]
				},
				{
					name: "Chest Fly",
					sets: [
						{ weight: "45 kg", reps: 8 },
						{ weight: "45 kg", reps: 8 },
						{ weight: "45 kg", reps: 8 },
						{ weight: "45 kg", reps: 8 }
					]
				},
				{
					name: "Reverse Fly (Machine)",
					sets: [
						{ weight: "31.5 kg", reps: 8 },
						{ weight: "31.5 kg", reps: 10 },
						{ weight: "31.5 kg", reps: 10 },
						{ weight: "31.5 kg", reps: 10 }
					]
				},
				{
					name: "Seated Leg Curl (Machine)",
					sets: [
						{ weight: "47.3 kg", reps: 12 },
						{ weight: "47.3 kg", reps: 12 },
						{ weight: "47.3 kg", reps: 12 },
						{ weight: "40.5 kg", reps: 10 },
						{ weight: "31.5 kg", reps: 8 }
					]
				},
				{
					name: "Leg Extension (Machine)",
					sets: [
						{ weight: "49.5 kg", reps: 12 },
						{ weight: "49.5 kg", reps: 12 },
						{ weight: "49.5 kg", reps: 12 },
						{ weight: "49.5 kg", reps: 10 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/o1LViDGtKKb"
		},
		{
			date: '2024-06-20',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+15 kg', reps: 3 },
						{ weight: '+15 kg', reps: 3 },
						{ weight: '+15 kg', reps: 3 },
						{ reps: 5 },
						{ reps: 4 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+15 kg', reps: 6 },
						{ weight: '+15 kg', reps: 6 },
						{ weight: '+15 kg', reps: 6 },
						{ reps: 5 }
					]
				},
				{
					name: 'Back Extension (Machine)',
					sets: [
						{ weight: '67.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 }
					]
				},
				{
					name: 'Rowing (Machine)',
					sets: [
						{ distance: 2, time: '8:55' }
					]
				},
				{
					name: 'Staircases',
					sets: [
						{ distance: 12, time: '5:00' }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/w8KVd5FtKKb'
		},
		{
			date: '2024-06-19',
			title: 'Running',
			exercises: [
				{
					name: 'Running',
					sets: [
						{ distance: 5.5, time: '50:00' }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ reps: 8 },
						{ reps: 8 },
						{ reps: 6 }
					]
				},
				{
					name: 'Pull Up',
					sets: [
						{ reps: 7 },
						{ reps: 5 },
						{ reps: 3 }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/bZ5SouFtKKb'
		},
		{
			date: '2024-06-18',
			title: 'Running',
			exercises: [
				{
					name: 'Running',
					sets: [
						{ distance: 5, time: '53:00' }
					]
				}
			],
			workoutNotes: 'trail running',
			url: 'https://strong.app.link/oYhXlMEtKKb'
		},
		{
			date: '2024-06-17',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+12 kg', reps: 5 },
						{ weight: '+12 kg', reps: 3 },
						{ weight: '+12 kg', reps: 4 },
						{ weight: '+12 kg', reps: 3 },
						{ weight: '+12 kg', reps: 2 },
						{ reps: 7 },
						{ reps: 5 },
						{ reps: 5 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 7 },
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 6 },
						{ reps: 10 },
						{ reps: 10 },
						{ reps: 10 }
					]
				},
				{
					name: 'Staircases',
					sets: [
						{ distance: 12, time: '6:00' }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/Ee07L3CtKKb'
		},
		{
			date: '2024-06-12',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ weight: '+15 kg', reps: 2 },
						{ weight: '+10 kg', reps: 4 },
						{ reps: 5 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 5 },
						{ weight: '+10 kg', reps: 5 },
						{ weight: '+10 kg', reps: 5 },
						{ reps: 5 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ reps: 6 },
						{ reps: 6 },
						{ weight: '+15 kg', reps: 5 },
						{ weight: '+10 kg', reps: 5 },
						{ reps: 6 },
						{ reps: 12 },
						{ reps: 6 },
						{ reps: 6 },
						{ reps: 6 },
						{ reps: 6 }
					]
				},
				{
					name: 'Back Extension (Machine)',
					sets: [
						{ weight: '50 kg', reps: 15 },
						{ weight: '50 kg', reps: 15 },
						{ weight: '50 kg', reps: 15 },
						{ weight: '50 kg', reps: 15 }
					]
				},
				{
					name: 'Chest Fly',
					sets: [
						{ weight: '45 kg', reps: 8 },
						{ weight: '45 kg', reps: 6 }
					]
				},
				{
					name: 'Reverse Fly (Machine)',
					sets: [
						{ weight: '25 kg', reps: 8 },
						{ weight: '25 kg', reps: 8 }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/CJ0N8waSoKb'
		},
		{
			date: '2024-06-10',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 9 },
						{ reps: 3 },
						{ reps: 3 },
						{ reps: 3 },
						{ reps: 2 },
						{ reps: 5 },
						{ reps: 5 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ reps: 6 },
						{ reps: 12 },
						{ reps: 12 },
						{ reps: 8 },
						{ reps: 6 },
						{ reps: 12 }
					]
				},
				{
					name: 'Back Extension (Machine)',
					sets: [
						{ weight: '58.5 kg', reps: 10 },
						{ weight: '58.5 kg', reps: 10 },
						{ weight: '58.5 kg', reps: 12 },
						{ weight: '58.5 kg', reps: 12 }
					]
				},
				{
					name: 'Staircases',
					sets: [
						{ distance: 12, time: '5:00' }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/QmX2fO7RoKb'
		},
		{
			date: '2024-06-07',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+12 kg', reps: 4 },
						{ weight: '+12 kg', reps: 4 },
						{ reps: 4 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 6 },
						{ reps: 6 },
						{ reps: 3 }
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
					name: 'Push Up',
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/fgwWsl2eiKb'
		},
		{
			date: '2024-06-06',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ weight: '+12 kg', reps: 3 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ weight: '+12 kg', reps: 2 },
						{ reps: 2 },
						{ reps: 4 },
						{ reps: 5 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 6 },
						{ weight: '+12 kg', reps: 6 },
						{ reps: 6 }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/tcfHOD1eiKb'
		},
		{
			date: '2024-06-05',
			title: 'Evening Run',
			exercises: [
				{
					name: 'Running',
					sets: [
						{ distance: 5, time: '30:00' }
					]
				},
				{
					name: 'Pull Up',
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 3 }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/kIpcjMJUcKb'
		},
		{
			date: '2024-05-26',
			title: 'Push / Pull',
			exercises: [
				{
					name: 'Pull Up',
					sets: [
						{ weight: '+10 kg', reps: 5 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ weight: '+10 kg', reps: 4 },
						{ reps: 7 }
					]
				},
				{
					name: 'Chest Dip',
					sets: [
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ weight: '+10 kg', reps: 6 },
						{ reps: 10 }
					]
				}
			],
			workoutNotes: '',
			url: 'https://strong.app.link/gXi33I9adKb'
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
			workoutNotes: '',
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
			workoutNotes: '',
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
			workoutNotes: '',
			url: 'https://strong.app.link/jukd4MB9cKb'
		},
		{
			date: '2024-05-19',
			title: 'Running',
			exercises: [
				{
					name: 'Running',
					sets: [
						{ distance: 4.5, time: '30:00' }
					]
				}
			],
			workoutNotes: '',
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
			workoutNotes: '',
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
			workoutNotes: '',
			url: 'https://strong.app.link/rHfbVyyOFJb'
		}
	];
}

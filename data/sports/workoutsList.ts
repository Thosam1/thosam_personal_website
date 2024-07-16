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
			date: "2024-07-16",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+20 kg", reps: 3 },
						{ weight: "+20 kg", reps: 3 },
						{ weight: "+20 kg", reps: 2 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ reps: 4 },
						{ reps: 6 },
						{ reps: 4 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+20 kg", reps: 2 },
						{ weight: "+10 kg", reps: 8 },
						{ weight: "+10 kg", reps: 6 },
						{ reps: 6 }
					]
				},
				{
					name: "Back Extension (Machine)",
					sets: [
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "76.5 kg", reps: 7 },
						{ weight: "67.5 kg", reps: 12 }
					]
				},
				{
					name: "Chest Fly",
					sets: [
						{ weight: "52 kg", reps: 8 },
						{ weight: "52 kg", reps: 8 },
						{ weight: "52 kg", reps: 6 },
						{ weight: "52 kg", reps: 6 }
					]
				},
				{
					name: "Reverse Fly (Machine)",
					sets: [
						{ weight: "31.5 kg", reps: 8 },
						{ weight: "31.5 kg", reps: 8 },
						{ weight: "31.5 kg", reps: 9 },
						{ weight: "31.5 kg", reps: 8 }
					]
				},
				{
					name: "Shoulder Press (Machine)",
					sets: [
						{ weight: "31.5 kg", reps: 12 },
						{ weight: "31.5 kg", reps: 10 },
						{ weight: "31.5 kg", reps: 8 },
						{ weight: "31.5 kg", reps: 6 }
					]
				}
			],
			url: "https://strong.app.link/mJGb758OhLb"
		},
		{
			date: "2024-07-13",
			title: "Running",
			exercises: [
				{
					name: "Running",
					sets: [
						{ distance: 4, time: "30:00" }
					]
				}
			],
			url: "https://strong.app.link/gyAY0A8OhLb"
		},
		{
			date: "2024-07-11",
			title: "Legs",
			exercises: [
				{
					name: "Seated Leg Curl (Machine)",
					sets: [
						{ weight: "49.5 kg", reps: 10 },
						{ weight: "49.5 kg", reps: 10 },
						{ weight: "49.5 kg", reps: 8 },
						{ weight: "49.5 kg", reps: 8 }
					]
				},
				{
					name: "Leg Extension (Machine)",
					sets: [
						{ weight: "65.3 kg", reps: 10 },
						{ weight: "58.6 kg", reps: 8 },
						{ weight: "58.6 kg", reps: 8 },
						{ weight: "58.6 kg", reps: 8 },
						{ weight: "49.5 kg", reps: 8 }
					]
				},
				{
					name: "Rowing (Machine)",
					sets: [
						{ distance: 2, time: "8:45" },
						{ distance: 5, time: "24:11" }
					]
				},
				{
					name: "Squat (Dumbbell)",
					sets: [
						{ weight: "25 kg", reps: 20 },
						{ weight: "25 kg", reps: 20 },
						{ weight: "25 kg", reps: 20 },
						{ weight: "25 kg", reps: 20 }
					]
				},
				{
					name: "Back Extension (Machine)",
					sets: [
						{ weight: "67.5 kg", reps: 16 },
						{ weight: "67.5 kg", reps: 14 },
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "67.5 kg", reps: 10 },
						{ weight: "67.5 kg", reps: 10 },
						{ weight: "67.5 kg", reps: 10 }
					]
				},
				{
					name: "Pull Up",
					sets: [
						{ reps: 4 },
						{ reps: 7 },
						{ reps: 4 },
						{ reps: 4 }
					]
				}
			],
			workoutNotes: "5km rowing machine after a 2km set is a killer. It really plays with your mental. We must remember that before giving up physically we always end up giving mentally first. So we must train being strong mentally.",
			url: "https://strong.app.link/ugQedU7OhLb"
		},
		{
			date: "2024-07-10",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+20 kg", reps: 4 },
						{ weight: "+20 kg", reps: 3 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ weight: "+10 kg", reps: 4 },
						{ reps: 7 },
						{ reps: 5 },
						{ reps: 3 },
						{ reps: 4 },
						{ reps: 4 },
						{ reps: 3 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+10 kg", reps: 6 },
						{ weight: "+10 kg", reps: 6 },
						{ weight: "+10 kg", reps: 6 },
						{ reps: 10 },
						{ reps: 9 },
						{ reps: 6 },
						{ reps: 4 },
						{ reps: 6 },
						{ reps: 5 },
						{ reps: 5 }
					]
				},
				{
					name: "Back Extension (Machine)",
					sets: [
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "67.5 kg", reps: 12 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/ZxWg5f7OhLb"
		},
		{
			date: "2024-07-09",
			title: "Running",
			exercises: [
				{
					name: "Running",
					sets: [
						{ distance: 5, time: "27:00" }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ reps: 6 }
					]
				},
				{
					name: "Pull Up",
					sets: [
						{ reps: 5 },
						{ reps: 5 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/zB5KvB6OhLb"
		},
		{
			date: "2024-07-08",
			title: "Hike Day 2",
			exercises: [
				{
					name: "Hiking",
					sets: [
						{ distance: 12, time: "00:00" }
					]
				}
			],
			url: "https://www.google.com/maps/@46.3554617,6.7903618,3a,75y,193.91h,92.62t/data=!3m8!1e1!3m6!1sAF1QipNvaOgwJCKWaFfk7zyq6pDr5xdbxYApFKK0sjap!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNvaOgwJCKWaFfk7zyq6pDr5xdbxYApFKK0sjap%3Dw900-h600-k-no-pi-2.6195992097914313-ya193.90643784424051-ro0-fo90!7i13000!8i5284?coh=205410&entry=ttu"
		},
		{
			date: "2024-07-07",
			title: "Hike Day 1",
			exercises: [
				{
					name: "Hiking",
					sets: [
						{ distance: 14, time: "00:00" }
					]
				}
			],
			url: "https://www.google.com/maps/@46.3554617,6.7903618,3a,75y,193.91h,92.62t/data=!3m8!1e1!3m6!1sAF1QipNvaOgwJCKWaFfk7zyq6pDr5xdbxYApFKK0sjap!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNvaOgwJCKWaFfk7zyq6pDr5xdbxYApFKK0sjap%3Dw900-h600-k-no-pi-2.6195992097914313-ya193.90643784424051-ro0-fo90!7i13000!8i5284?coh=205410&entry=ttu"
		},
		{
			date: "2024-07-04",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+20 kg", reps: 3 },
						{ weight: "+20 kg", reps: 2 },
						{ weight: "+15 kg", reps: 3 },
						{ weight: "+15 kg", reps: 1 },
						{ reps: 7 },
						{ reps: 5 },
						{ reps: 4 },
						{ reps: 3 },
						{ reps: 3 },
						{ reps: 5 },
						{ reps: 3 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+15 kg", reps: 3 },
						{ reps: 6 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/CpHYlF5OhLb"
		},
		{
			date: "2024-07-02",
			title: "Legs",
			exercises: [
				{
					name: "Seated Leg Curl (Machine)",
					sets: [
						{ weight: "47.3 kg", reps: 12 },
						{ weight: "47.3 kg", reps: 12 },
						{ weight: "40.5 kg", reps: 12 },
						{ weight: "40.5 kg", reps: 12 }
					]
				},
				{
					name: "Leg Extension (Machine)",
					sets: [
						{ weight: "54 kg", reps: 12 },
						{ weight: "49.5 kg", reps: 12 },
						{ weight: "49.5 kg", reps: 8 },
						{ weight: "49.5 kg", reps: 10 }
					]
				},
				{
					name: "Squat (Dumbbell)",
					sets: [
						{ reps: 40 },
						{ weight: "20 kg", reps: 20 },
						{ weight: "20 kg", reps: 30 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/n5EML14OhLb"
		},
		{
			date: "2024-07-01",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ weight: "+20 kg", reps: 3 },
						{ weight: "+20 kg", reps: 2 },
						{ weight: "+15 kg", reps: 4 },
						{ weight: "+15 kg", reps: 3 },
						{ reps: 8 },
						{ reps: 4 },
						{ reps: 7 },
						{ reps: 4 },
						{ reps: 4 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ weight: "+20 kg", reps: 6 },
						{ weight: "+20 kg", reps: 5 },
						{ weight: "+15 kg", reps: 7 },
						{ weight: "+15 kg", reps: 6 },
						{ reps: 8 },
						{ reps: 8 }
					]
				},
				{
					name: "Back Extension (Machine)",
					sets: [
						{ weight: "58.5 kg", reps: 12 },
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "67.5 kg", reps: 12 },
						{ weight: "58.5 kg", reps: 12 }
					]
				},
				{
					name: "Shoulder Press (Machine)",
					sets: [
						{ weight: "31.5 kg", reps: 12 },
						{ weight: "31.5 kg", reps: 12 },
						{ weight: "31.5 kg", reps: 8 },
						{ weight: "22.5 kg", reps: 10 }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/hCUSZq4OhLb"
		},
		{
			date: "2024-06-30",
			title: "Running",
			exercises: [
				{
					name: "Running",
					sets: [
						{ distance: 5, time: "53:00" }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/XdaqAx3OhLb"
		},
		{
			date: "2024-06-29",
			title: "Push / Pull",
			exercises: [
				{
					name: "Pull Up",
					sets: [
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 5 },
						{ reps: 3 }
					]
				},
				{
					name: "Chest Dip",
					sets: [
						{ reps: 8 },
						{ reps: 8 },
						{ reps: 8 }
					]
				},
				{
					name: "Running",
					sets: [
						{ distance: 1.5, time: "10:00" }
					]
				}
			],
			workoutNotes: "",
			url: "https://strong.app.link/iTakSC2OhLb"
		},
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
			title: "Hike Lugano",
			exercises: [
				{
					name: "Hiking",
					sets: [
						{ distance: 7, time: "240:00" }
					]
				}
			],
			url: "https://www.alltrails.com/en-gb/trail/switzerland/ticino/lugano-paradiso-monte-san-salvatore?sh=2mcnv5"
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

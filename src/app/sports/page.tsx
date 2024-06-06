import { Wrapper } from '@/components/Wrapper';
import { FULL_NAME } from '@/constants';
import type { Metadata } from 'next';

import WorkoutCard from '@/components/WorkoutCard';
import workoutList from '../../../data/sports/workoutsList';
import { Divider } from '@/components/Divider';
import AnimatedCounter from '@/components/AnimatedCounter';

const title = 'Portfolio | Thösam Norlha-Tsang'
const description = 'Hello there 👋, this is my fitness page where I log my fitness journey'
const url = `${process.env.WEBSITE_URL}/sports`;
export const metadata: Metadata = {
	title,
	description,
	verification: { google: process.env.GOOGLE_SEO_CODE },
	alternates: {
		canonical: url,
	},
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url,
		siteName: FULL_NAME,
		title,
		description,
		images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
	},
	twitter: {
		title,
		description,
		card: 'summary_large_image', // summary_large_image
		images: [`${process.env.WEBSITE_URL}/website_thumbnail.png`]
	},
}

export default function Sports() {
	return (
		<>
			{/*<Hero/>*/}
			<Workouts/>
		</>
	)
}

const Workouts = () => (
	<>
		<div className="py-6 flex items-center">
			<Wrapper>
				<div className="text-center">
					<h1 className="font-semibold text-4xl">
						My Workout Journal 🏋️‍♂️
					</h1>
					<p className="mt-4 text-2xl py-4">
						Tracking my fitness journey !
					</p>
					<p className="my-4">Currently, there are {' '}<span className="text-xl font-semibold"><AnimatedCounter
						from={0} to={workoutList().length}/></span> {' '} workouts logged !</p>
				</div>
			</Wrapper>
		</div>

		<Divider/>

		<div className="container max-w-screen-md mx-auto pt-16 pb-8 px-8">
			<div className="items-center flex flex-wrap">
				<div className="w-full text-left no-underline flex flex-col gap-5">
					{
						workoutList().map((item) =>
							<WorkoutCard workout={item} key={item.title}/>
						)
					}
				</div>
			</div>
		</div>
	</>
)

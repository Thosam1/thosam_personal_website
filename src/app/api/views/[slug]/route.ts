import db from '../../../../../lib/firebase';
import { NextApiRequest } from 'next';

export type ResponseData = {
	total: number
}

export async function GET(req: NextApiRequest, { params }: { params: { slug: string } }) {
	if (req.method === 'GET') {
		const snapshot = await db.ref('views').child(params.slug).once('value')
		const views = snapshot.val()
		return Response.json({ total: views })
	}
}

export async function POST(req: NextApiRequest, { params }: { params: { slug: string } }) {
	console.log('Post request is : ', req)
	console.log('Slug is : ', params.slug)
	if (req.method === 'POST') {
		const ref = db.ref('views').child(params.slug)
		const { snapshot } = await ref.transaction((currentViews: number | null) => {
			if (currentViews === null) {
				return 1
			}
			return currentViews + 1
		})

		return Response.json({ total: snapshot.val() });
	}
}

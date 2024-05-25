import db from '../../../../../lib/firebase';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
	if (req.method === 'GET') {
		//const snapshot = await db.ref('views').child(params.slug).once('value')
		//const views = snapshot.val() || 0;
		const views = 10
		return Response.json({ total: views })
	}
}

export async function POST(req: Request, { params }: { params: { slug: string } }) {
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

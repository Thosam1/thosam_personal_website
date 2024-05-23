import { useEffect } from 'react';
import useSWR from 'swr';

async function fetcher(...args: Parameters<typeof fetch>): Promise<any> {
	const res = await fetch(...args);
	return res.json();
}

interface IViewCounterProps {
	slug: string;
	isBlogPage: boolean; // increment view in this case
}

export default function ViewCounter({ slug, isBlogPage = false } : Readonly<IViewCounterProps>) {
	console.log("slug is : ", slug)
	const { data } = useSWR<{ total: number }>(`/api/views/${slug}`, fetcher);
	const views = data?.total ? Number(data.total).valueOf() : 0;

	useEffect(() => {
		const registerView = () =>
			fetch(`/api/views/${slug}`, {
				method: 'POST',
			});
		if(isBlogPage) {
			registerView().then();
		}
	}, [isBlogPage, slug]);

	return <>{views > 0 ? views.toLocaleString() : '0'} views</>;
}

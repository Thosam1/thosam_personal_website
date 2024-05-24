interface IViewCounterProps {
	views: number;
}

export default function ViewCounter({ views } : Readonly<IViewCounterProps>) {
	if(views == null) views = 0;
	return <>{ views.toLocaleString() }{ views > 1 ? ' views' : ' view'}</>;
}

import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className='bg-red-500 size-64'>
			<h1 className='text-3xl font-bold underline'>Hello world!</h1>
			<Link to='/calculator'>
				<Button>Go to calculator</Button>
			</Link>
		</div>
	);
}

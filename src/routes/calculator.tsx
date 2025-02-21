import { Button } from '@/components/ui/button';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/calculator')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className='bg-green-500 size-64'>
				<span>Hello "/calculator"!</span>
				<Link to='/'>
					<Button>Go to calculator</Button>
				</Link>
			</div>
		</>
	);
}

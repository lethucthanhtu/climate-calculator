import { Outlet, createRootRoute } from '@tanstack/react-router';
import Header from '../components/header';
import Footer from '../components/footer';
import { lazy, Suspense } from 'react';
import { ThemeButton } from '@/components/ThemeButton';

export const Route = createRootRoute({
	component: RootComponent,
});

const TanStackRouterDevtools = import.meta.env.PROD
	? () => null // Render nothing in production
	: lazy(() =>
			// Lazy load in development
			import('@tanstack/router-devtools').then((res) => ({
				default: res.TanStackRouterDevtools,
				// For Embedded Mode
				// default: res.TanStackRouterDevtoolsPanel
			}))
		);

function RootComponent() {
	return (
		<>
			<Header />
			<ThemeButton />
			<Outlet />
			<Footer />

			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</>
	);
}

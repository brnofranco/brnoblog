import type { Metadata } from 'next';
import Home from '../page';

export const metadata: Metadata = {
	alternates: {
		canonical: '/',
	},
	robots: {
		index: false,
		follow: true,
	},
};

export default Home;

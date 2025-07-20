import type { Metadata } from 'next';
import './globals.css';
import PageLayout from '../components/PageLayout';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
	title: 'brnoblog',
	description: 'Blog do Bruno Franco',
};

const interFont = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-inter',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="pt-br" className={interFont.variable}>
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}

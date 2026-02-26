import type { Metadata } from 'next';
import './globals.css';
import PageLayout from '../components/PageLayout';
import { Inter } from 'next/font/google';
import { config } from '@/shared/config';

export const metadata: Metadata = {
	metadataBase: new URL(config.siteUrl),
	title: {
		default: config.siteTitle,
		template: `%s | ${config.siteTitle}`,
	},
	description: config.siteDescription,
	keywords: [
		'programação',
		'desenvolvimento',
		'software',
		'tecnologia',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Node.js',
	],
	authors: [{ name: 'Bruno Franco', url: config.socialMediaLinks.portfolio }],
	creator: 'Bruno Franco',
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: config.siteUrl,
		siteName: config.siteTitle,
		title: config.siteTitle,
		description: config.siteDescription,
	},
	twitter: {
		card: 'summary_large_image',
		title: config.siteTitle,
		description: config.siteDescription,
	},
	robots: {
		index: true,
		follow: true,
	},
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

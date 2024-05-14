import { Inter } from 'next/font/google';
import './styles.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: `brnoblog - ${params.slug}`,
		description: 'Blog do Bruno Franco',
	};
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}


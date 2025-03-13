import type { Metadata } from 'next';
import PageLayout from '../../components/PageLayout';

export const metadata: Metadata = {
	title: 'brnoblog - 404',
	description: 'Blog do Bruno Franco',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="pt-br">
			<body>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	);
}

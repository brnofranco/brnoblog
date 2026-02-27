import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'brunofranco.dev - 404',
	description: 'Page not found',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

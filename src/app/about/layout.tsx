import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sobre o brnoblog',
	description: 'Sobre o blog do Bruno Franco',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

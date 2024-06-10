import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'brnoblog - Sobre',
	description: 'Blog do Bruno Franco',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}


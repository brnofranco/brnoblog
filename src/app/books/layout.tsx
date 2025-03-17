import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'brnoblog - Livros',
	description: 'Blog do Bruno Franco',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

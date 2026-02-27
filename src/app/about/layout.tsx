import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'brunofranco.dev - Sobre',
	description: 'Sobre Bruno Franco, desenvolvedor Full Stack, e o propósito do site brunofranco.dev',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

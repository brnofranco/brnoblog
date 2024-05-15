import './styles.css';

export async function generateMetadata({ params }: { params: { slug: string } }) {
	return {
		title: `brnoblog - ${params.slug}`,
		description: 'Blog do Bruno Franco',
	};
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="pt-br">
			<body>{children}</body>
		</html>
	);
}


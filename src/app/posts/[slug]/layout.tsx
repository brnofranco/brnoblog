import './styles.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	const title = slug.charAt(0).toUpperCase() + slug.slice(1).replaceAll('-', ' ');

	return {
		title,
		description: 'Blog do Bruno Franco',
	};
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
	const { category } = await params;

	return {
		title: `Posts sobre ${category.replaceAll('%20', ' ')}`,
		description: 'Blog do Bruno Franco',
	};
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}

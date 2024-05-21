export async function generateMetadata({ params }: { params: { category: string } }) {
	const { category } = params;

	return {
		title: `Posts sobre ${category.replaceAll('%20', ' ')}`,
		description: 'Blog do Bruno Franco',
	};
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}


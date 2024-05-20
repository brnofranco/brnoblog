export async function generateMetadata({ params }: { params: { category: string } }) {
	return {
		title: `brnoblog - ${params.category}`,
		description: 'Blog do Bruno Franco',
	};
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>{children}</>;
}


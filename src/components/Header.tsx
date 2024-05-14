import Link from 'next/link';

export default function Header() {
	return (
		<header className="h-full w-full p-4 flex justify-center items-center bg-header shadow-lg mb-10 text-title font-extrabold text-2xl">
			<Link href="/"> brnoblog </Link>
		</header>
	);
}

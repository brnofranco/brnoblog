import Link from 'next/link';

export default function Header() {
	return (
		<header className="h-full w-full p-3 flex justify-center items-center bg-header shadow-lg mb-10 text-button font-extrabold">
			<Link href="/"> brnoblog </Link>
		</header>
	);
}

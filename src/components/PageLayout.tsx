import Link from 'next/link';
import { ReactNode } from 'react';

export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className="h-full w-full">
			<header className="h-full w-full p-4 flex justify-center items-center bg-header shadow-lg mb-10 text-title font-extrabold text-2xl">
				<Link href="/"> brnoblog </Link>
			</header>

			<div className="min-h-screen h-full w-full flex justify-center">
				<div className="w-4/5 xl:max-w-[1280px] h-full flex flex-col xl:flex-row justify-center gap-16">{children}</div>
			</div>

			<footer className="h-full w-full flex justify-center items-center bg-header shadow-lg py-8 mt-12">
				<div className="h-full w-4/5 xl:w-4/6 flex flex-col">
					<p className="text-xl font-bold mb-8">brnoblog</p>

					<hr className="w-full h-[2px] border-none border-t-2 bg-gray-500" />
					<p className="text-gray-600 text-sm mt-3">© 2024 Criado por Bruno Franco</p>
				</div>
			</footer>
		</div>
	);
}

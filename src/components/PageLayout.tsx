'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';
import { links } from './SocialMediaSideBar';
import Image from 'next/image';

export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="h-full w-full">
			<header className="h-full w-full py-4 flex justify-center items-center bg-header shadow-lg mb-4 xl:mb-10">
				<nav className="w-11/12 xl:max-w-[1280px] flex justify-between items-center">
					<Link href="/" className="text-title font-extrabold text-2xl flex gap items-center">
						<Image src="/icon.svg" alt="bruno franco icon" width={26} height={26} /> rnoblog
					</Link>

					<div className="flex items-center gap-10 justify-end">
						<Link href="/" className="text-text text-lg">
							home
						</Link>

						<Link href={links.portfolio} target="_blank" className="text-text text-lg">
							autor
						</Link>
					</div>
				</nav>
			</header>

			<div className="min-h-screen h-full w-full flex justify-center">
				<div className="w-11/12 xl:max-w-[1280px] h-full flex flex-col xl:flex-row justify-center gap-10">
					{children}
				</div>
			</div>

			<footer className="h-full w-full flex justify-center items-center bg-header shadow-lg py-8 mt-12">
				<div className="h-full w-4/5 xl:w-4/6 flex flex-col">
					<div className="w-full flex items-start justify-between">
						<p className="text-xl font-bold mb-8">brnoblog</p>
						<button onClick={scrollToTop}>
							<FaCircleArrowUp color="#c9d3e7" size={32} title="Voltar ao topo" />
						</button>
					</div>

					<hr className="w-full h-[2px] border-none border-t-2 bg-gray-500" />
					<p className="text-gray-600 text-sm mt-3">© 2024 Criado por Bruno Franco</p>
				</div>
			</footer>
		</div>
	);
}

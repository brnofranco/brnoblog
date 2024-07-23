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
			<header className="mb-4 flex h-full w-full items-center justify-center bg-header py-4 shadow-lg xl:mb-10">
				<nav className="flex w-11/12 items-center justify-between xl:max-w-[1280px]">
					<Link href="/" className="gap flex items-center text-2xl font-extrabold text-title">
						<Image src="/icon.svg" alt="bruno franco icon" width={26} height={26} /> rnoblog
					</Link>

					<div className="flex items-center justify-end gap-10">
						<Link href="/" className="text-lg text-text">
							home
						</Link>

						<Link href={links.portfolio} target="_blank" className="text-lg text-text">
							autor
						</Link>
					</div>
				</nav>
			</header>

			<div className="flex h-full min-h-screen w-full justify-center">
				<div className="flex h-full w-11/12 flex-col justify-center gap-10 xl:max-w-[1280px] xl:flex-row">
					{children}
				</div>
			</div>

			<footer className="mt-12 flex h-full w-full items-center justify-center bg-header py-8 shadow-lg">
				<div className="flex h-full w-4/5 flex-col xl:w-4/6">
					<div className="flex w-full items-start justify-between">
						<p className="mb-8 text-xl font-bold">brnoblog</p>
						<button onClick={scrollToTop}>
							<FaCircleArrowUp color="#c9d3e7" size={32} title="Voltar ao topo" />
						</button>
					</div>

					<hr className="h-[2px] w-full border-t-2 border-none bg-gray-500" />
					<p className="mt-3 text-sm text-gray-600">© 2024 Criado por Bruno Franco</p>
				</div>
			</footer>
		</div>
	);
}

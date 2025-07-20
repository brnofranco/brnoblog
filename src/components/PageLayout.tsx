'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';

export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
	const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

	const toggleShowScrollToTopButtonVisibility = () =>
		window.scrollY > 250 ? setShowScrollToTopButton(true) : setShowScrollToTopButton(false);

	useEffect(() => {
		window.addEventListener('scroll', toggleShowScrollToTopButtonVisibility);

		return () => {
			window.removeEventListener('scroll', toggleShowScrollToTopButtonVisibility);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="h-full w-full">
			<header className="bg-header flex h-[4.5rem] w-full items-center justify-center py-4 shadow-lg">
				<nav className="flex w-11/12 items-center justify-between xl:max-w-[1280px]">
					<Link href="/posts" className="gap text-title flex items-center text-2xl font-extrabold">
						<Image src="/icon.svg" alt="bruno franco icon" width={26} height={26} /> rnoblog
					</Link>

					<div className="flex items-center justify-end gap-4 lg:gap-10">
						<Link href="/posts" className="text-text text-lg">
							posts
						</Link>

						<Link href="/books" className="text-text text-lg">
							livros
						</Link>

						<Link href="/about" className="text-text flex items-center gap-1 text-lg">
							sobre
						</Link>
					</div>
				</nav>
			</header>

			<div className="min-h-footer-page flex h-full w-full justify-center pt-10 pb-16">
				<div className="flex h-full w-11/12 flex-col justify-center gap-10 xl:max-w-[1280px] xl:flex-row">
					{children}
				</div>
			</div>

			<footer className="bg-header flex h-[10rem] w-full items-center justify-center py-8 shadow-lg">
				<div className="flex h-full w-4/5 flex-col xl:w-4/6">
					<div className="flex w-full items-start justify-between">
						<p className="mb-8 text-xl font-bold">brnoblog</p>
						{showScrollToTopButton && (
							<button onClick={scrollToTop}>
								<FaCircleArrowUp color="#c9d3e7" size={32} title="Voltar ao topo" />
							</button>
						)}
					</div>

					<hr className="h-[2px] w-full border-t-2 border-none bg-gray-500" />
					<p className="mt-3 text-sm text-gray-400">© 2025 Criado por Bruno Franco</p>
				</div>
			</footer>
		</div>
	);
}

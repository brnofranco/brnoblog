'use client';

import Link from 'next/link';
import { config } from '@/shared/config';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Header() {
	const pathname = usePathname();
	const basePath = pathname.split('/')[1];
	const isPostsPage = basePath === '' || basePath === 'posts';
	const isBooksPage = basePath === 'books';
	const isAboutPage = basePath === 'about';

	return (
		<header className="border-border flex w-full flex-col items-center justify-center border-b pb-8">
			<div className="flex w-full flex-col justify-center gap-6">
				<Link href="/" className="flex flex-col items-center justify-center gap-3">
					<div className="flex w-full items-center gap-4">
						<span className="bg-border h-px flex-1" />
						<p
							className="text-foreground text-center text-4xl font-semibold tracking-[0.22em] uppercase md:text-5xl"
							style={{ fontFamily: 'var(--font-title), serif' }}
						>
							Bruno Franco
						</p>
						<span className="bg-border h-px flex-1" />
					</div>
					<p className="text-text-dim text-center text-[0.68rem] tracking-[0.42em] uppercase">
						Notas, estudos e reflexões
					</p>
				</Link>

				<div className="flex justify-center gap-4">
					<Link href={config.socialMediaLinks.linkedIn} target="_blank" title="LinkedIn">
						<FaLinkedin className="text-title" size={24} />
					</Link>

					<Link href={config.socialMediaLinks.gitHub} target="_blank" title="GitHub">
						<FaGithub className="text-title" size={24} />
					</Link>

					<Link href={config.socialMediaLinks.twitter} target="_blank" title="Twitter / X">
						<FaXTwitter className="text-title" size={24} />
					</Link>
				</div>

				<nav className="flex items-center justify-center gap-10 uppercase">
					<Link
						href="/"
						aria-current={isPostsPage ? 'page' : undefined}
						className={`relative pb-1 font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:transition-transform after:duration-200 ${isPostsPage ? 'text-foreground after:bg-title after:scale-x-100' : 'text-text after:bg-border-subtle hover:text-foreground hover:after:bg-border after:scale-x-0 hover:after:scale-x-100'}`}
					>
						P O S T S
					</Link>

					<Link
						href="/books"
						aria-current={isBooksPage ? 'page' : undefined}
						className={`relative pb-1 font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:transition-transform after:duration-200 ${isBooksPage ? 'text-foreground after:bg-title after:scale-x-100' : 'text-text after:bg-border-subtle hover:text-foreground hover:after:bg-border after:scale-x-0 hover:after:scale-x-100'}`}
					>
						L E I T U R A S
					</Link>

					<Link
						href="/about"
						aria-current={isAboutPage ? 'page' : undefined}
						className={`relative pb-1 font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:transition-transform after:duration-200 ${isAboutPage ? 'text-foreground after:bg-title after:scale-x-100' : 'text-text after:bg-border-subtle hover:text-foreground hover:after:bg-border after:scale-x-0 hover:after:scale-x-100'}`}
					>
						S O B R E
					</Link>
				</nav>
			</div>
		</header>
	);
}

'use client';

import { config } from '@/shared/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Header() {
	const pathname = usePathname();
	const basePath = pathname.split('/')[1];

	return (
		<header className="flex w-full flex-col items-center justify-center">
			<div className="flex w-4/5 flex-col justify-center gap-8 py-4 xl:w-4/6">
				<Link href="/">
					<p className="flex cursor-pointer items-center justify-center text-3xl font-bold text-white">
						Bruno Franco
					</p>
				</Link>

				<div className="flex justify-center gap-4">
					<Link href={config.socialMediaLinks.linkedIn} target="_blank" title="LinkedIn">
						<FaLinkedin color="#2cb67d" size={24} />
					</Link>

					<Link href={config.socialMediaLinks.gitHub} target="_blank" title="GitHub">
						<FaGithub color="#2cb67d" size={24} />
					</Link>

					<Link href={config.socialMediaLinks.twitter} target="_blank" title="Twitter / X">
						<FaXTwitter color="#2cb67d" size={24} />
					</Link>
				</div>

				<nav className="flex justify-center gap-12">
					<Link
						href="/"
						className={`text-text text-sm font-bold ${(basePath === '' || basePath === 'posts') && 'text-white'}`}
					>
						POSTS
					</Link>

					<Link
						href="/books"
						className={`text-text text-sm font-bold ${basePath === 'books' && 'text-white'}`}
					>
						LEITURAS
					</Link>

					<Link
						href="/about"
						className={`text-text flex items-center gap-1 text-sm font-bold ${basePath === 'about' && 'text-white'}`}
					>
						SOBRE
					</Link>
				</nav>
			</div>
		</header>
	);
}

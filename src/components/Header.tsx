'use client';

import Link from 'next/link';
import { config } from '@/shared/config';
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
					<p className="text-foreground flex cursor-pointer items-center justify-center text-5xl font-bold">
						Bruno Franco
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

				<nav className="flex items-center justify-center gap-12">
					<Link
						href="/"
						className={`text-text text-sm font-bold ${(basePath === '' || basePath === 'posts') && 'text-foreground'}`}
					>
						POSTS
					</Link>

					<Link
						href="/books"
						className={`text-text text-sm font-bold ${basePath === 'books' && 'text-foreground'}`}
					>
						LEITURAS
					</Link>

					<Link
						href="/about"
						className={`text-text text-sm font-bold ${basePath === 'about' && 'text-foreground'}`}
					>
						SOBRE
					</Link>
				</nav>
			</div>
		</header>
	);
}

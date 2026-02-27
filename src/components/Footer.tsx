'use client';

import { config } from '@/shared/config';
import Link from 'next/link';

export default function Footer() {
	const today = new Date();
	const currentYear = today.getFullYear();

	return (
		<footer className="flex h-full w-full flex-col items-center justify-center">
			<div className="mb-4 flex gap-8 text-xs font-bold">
				<Link href={config.socialMediaLinks.linkedIn} target="_blank" title="LinkedIn">
					<p>LinkedIn</p>
				</Link>

				<Link href={config.socialMediaLinks.gitHub} target="_blank" title="GitHub">
					<p>GitHub</p>
				</Link>

				<Link href={config.socialMediaLinks.twitter} target="_blank" title="X | Twitter">
					<p>X | Twitter</p>
				</Link>
			</div>

			<p className="text-xs text-gray-500">© {currentYear} Criado por Bruno Franco</p>
		</footer>
	);
}

'use static';

import { config } from '@/shared/config';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { GoLink } from 'react-icons/go';

export default function SocialMediaLinks() {
	const iconSize = 36;

	return (
		<div className="flex w-full items-center justify-center gap-6">
			<Link href={config.socialMediaLinks.linkedIn} target="_blank" title="LinkedIn">
				<FaLinkedin color="#2cb67d" size={iconSize} />
			</Link>

			<Link href={config.socialMediaLinks.gitHub} target="_blank" title="GitHub">
				<FaGithub color="#2cb67d" size={iconSize} />
			</Link>

			<Link href={config.socialMediaLinks.portfolio} target="_blank" title="Portfólio">
				<GoLink color="#2cb67d" size={iconSize} />
			</Link>
		</div>
	);
}

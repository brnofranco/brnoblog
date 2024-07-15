import Link from 'next/link';
import SideBarLayout from './SideBarLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPortrait } from 'react-icons/md';

export const links = {
	linkedIn: 'https://www.linkedin.com/in/brunofmoraes/',
	gitHub: 'https://github.com/brnofranco',
	portfolio: 'https://brnofranco.vercel.app',
};

export default function SocialMediaSideBar() {
	return (
		<SideBarLayout title="Minhas redes">
			<div className="w-full flex items-center justify-center gap-6">
				<Link href={links.linkedIn} target="_blank" title="LinkedIn">
					<FaLinkedin color="#2cb67d" size="36" />
				</Link>

				<Link href={links.gitHub} target="_blank" title="GitHub">
					<FaGithub color="#2cb67d" size="36" />
				</Link>

				<Link href={links.portfolio} target="_blank" title="Portfólio">
					<MdPortrait color="#2cb67d" size="42" />
				</Link>
			</div>
		</SideBarLayout>
	);
}

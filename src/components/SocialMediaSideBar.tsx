import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SideBarLayout from './SideBarLayout';

export default function SocialMediaSideBar() {
	return (
		<SideBarLayout title="Minhas redes">
			<div className="w-full flex items-center justify-center gap-6">
				<Link href="https://www.linkedin.com/in/brunofmoraes/" target="_blank">
					<FaLinkedin color="#2cb67d" size="36" />
				</Link>

				<Link href="https://github.com/brnofranco" target="_blank">
					<FaGithub color="#2cb67d" size="36" />
				</Link>
			</div>
		</SideBarLayout>
	);
}

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialSideBar() {
	return (
		<aside className="flex items-center p-8 gap-6 bg-postBody rounded-lg flex-col">
			<h3 className="text-xl font-bold">Minhas redes</h3>
			<div className="w-full flex items-center justify-center gap-6">
				<Link href="https://github.com/brnofranco" target="_blank">
					<FaGithub color="#2cb67d" size="32" />
				</Link>
				<Link href="https://www.linkedin.com/in/brunofmoraes/" target="_blank">
					<FaLinkedin color="#2cb67d" size="32" />
				</Link>
			</div>
		</aside>
	);
}

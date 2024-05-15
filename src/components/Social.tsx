import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function SocialSideBar() {
	return (
		<aside className="flex items-center p-8 gap-6 bg-postBody rounded-lg flex-col">
			<div className="flex items-center flex-col gap-4">
				<h3 className="text-xl font-bold">Minhas redes</h3>
				<hr className="w-20 h-[1px] border-none border-t-2 bg-gray-500" />
			</div>
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

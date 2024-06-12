'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdPortrait } from 'react-icons/md';

export default function About() {
	return (
		<div className="flex-2 w-full h-full">
			<div className="h-full w-full flex justify-center">
				<div className="w-full h-full p-4 xl:p-8 bg-postBody shadow-md">
					<h1 className="font-bold text-3xl mb-12 text-center">Sobre Bruno</h1>

					<hr className="w-full h-[1px] border-none border-t-2 bg-gray-700 my-10" />

					<div className="flex flex-col xl:flex-row justify-center items-center gap-12">
						<Image
							src="https://github.com/brnofranco.png"
							width={150}
							height={150}
							alt="Foto do autor Bruno"
						/>

						<p className="text-justify">
							Desenvolvedor Full Stack com experiência em projetos corporativos de grande escala. Formação
							técnica em Informática para Internet e graduação em Análise e Desenvolvimento de Sistemas.
							Experiência em desenvolvimento Front-end utilizando React.js e Next.js, e Back-end com
							Node.js e Java. Prática na criação de Testes Unitários e Testes de Componente. Atuação em
							times com metodologia ágil Scrum, bem como realização code reviews e refinamentos técnicos.
						</p>

						<div className="flex justify-center items-center gap-4">
							<Link href="https://www.linkedin.com/in/brunofmoraes/" target="_blank" title="LinkedIn">
								<FaLinkedin color="#2cb67d" size="36" />
							</Link>

							<Link href="https://github.com/brnofranco" target="_blank" title="GitHub">
								<FaGithub color="#2cb67d" size="36" />
							</Link>

							<Link href="https://brnofranco.vercel.app" target="_blank" title="Portfólio">
								<MdPortrait color="#2cb67d" size="42" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

'use static';

import { links } from '@/components/SocialMediaSideBar';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { GoLink } from 'react-icons/go';

export default function About() {
	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col justify-center gap-12">
					<div className="flex h-full w-full flex-col gap-6 bg-postBody p-4 shadow-md xl:p-8">
						<h2 className="text-3xl font-bold">Sobre</h2>
						<p className="opacity-85">
							O objetivo deste blog é compartilhar conhecimento de várias áreas. Estou fazendo um backup
							escrito de alguns de meus estudos e pensamentos destes últimos meses. Ao longo que vou
							postando novos conteúdos irei melhorando o site esteticamente e em performance.
						</p>
					</div>

					<div className="flex h-full w-full flex-col gap-6 bg-postBody p-4 shadow-md xl:p-8">
						<h2 className="text-3xl font-bold">Autor</h2>
						<p className="opacity-85">
							Sou Bruno Franco, como o nome do blog já diz. Estou em contato com o mundo da programação
							desde 2018 e de lá pra cá percebo que cada vez mais sei que nada sei. Mas o que eu for
							aprendendo vou postando aqui.
						</p>
						<p className="opacity-85">
							Sou desenvolvedor Full Stack com experiência em projetos corporativos de grande escala.
							Tenho formação técnica em Informática para Internet e graduação em Análise e Desenvolvimento
							de Sistemas. Já trabalhei com Front-end utilizando React.js e Next.js, e Back-end com
							Node.js e Java. Prática na criação de Testes Unitários e Testes de Componente. Atuação em
							times com metodologia ágil Scrum, bem como realização code reviews e refinamentos técnicos.
						</p>
					</div>
				</div>
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<aside className="flex h-full w-full flex-col items-center gap-6 bg-postBody p-8 shadow-md">
					<Image
						src="https://github.com/brnofranco.png"
						alt="Foto de bruno"
						width={350}
						height={350}
						className="rounded-full"
					/>

					<div className="flex flex-col items-center gap-4">
						<div className="flex items-center justify-center gap-3">
							<h3 className="text-xl font-bold">Bruno Franco</h3>
							{'| |'}
							<p className="text-xl opacity-50">brnofranco</p>
						</div>
						<hr className="h-[1px] w-20 border-t-2 border-none bg-gray-500" />
					</div>

					<div className="flex w-full items-center justify-center gap-6">
						<Link href={links.linkedIn} target="_blank" title="LinkedIn">
							<FaLinkedin color="#2cb67d" size="42" />
						</Link>

						<Link href={links.gitHub} target="_blank" title="GitHub">
							<FaGithub color="#2cb67d" size="42" />
						</Link>

						<Link href={links.portfolio} target="_blank" title="Portfólio">
							<GoLink color="#2cb67d" size="42" />
						</Link>
					</div>
				</aside>
			</div>
		</>
	);
}

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
						<h2 className="text-3xl font-bold">Autor</h2>
						<p className="text-justify opacity-85">
							Estou em contato com o mundo da programação desde 2018 e de lá pra cá percebo que cada vez
							mais sei que nada sei. Mas o que eu for aprendendo vou postando aqui.
						</p>
						<p className="text-justify opacity-85">
							Sou desenvolvedor Full Stack Pleno com experiência em projetos corporativos de grande
							escala. Tenho formação técnica em Informática para Internet pela ETEC Vasco Antônio
							Venchiarutti e graduação em Análise e Desenvolvimento de Sistemas pela FATEC Jundiaí.
						</p>
						<p className="text-justify opacity-85">
							Já trabalhei com Front-end utilizando React.js e Next.js, e Back-end com Node.js e Java.
							Tenho prática na criação de Testes Unitários, Testes de Integração e Testes de Componente.
							Trabalho em times que utilizam metodologia ágil Scrum, bem como colaboro com realização Code
							Reviews, refinamentos técnicos e diagramas.
						</p>
					</div>

					<div className="flex h-full w-full flex-col gap-6 bg-postBody p-4 shadow-md xl:p-8">
						<h2 className="text-3xl font-bold">Sobre</h2>
						<p className="text-justify opacity-85">
							O objetivo deste blog é compartilhar conhecimento de várias áreas. Estou fazendo um backup
							escrito de alguns de meus estudos e pensamentos destes últimos meses. Ao longo que vou
							postando novos conteúdos irei melhorando o blog.
						</p>
					</div>
				</div>
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<aside className="flex h-full w-full flex-col items-center gap-6 bg-postBody p-8 shadow-md">
					<Image
						src="https://github.com/brnofranco.png"
						alt="Foto do Bruno"
						width={280}
						height={280}
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
							<FaLinkedin color="#2cb67d" size="36" />
						</Link>

						<Link href={links.gitHub} target="_blank" title="GitHub">
							<FaGithub color="#2cb67d" size="36" />
						</Link>

						<Link href={links.portfolio} target="_blank" title="Portfólio">
							<GoLink color="#2cb67d" size="36" />
						</Link>
					</div>
				</aside>
			</div>
		</>
	);
}

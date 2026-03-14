import Curriculum from '@/components/Curriculum';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sobre',
	description: 'Conheça Bruno Franco, desenvolvedor Full Stack com experiência em React, Node, Java e Go.',
	openGraph: {
		title: 'Sobre |  brunofranco.dev',
		description: 'Conheça Bruno Franco, desenvolvedor Full Stack com experiência em React, Node, Java e Go.',
		type: 'profile',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Sobre | brunofranco.dev',
		description: 'Conheça Bruno Franco, desenvolvedor Full Stack com experiência em React, Node, Java e Go.',
	},
};

export default function About() {
	return (
		<div className="flex h-full w-full flex-col gap-10">
			<h1 className="text-foreground mb-8 text-center text-4xl font-bold">Sobre</h1>

			<div className="flex h-full w-full flex-col gap-4">
				<p className="text-justify text-xl">
					Prazer, sou Bruno Franco. Estou em contato com o mundo da programação desde 2018 e de lá pra cá
					percebo que cada vez mais sei que nada sei.
				</p>

				<p className="text-justify text-xl">
					Meus hobbies são ler livros, jogar videogame e ouvir música. Gosto de livros de ficção científica,
					principalmente distopias. Meus jogos favoritos são FPS e de mundo aberto. Curto um bom rock
					clássico, indie e punk.
				</p>

				<p className="text-justify text-xl">
					O objetivo deste meu site é compartilhar conhecimento sobre diversos temas. Aqui, faço um registro
					dos meus estudos e reflexões recentes, criando um acervo pessoal e aberto para quem quiser aprender
					junto.
				</p>

				<p className="text-justify text-xl">
					Meu objetivo profissional é me especializar em arquitetura de software, buscando me tornar um
					arquiteto de software.
				</p>

				<p className="text-justify text-xl">
					Abaixo segue um resumo da minha trajetória, incluindo minha formação acadêmica, experiência
					profissional e as habilidades que adquiri ao longo do caminho. Se quiser saber mais detalhes, é só
					me chamar.
				</p>
			</div>

			<div className="flex h-full w-full flex-col gap-4">
				<Curriculum />
			</div>
		</div>
	);
}

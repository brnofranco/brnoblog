'use static';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Sobre',
	description: 'Conheça Bruno Franco, desenvolvedor Full Stack com experiência em React, Next.js, Node.js e Java.',
	openGraph: {
		title: 'Sobre |  brunofranco.dev',
		description:
			'Conheça Bruno Franco, desenvolvedor Full Stack com experiência em React, Next.js, Node.js e Java.',
		type: 'profile',
	},
};

export default function About() {
	return (
		<div className="flex h-full w-full flex-col gap-10">
			<h2 className="mb-8 text-center text-4xl font-bold text-white opacity-80">Sobre</h2>

			<p className="text-justify text-xl">
				Estou em contato com o mundo da programação desde 2018 e de lá pra cá percebo que cada vez mais sei que
				nada sei. Mas o que eu for aprendendo vou postando aqui.
			</p>
			<p className="text-justify text-xl">
				Sou desenvolvedor Full Stack Pleno com experiência em projetos corporativos de grande escala. Possuo
				formação técnica em Informática para Internet pela ETEC Vasco Antônio Venchiarutti e sou graduado em
				Análise e Desenvolvimento de Sistemas pela FATEC Jundiaí. Atualmente, estou cursando MBA em Arquitetura
				Full Cycle (Arquitetura de Software e DevOps) pela Faculdade Full Cycle de Tecnologia.
			</p>
			<p className="text-justify text-xl">
				Já trabalhei com Front-end utilizando React.js e Next.js, e Back-end com Node.js e Java. Tenho prática
				na criação de Testes Unitários, Testes de Integração e Testes de Componente. Trabalho em times que
				utilizam metodologia ágil Scrum, bem como colaboro com realização Code Reviews, refinamentos técnicos e
				diagramas.
			</p>

			<p className="text-justify text-xl">
				O objetivo deste blog é compartilhar conhecimento sobre diversos temas relacionados a tecnologia. Aqui,
				faço um registro dos meus estudos e reflexões recentes, criando um acervo pessoal e aberto para quem
				quiser aprender junto. Conforme eu for publicando novos conteúdos, continuarei melhorando o blog.
			</p>
		</div>
	);
}

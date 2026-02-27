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
				<h3 className="mt-4 text-justify text-2xl font-bold text-white opacity-80">Educação</h3>
				<hr className="h-[2px] w-full border-t-2 border-none bg-gray-600" />

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h4 className="text-title text-justify text-xl font-bold">
							Faculdade Full Cycle de Tecnologia
						</h4>
						<p className="opacity-80">2025 - 2026</p>
					</div>

					<p className="italic opacity-50">
						MBA em Arquitetura Full Cycle (Arquitetura de Software e DevOps)
					</p>

					<p className="text-justify text-lg">
						System Design, Bancos de Dados, Kafka, Cloud Computing, Serverless, DDD, SOLID, Design Patterns,
						Hexagonal, Clean Architecture, Microsserviços, Design Patterns e Caching, Kubernetes,
						Infrastructure as Code, Observabilidade, Liderança, Marketing Pessoal e Empreendedorismo.
					</p>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h4 className="text-title text-justify text-xl font-bold">
							Faculdade de Tecnologia de Jundiaí - Deputado Ary Fossen
						</h4>
						<p className="opacity-80">2021 - 2023</p>
					</div>

					<div className="flex items-center justify-between">
						<p className="italic opacity-50">Análise e Desenvolvimento de Sistemas</p>
						<p className="opacity-80">GPA: 9/10</p>
					</div>

					<p className="text-justify text-lg">
						Sistemas Operacionais, Matemática Discreta, Cálculo, Algoritmos, Estrutura de Dados, Banco de
						Dados, Redes de Computadores
					</p>
				</div>
			</div>

			<div className="flex h-full w-full flex-col gap-4">
				<h3 className="mt-4 text-justify text-2xl font-bold text-white opacity-80">Experiência</h3>
				<hr className="h-[2px] w-full border-t-2 border-none bg-gray-600" />

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h4 className="text-title text-justify text-xl font-bold">CI&T</h4>
						<p className="opacity-80">Remoto</p>
					</div>

					<div className="flex items-center justify-between">
						<p className="italic opacity-50">Analista de Sistemas Pleno</p>
						<p className="opacity-80">Maio/2024 - Presente</p>
					</div>

					<ul className="list-inside list-disc">
						<li className="text-justify text-lg">
							Hoje atuo como desenvolvedor back-end para um sistema interno de uma empresa multinacional
							alimentícia.
						</li>
						<li className="text-justify text-lg">
							Utilizo Node com NestJS e Typescript para criar APIs RESTful. Utilizo Go para criar serviços
							de processamento de dados.
						</li>
						<li className="text-justify text-lg">
							Atuei como desenvolvedor front-end mobile em um aplicativo interno para uma empresa
							multinacional alimentícia.
						</li>
						<li className="text-justify text-lg">
							Utilizei React Native e Typescript para criar uma interface de usuário.
						</li>
					</ul>

					<div className="flex items-center justify-between">
						<p className="italic opacity-50">Analista de Sistemas Júnior</p>
						<p className="opacity-80">Janeiro/2023 - Maio/2024</p>
					</div>

					<ul className="list-inside list-disc">
						<li className="text-justify text-lg">
							Atuei como desenvolvedor back-end em um projeto de integração de sistemas para uma empresa
							multinacional alimentícia.
						</li>
						<li className="text-justify text-lg">Utilizei Node e Typescript para criar serviços PubSub.</li>

						<li className="text-justify text-lg">
							Atuei como desenvolvedor back-end em um sistema interno para uma empresa de
							telecomunicações.
						</li>
						<li className="text-justify text-lg">Utilizei Java e Spring Boot para criar APIs RESTful.</li>
					</ul>

					<div className="flex items-center justify-between">
						<p className="italic opacity-50">Desenvolvedor Estagiário</p>
						<p className="opacity-80">Fevereiro/2022 - Janeiro/2023</p>
					</div>

					<ul className="list-inside list-disc">
						<li className="text-justify text-lg">
							Atuei como front-end em um projeto de automação de trades para uma empresa grande de
							commodities.
						</li>
						<li className="text-justify text-lg">
							Utilizei Next.js e Tailwind para criar uma interface de usuário.
						</li>
						<li className="text-justify text-lg">
							Criei testes unitários com Jest e testes de componentes utilizando Cypress.
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h4 className="text-title text-justify text-xl font-bold">Ottech</h4>
						<p className="opacity-80">Presencial</p>
					</div>

					<div className="flex items-center justify-between">
						<p className="italic opacity-50">Estagiário de Desenvolvimento de ERP Sage X3</p>
						<p className="opacity-80">Outubro/2021 - Janeiro/2022</p>
					</div>

					<ul className="list-inside list-disc">
						<li className="text-justify text-lg">
							Criei uma tela de acuracidade para uma empresa multinacional de relatórios, utilizando as
							linguagens Adonix e SQL.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

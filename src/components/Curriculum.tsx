'use client';

import { ReactNode } from 'react';

const Title = ({ title }: { title: string }) => (
	<>
		<h3 className="mt-4 text-justify text-2xl font-bold text-white opacity-80">{title}</h3>
		<hr className="h-[2px] w-full border-t-2 border-none bg-gray-600" />
	</>
);

const Topic = ({ title, complement }: { title: string; complement?: string }) => (
	<div className="flex items-center justify-between">
		<h4 className="text-title text-justify font-bold xl:text-xl">{title}</h4>
		{complement ? <p className="text-xs opacity-80 xl:text-base">{complement}</p> : null}
	</div>
);

const SubTopic = ({ title, complement }: { title: string; complement?: string }) => (
	<div className="flex items-center justify-between">
		<p className="text-sm italic opacity-50 xl:text-base">{title}</p>
		{complement ? <p className="text-xs opacity-80 xl:text-base">{complement}</p> : null}
	</div>
);

const Text = ({ children }: { children: ReactNode }) => <p className="text-justify text-lg">{children}</p>;

const List = ({ children }: { children: ReactNode }) => <ul className="list-inside list-disc">{children}</ul>;

const ListValue = ({ children }: { children: ReactNode }) => <li className="text-justify xl:text-lg">{children}</li>;

export default function Curriculum() {
	return (
		<>
			<Title title="Formação Acadêmica" />
			<div className="flex flex-col gap-8">
				<div className="flex flex-col gap-2">
					<Topic title="Faculdade Full Cycle de Tecnologia" complement="2025 - 2026" />

					<SubTopic title="MBA em Arquitetura Full Cycle (Arquitetura de Software e DevOps)" />

					<Text>
						System Design, Bancos de Dados, Kafka, Cloud Computing, Serverless, DDD, SOLID, Design Patterns,
						Hexagonal, Clean Architecture, Microsserviços, Design Patterns e Caching, Kubernetes,
						Infrastructure as Code, Observabilidade, Liderança, Marketing Pessoal e Empreendedorismo.
					</Text>
				</div>

				<div className="flex flex-col gap-2">
					<Topic title="FATEC de Jundiaí" complement="2021 - 2023" />

					<SubTopic title="Análise e Desenvolvimento de Sistemas" complement="GPA: 9/10" />

					<Text>
						Engenharia de Software, Algoritmos e Lógica de Programação, Linguagem de Programação,
						Programação Orientada a Objetos, Gestão de Equipes, Gestão e Governança de Tecnologia da
						Informação, Arquitetura e Organização de Computadores, Laboratório de Hardware, Estruturas de
						Dados, Redes de Computadores, Sistemas de Informação, Sistemas Operacionais, Segurança da
						Informação, Banco de Dados, Administração Geral, Contabilidade, Matemática Discreta, Estatística
						Aplicada, Gestão de Projetos, Empreendedorismo e Cálculo.
					</Text>
				</div>
			</div>

			<Title title="Experiência" />

			<div className="flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<Topic title="CI&T" complement="Remoto" />

					<div className="flex flex-col gap-8">
						<div className="flex flex-col gap-2">
							<SubTopic title="Analista de Sistemas Pleno" complement="Maio/2024 - Presente" />

							<List>
								<ListValue>
									Hoje atuo como desenvolvedor back-end para um sistema interno de uma empresa
									multinacional alimentícia.
								</ListValue>
								<ListValue>
									Utilizo Node com NestJS e Typescript para criar APIs RESTful. Utilizo Go para criar
									serviços de processamento de dados.
								</ListValue>
								<ListValue>
									Atuei como desenvolvedor front-end mobile em um aplicativo interno para uma empresa
									multinacional alimentícia.
								</ListValue>
								<ListValue>
									Utilizei React Native e Typescript para criar uma interface de usuário.
								</ListValue>
							</List>
						</div>

						<div className="flex flex-col gap-2">
							<SubTopic title="Analista de Sistemas Júnior" complement="Janeiro/2023 - Maio/2024" />

							<List>
								<ListValue>
									Atuei como desenvolvedor back-end em um projeto de integração de sistemas para uma
									empresa multinacional alimentícia.
								</ListValue>
								<ListValue>Utilizei Node e Typescript para criar serviços PubSub.</ListValue>
								<ListValue>
									Atuei como desenvolvedor back-end em um sistema interno para uma empresa de
									telecomunicações.
								</ListValue>
								<ListValue>Utilizei Java e Spring Boot para criar APIs RESTful.</ListValue>
							</List>
						</div>

						<div className="flex flex-col gap-2">
							<SubTopic title="Desenvolvedor Estagiário" complement="Fevereiro/2022 - Janeiro/2023" />

							<List>
								<ListValue>
									Atuei como front-end em um projeto de automação de trades para uma empresa grande de
									commodities.
								</ListValue>
								<ListValue>Utilizei Next.js e Tailwind para criar uma interface de usuário.</ListValue>
								<ListValue>
									Criei testes unitários com Jest e testes de componentes utilizando Cypress.
								</ListValue>
							</List>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<Topic title="Ottech" complement="Presencial" />

					<SubTopic title="Desenvolvedor Estagiário" complement="Outubro/2021 - Janeiro/2022" />

					<List>
						<ListValue>
							Criei uma tela de acuracidade para uma empresa multinacional de relatórios, utilizando as
							linguagens Adonix e SQL.
						</ListValue>
					</List>
				</div>
			</div>
		</>
	);
}

'use client';

import { BookCard } from '@/components/BookCard';

export default function Books() {
	return (
		<>
			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<aside className="flex h-full w-full flex-col gap-6 bg-postBody p-8 shadow-md">
					<h2 className="text-center text-3xl font-bold">Livros</h2>
					<p className="text-justify">
						Esses são os livros que li sobre programação e as minhas mais humildes recomendações.
					</p>
					<p className="text-justify">
						Cada vez menos, em nossa área, as pessoas estão utilizando livros como método de estudo, tanto
						pela velocidade da evolução das tecnologias quanto pela falta de hábito da maioria dos
						estudantes.
					</p>
					<p className="text-justify">
						Desde 2024, tenho desenvolvido o hábito da leitura. Minha motivação era ter maior facilidade e
						velocidade em ler, que é uma habilidade importante para desenvolvedores. Por isso, sigo lendo
						livros técnicos e livros para entretenimento. Fica a recomendação para sair das telas.
					</p>
					<a
						className="text-sky-500 underline"
						href="/posts/habito-de-leitura-e-livros-que-li-em-2024"
						target="_blank"
					>
						Meu post sobre leitura 2024
					</a>
				</aside>
			</div>

			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col justify-center gap-12">
					<BookCard
						title="Estruturas de Dados e Algoritmos com JavaScript"
						author="Loiane Groner"
						description="Este livro me ajudou muito a consolidar minhas bases de programação, estrutura de dados e algoritmos, principalmente pela facilidade de leitura. Apesar de ser um tema específico, atualmente muitas empresas estão usando desafios de algoritmos em seus processos seletivos, e a performance da sua resolução influencia tanto quanto a capacidade de resolver. Além disso, quanto maior sua senioridade, mais é exigido que você entenda sobre otimização."
						image="/javascript.jpg"
					/>
					<BookCard
						title="O Codificador Limpo"
						author="Bob Martin"
						description="O autor aborda vários temas não técnicos sobre como ser um profissional de TI melhor. Ele traz muitas verdades difíceis e exemplos interessantes de casos nos quais já trabalhou. Alguns processos mencionados no livro estão um pouco ultrapassados, mas as ideias principais são muito atuais e necessárias. Queria ter conhecido esse livro nos primeiros meses de estágio, teria me destacado muito, mesmo em comparação com pessoas mais técnicas, mas que falham em ser bons boas pessoas para trabalhar junto."
						image="/codificador-limpo.jpg"
					/>
					<BookCard
						title="Código Limpo: Habilidades Práticas do Agile Software"
						author="Bob Martin"
						description="Esse é o clássico e mais polêmico. O livro traz muitas propostas boas que são universais e podem ser aplicadas em qualquer projeto. Por outro lado, há ideias que parecem muito custosas de implementar, às vezes até exageradas. Tudo depende de como o projeto no qual você está trabalhando está estruturado. O ideal desse livro é entender alguns conceitos básicos para melhorar todos os seus códigos e, talvez, aprimorar a estrutura do seu projeto, se fizer sentido."
						image="/clean-code.jpg"
					/>
					<BookCard
						title="Desenvolvimento Real de Software: um Guia de Projetos Para Fundamentos em Java"
						author="Raoul-Gabriel Urma, Richard Warburton"
						description="Se você está começando com back-end, o conteúdo desse livro é essencial. Princípios de SOLID e testes automatizados são conceitos que levamos para a vida toda, usados constantemente no dia a dia de trabalho. Apesar de serem fáceis de aprender por outros meios na internet, esse livro utiliza exemplos próximos aos de um projeto real. Fiz questão de comprá-lo para aprimorar minhas compreensões quando estava trabalhando com Java."
						image="/desenvolvimento.jpg"
					/>
					<BookCard
						title="Dicas de carreira para devs"
						author="Elton Minetto"
						description="Uma ótima dica de livro de carreira. Gosto muito do autor, que é um exemplo de profissional muito inspirador. O livro aborda vários tópicos sobre como se tornar um programador melhor, tanto em termos de carreira quanto em como continuar evoluindo e sempre buscar aprender mais, nunca ficar estagnado. É outro livro que eu queria ter lido quando estava começando na área."
						image="/carreira.png"
						post="/posts/tudo-que-aprendi-com-o-livro-dicas-de-carreira-para-devs"
					/>
					<BookCard
						title="Ultra-aprendizado"
						author="Scott Young"
						description="Esse é um daqueles livros que te ensinam a estudar mais e melhor. O livro em si é inspirador e traz boas histórias, mas muitas vezes apresenta conceitos que fogem da nossa realidade. A ideia mais interessante é a organização do estudo: não estudar por estudar, mas sim ter métricas para avaliar se o estudo está evoluindo e se os objetivos estão sendo alcançados. Por vezes, já abandonei um estudo por falta de propósito e objetivo. Essas propostas ajudam muito no aprendizado contínuo."
						image="/ultraaprendizado.jpg"
						post="/posts/o-que-aprendi-com-o-livro-ultra-aprendizado-como-se-tornar-um-senior-de-2-anos"
					/>
				</div>
			</div>
		</>
	);
}

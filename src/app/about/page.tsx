'use client';

import Image from 'next/image';

export default function About() {
	return (
		<div className="flex-2 w-full h-full">
			<div className="h-full w-full flex justify-center">
				<div className="w-full h-full p-4 xl:p-8 bg-postBody shadow-md">
					<h1 className="font-bold text-3xl mb-12 text-center">Sobre Bruno</h1>

					<hr className="w-full h-[1px] border-none border-t-2 bg-gray-700 my-10" />

					<div className="flex flex-row justify-center items-center gap-12">
						<Image
							src="https://github.com/brnofranco.png"
							width={150}
							height={150}
							alt="Foto do altor Bruno"
						/>

						<p className="text-justify">
							Desenvolvedor Full Stack com experiência em projetos corporativos de grande escala. Formação
							técnica em Informática para Internet e graduação em Análise e Desenvolvimento de Sistemas.
							Experiência em desenvolvimento Front-end utilizando React.js e Next.js, e Back-end com
							Node.js e Java. Prática na criação de Testes Unitários e Testes de Componente. Atuação em
							times com metodologia ágil Scrum, bem como realização code reviews e refinamentos técnicos.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

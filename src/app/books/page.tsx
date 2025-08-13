import { BookCard } from '@/components/BookCard';
import getBooks from '@/services/getBooks';

export default async function Books() {
	const books = await getBooks();

	return (
		<>
			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<aside className="bg-post-body flex h-full w-full flex-col gap-6 p-8 shadow-md">
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
					{books.map((book) => (
						<BookCard key={book.id} book={book} />
					))}
				</div>
			</div>
		</>
	);
}

'use client';

import Link from 'next/link';
import { BookData } from '../services/getBooks';
import Image from 'next/image';

interface BookCardProps {
	book: BookData;
}

export const BookCard = ({ book }: BookCardProps) => {
	return (
		<div className="bg-post-body flex flex-col rounded-xl lg:flex-row">
			<Image
				className="mb-[-170px] rounded-t-xl lg:mb-0 lg:rounded-l-xl lg:rounded-r-none"
				style={{ width: 'auto', height: 'auto' }}
				src={book.cover.responsiveImage.src}
				height={195}
				width={140}
				alt={book.title}
				priority
			/>

			<div className="bg-post-body flex flex-col rounded-b-xl p-5 lg:rounded-l-none lg:rounded-r-xl">
				<h3 className="text-title text-2xl font-bold">{book.title}</h3>
				<p className="text-sm opacity-60">{book.author}</p>

				<p className="mt-4 text-justify">{book.description}</p>

				<div className="mt-4 flex gap-4">
					{book.postLink && (
						<Link className="text-sky-500 underline" href={book.postLink} target="_blank">
							Meu post sobre o livro
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

'use client';

import Link from 'next/link';
import { BookData } from '../services/getBooks';
import Image from 'next/image';

interface BookCardProps {
	book: BookData;
}

export const BookCard = ({ book }: BookCardProps) => {
	return (
		<div className="flex flex-col lg:flex-row">
			<Image
				className="mb-[-170px] shadow-xl lg:mb-0"
				style={{ width: 'auto', height: 'auto' }}
				src={book.cover.responsiveImage.src}
				height={195}
				width={140}
				alt={book.title}
				priority
			/>

			<div className="flex flex-col p-5">
				<h3 className="text-title text-3xl font-bold">{book.title}</h3>
				<p className="text-base opacity-60">{book.author}</p>

				<p className="mt-4 text-justify text-lg">{book.description}</p>

				<div className="mt-4 flex gap-4">
					{book.postLink && (
						<Link className="text-link underline" href={book.postLink} target="_blank">
							Meu post sobre o livro
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

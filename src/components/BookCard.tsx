'use client';

import Link from 'next/link';
import { BookData } from '../services/getBooks';
import Image from 'next/image';

interface BookCardProps {
	book: BookData;
}

export const BookCard = ({ book }: BookCardProps) => {
	return (
		<div className="border-border bg-background flex flex-col overflow-hidden rounded-[1.5rem] border shadow-[0_10px_30px_rgba(0,0,0,0.22)] lg:flex-row">
			<Image
				className="border-border mb-[-170px] border-b shadow-xl lg:mb-0 lg:border-r lg:border-b-0"
				style={{ width: 'auto', height: 'auto' }}
				src={book.cover.responsiveImage.src}
				height={195}
				width={140}
				alt={book.title}
				priority
			/>

			<div className="flex flex-col p-6">
				<h3 className="text-title text-3xl font-semibold">{book.title}</h3>
				<p className="text-text-muted text-sm tracking-[0.24em] uppercase">{book.author}</p>

				<p className="mt-4 text-justify text-lg leading-8">{book.description}</p>

				<div className="mt-4 flex gap-4">
					{book.postLink && (
						<Link
							className="text-link underline decoration-1 underline-offset-4"
							href={book.postLink}
							target="_blank"
						>
							Meu post sobre o livro
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

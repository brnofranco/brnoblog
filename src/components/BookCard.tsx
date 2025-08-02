'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BookCardProps {
	title: string;
	image: string;
	author: string;
	description: string;
	post?: string;
}

export const BookCard = ({ title, image, author, description, post }: BookCardProps) => {
	return (
		<div className="bg-post-body flex flex-col rounded-xl lg:flex-row">
			<Image
				className="mb-[-170px] rounded-t-xl lg:mb-0 lg:rounded-l-xl lg:rounded-r-none"
				style={{ width: 'auto', height: 'auto' }}
				src={image}
				height={195}
				width={140}
				alt={title}
				priority
			/>

			<div className="bg-post-body flex flex-col rounded-b-xl p-5 lg:rounded-l-none lg:rounded-r-xl">
				<h3 className="text-title text-2xl font-bold">{title}</h3>
				<p className="text-sm opacity-60">{author}</p>

				<p className="mt-4 text-justify">{description}</p>

				<div className="mt-4 flex gap-4">
					{post && (
						<Link className="text-sky-500 underline" href={post} target="_blank">
							Meu post sobre o livro
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

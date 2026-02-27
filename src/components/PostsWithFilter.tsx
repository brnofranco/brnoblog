'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PostPreview, { CategoryData, PostData } from '@/components/PostPreview';
import CategoryFilter from '@/components/CategoryFilter';

interface PostsWithFilterProps {
	allPosts: PostData[];
	allCategories: CategoryData[];
	currentPage: number;
	totalPages: number;
	initialSelectedIds?: string[];
}

export default function PostsWithFilter({
	allPosts,
	allCategories,
	currentPage,
	totalPages,
	initialSelectedIds,
}: Readonly<PostsWithFilterProps>) {
	const router = useRouter();
	const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(initialSelectedIds || []));
	const [isFirstRender, setIsFirstRender] = useState(true);

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false);
			return;
		}

		const params = new URLSearchParams();

		if (selectedIds.size > 0) {
			params.set('categories', Array.from(selectedIds).join(','));
			params.set('page', '0');
		} else if (currentPage > 0) {
			params.set('page', currentPage.toString());
		}

		const queryString = params.toString();
		router.push(queryString ? `/?${queryString}` : '/');
	}, [selectedIds, router, isFirstRender, currentPage]);

	function toggleCategory(id: string) {
		setSelectedIds((prev) => {
			const next = new Set(prev);
			if (next.has(id)) {
				next.delete(id);
			} else {
				next.add(id);
			}
			return next;
		});
	}

	function clearSelection() {
		setSelectedIds(new Set());
	}

	return (
		<div className="h-full w-full flex-2">
			<div className="mb-8 flex flex-col gap-4">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-4xl font-bold text-white">Publicações</p>

					<CategoryFilter
						allCategories={allCategories}
						selectedIds={selectedIds}
						onToggleCategory={toggleCategory}
						onClear={clearSelection}
					/>
				</div>
			</div>

			<div className="flex h-full w-full flex-col items-center gap-10">
				{allPosts.length === 0 ? (
					<p className="text-center text-sm text-zinc-400 xl:w-[1024px]">
						Nenhum post com as categorias selecionadas.
					</p>
				) : (
					allPosts.map((post: PostData, index) => (
						<PostPreview key={post.slug} post={post} isLast={allPosts.length === index + 1} />
					))
				)}
			</div>

			<div
				className={`mt-6 flex h-full w-full items-center ${currentPage === 0 ? 'justify-end' : currentPage === totalPages - 1 ? 'justify-start' : 'justify-between'}`}
			>
				{currentPage > 0 ? (
					<Link
						href={`/?page=${currentPage - 1}${selectedIds.size > 0 ? `&categories=${Array.from(selectedIds).join(',')}` : ''}`}
						className="flex h-full items-center justify-center gap-2 bg-zinc-950 p-4 text-sm font-semibold shadow-md transition hover:bg-zinc-900"
					>
						<FaChevronLeft />
						<span>Anterior</span>
					</Link>
				) : null}

				{currentPage < totalPages - 1 ? (
					<Link
						href={`/?page=${currentPage + 1}${selectedIds.size > 0 ? `&categories=${Array.from(selectedIds).join(',')}` : ''}`}
						className="flex h-full items-center justify-center gap-3 bg-zinc-950 p-4 text-sm font-semibold shadow-md transition hover:bg-zinc-900"
					>
						<span>Próximo</span>
						<FaChevronRight />
					</Link>
				) : null}
			</div>
		</div>
	);
}

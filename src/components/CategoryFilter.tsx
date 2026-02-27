'use client';

import { useRef, useState, useEffect } from 'react';
import { CategoryData } from '@/components/PostPreview';

interface CategoryFilterProps {
	allCategories: CategoryData[];
	selectedIds: Set<string>;
	onToggleCategory: (id: string) => void;
	onClear: () => void;
}

export default function CategoryFilter({
	allCategories,
	selectedIds,
	onToggleCategory,
	onClear,
}: Readonly<CategoryFilterProps>) {
	const [isOpen, setIsOpen] = useState(false);
	const popoverRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (!popoverRef.current || popoverRef.current.contains(event.target as Node)) return;
			setIsOpen(false);
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className="relative" ref={popoverRef}>
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="flex h-full cursor-pointer items-center justify-center gap-3 bg-zinc-950 p-3 text-sm font-semibold shadow-md transition hover:bg-zinc-900"
			>
				<span>Filtrar categorias</span>
				{selectedIds.size > 0 ? (
					<span className="bg-zinc-800 px-2 py-0.5 text-xs">{selectedIds.size}</span>
				) : null}
			</button>

			{isOpen ? (
				<div className="absolute right-0 z-10 mt-3 w-64 bg-zinc-950 p-4 shadow-xl">
					<div className="mb-3 flex items-center justify-between">
						<p className="text-sm font-semibold text-white">Categorias</p>
						<button
							type="button"
							onClick={onClear}
							className="text-xs font-semibold text-zinc-300 transition hover:text-white"
						>
							Limpar
						</button>
					</div>

					<div className="flex max-h-64 flex-col gap-2 overflow-auto pr-1">
						{allCategories.map((category) => {
							const isSelected = selectedIds.has(category.id);
							return (
								<label
									key={category.id}
									className="flex cursor-pointer items-center gap-2 border border-transparent px-2 py-1 text-sm text-zinc-200 transition hover:border-zinc-700"
								>
									<input
										type="checkbox"
										checked={isSelected}
										onChange={() => onToggleCategory(category.id)}
										className="h-4 w-4 border-zinc-600 bg-zinc-900 text-white"
									/>
									<span>{category.title}</span>
								</label>
							);
						})}
					</div>
				</div>
			) : null}
		</div>
	);
}

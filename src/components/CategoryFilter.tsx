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
				className="bg-surface hover:bg-surface-hover flex h-full cursor-pointer items-center justify-center gap-3 p-3 text-sm font-semibold shadow-md transition"
			>
				<span>Filtrar posts</span>
				{selectedIds.size > 0 ? (
					<span className="bg-surface-muted px-2 py-0.5 text-xs">{selectedIds.size}</span>
				) : null}
			</button>

			{isOpen ? (
				<div className="bg-surface absolute z-10 mt-3 w-64 p-4 shadow-xl xl:right-0">
					<div className="mb-3 flex items-center justify-between">
						<p className="text-foreground text-sm font-semibold">Categorias</p>
						<button
							type="button"
							onClick={onClear}
							className="text-text-subtle hover:text-foreground text-xs font-semibold transition"
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
									className="text-text-muted hover:border-border flex cursor-pointer items-center gap-2 border border-transparent px-2 py-1 text-sm transition"
								>
									<input
										type="checkbox"
										checked={isSelected}
										onChange={() => onToggleCategory(category.id)}
										className="border-border-subtle bg-surface-hover h-4 w-4 text-white"
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

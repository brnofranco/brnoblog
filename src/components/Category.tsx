import getAllCategories from '@/services/getAllCategories';
import Link from 'next/link';

export default async function CategorySideBar() {
	const allCategories = await getAllCategories();

	return (
		<aside className="w-full h-full p-8 bg-postBody rounded-lg flex flex-col gap-6">
			<div className="flex justify-center items-center flex-col gap-4">
				<h3 className="text-xl font-bold">Buscar categorias</h3>
				<hr className="w-20 h-[1px] border-none border-t-2 bg-gray-500" />
			</div>
			<div className="w-full h-full flex flex-wrap justify-center items-center gap-3">
				{allCategories.map((category) => (
					<Link href="/" key={category.id}>
						<div className="p-3 bg-background shadow-sm hover:bg-title hover:text-background transition">
							<p className="text-xs">{category.title}</p>
						</div>
					</Link>
				))}
			</div>
		</aside>
	);
}

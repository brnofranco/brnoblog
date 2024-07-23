import getCategories from '@/services/getCategories';
import Link from 'next/link';
import SideBarLayout from './SideBarLayout';

export default async function CategorySideBar() {
	const allCategories = await getCategories();

	return (
		<SideBarLayout title="Buscar por categoria">
			<div className="flex h-full w-full flex-wrap items-center justify-center gap-3">
				{allCategories.map((category) => (
					<Link
						href={{ pathname: `/posts/category/${category.title}`, query: { id: category.id } }}
						key={category.id}
					>
						<div className="bg-background p-3 shadow-sm transition hover:bg-title hover:text-background">
							<p className="text-xs">{category.title}</p>
						</div>
					</Link>
				))}
			</div>
		</SideBarLayout>
	);
}

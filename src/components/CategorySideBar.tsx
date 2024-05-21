import getCategories from '@/services/getCategories';
import Link from 'next/link';
import SideBarLayout from './SideBarLayout';

export default async function CategorySideBar() {
	const allCategories = await getCategories();

	return (
		<SideBarLayout title="Buscar por categoria">
			<div className="w-full h-full flex flex-wrap justify-center items-center gap-3">
				{allCategories.map((category) => (
					<Link href={{ pathname: `/posts/category/${category.title}`, query: { id: category.id } }} key={category.id}>
						<div className="p-3 bg-background shadow-sm hover:bg-title hover:text-background transition">
							<p className="text-xs">{category.title}</p>
						</div>
					</Link>
				))}
			</div>
		</SideBarLayout>
	);
}

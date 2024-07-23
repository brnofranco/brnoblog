import { ReactNode } from 'react';

interface SideBarLayoutProps {
	title: string;
	children: ReactNode;
}

export default function SideBarLayout({ title, children }: Readonly<SideBarLayoutProps>) {
	return (
		<aside className="flex h-full w-full flex-col items-center gap-6 bg-postBody p-8 shadow-md">
			<div className="flex flex-col items-center gap-4">
				<h3 className="text-xl font-bold">{title}</h3>
				<hr className="h-[1px] w-20 border-t-2 border-none bg-gray-500" />
			</div>

			{children}
		</aside>
	);
}

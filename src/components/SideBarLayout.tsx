import { ReactNode } from 'react';

interface SideBarLayoutProps {
	title: string;
	children: ReactNode;
}

export default function SideBarLayout({ title, children }: Readonly<SideBarLayoutProps>) {
	return (
		<aside className="w-full h-full flex items-center p-8 gap-6 bg-postBody flex-col">
			<div className="flex items-center flex-col gap-4">
				<h3 className="text-xl font-bold">{title}</h3>
				<hr className="w-20 h-[1px] border-none border-t-2 bg-gray-500" />
			</div>

			{children}
		</aside>
	);
}

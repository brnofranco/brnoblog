'use client';

import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<div className="flex h-full w-11/12 flex-col xl:max-w-[1024px]">
				<div className="flex w-full flex-col items-center justify-center py-16">
					<Header />
				</div>

				<div className="flex h-full w-full justify-center">
					<div className="flex h-full flex-col items-center justify-center">{children}</div>
				</div>

				<div className="flex w-full flex-col items-center justify-center pt-24 pb-16">
					<Footer />
				</div>
			</div>
		</div>
	);
}

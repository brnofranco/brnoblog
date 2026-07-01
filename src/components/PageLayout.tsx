'use client';

import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

export default function PageLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-6 md:px-6 md:py-10">
			<div className="border-border bg-surface flex min-h-[calc(100vh-3rem)] w-full flex-col overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_rgba(0,0,0,0.35)] xl:max-w-[1120px]">
				<div className="flex w-full flex-col items-center justify-center px-6 pt-10 pb-8 md:px-10">
					<Header />
				</div>

				<div className="flex h-full w-full justify-center px-6 pb-10 md:px-10">
					<div className="flex h-full w-full flex-col items-center justify-center">{children}</div>
				</div>

				<div className="flex w-full flex-col items-center justify-center px-6 pt-10 pb-8 md:px-10">
					<Footer />
				</div>
			</div>
		</div>
	);
}

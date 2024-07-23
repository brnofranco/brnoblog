'use client';

import LoadingAnimation from '@/components/Loading';

export default function Loading() {
	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full justify-center">
					<div className="absolute mt-[-5rem] flex h-screen items-center justify-center">
						<LoadingAnimation />
					</div>

					<div className="h-full w-full bg-postBody p-4 opacity-50 xl:p-8">
						<div className="mb-12 rounded-lg bg-slate-500 p-6 text-center text-3xl font-bold opacity-25"></div>
						<div className="rounded-lg bg-slate-500 p-2 text-center text-sm text-gray-400 opacity-25"></div>
						<hr className="my-10 h-[1px] w-full border-t-2 border-none bg-gray-700" />
						<div className="rounded-lg bg-slate-500 p-32 opacity-25 xl:p-48"></div>
					</div>
				</div>
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<div className="w-full bg-postBody p-16 opacity-50"></div>
				<div className="w-full bg-postBody p-16 opacity-50"></div>
				<div className="w-full bg-postBody p-16 opacity-50"></div>
				<div className="w-full bg-postBody p-16 opacity-50"></div>
			</div>
		</>
	);
}

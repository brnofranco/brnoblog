'use client';

import LoadingAnimatedIcon from '@/components/LoadingAnimatedIcon';

export default function Loading() {
	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col items-center gap-10">
					<div className="absolute mt-[-5rem] flex h-screen items-center justify-center">
						<LoadingAnimatedIcon />
					</div>

					<div className="flex h-full w-full flex-col gap-3">
						<div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
							<p className="w-full rounded-lg bg-slate-500 p-2 opacity-25 xl:w-64"></p>
							<div className="w-full rounded-lg bg-slate-500 p-2 opacity-25"></div>
						</div>
						<div className="bg-title rounded-lg p-2 opacity-25"></div>
						<div className="rounded-lg bg-slate-500 p-12 opacity-25"></div>
						<hr className="mt-6 h-[2px] w-full border-t-2 border-none bg-gray-600" />
					</div>

					<div className="flex h-full w-full flex-col gap-3">
						<div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
							<p className="w-full rounded-lg bg-slate-500 p-2 opacity-25 xl:w-64"></p>
							<div className="w-full rounded-lg bg-slate-500 p-2 opacity-25"></div>
						</div>
						<div className="bg-title rounded-lg p-2 opacity-25"></div>
						<div className="rounded-lg bg-slate-500 p-12 opacity-25"></div>
						<hr className="mt-6 h-[2px] w-full border-t-2 border-none bg-gray-600" />
					</div>

					<div className="flex h-full w-full flex-col gap-3">
						<div className="flex w-full flex-col items-center justify-between gap-2 xl:flex-row">
							<p className="w-full rounded-lg bg-slate-500 p-2 opacity-25 xl:w-64"></p>
							<div className="w-full rounded-lg bg-slate-500 p-2 opacity-25"></div>
						</div>
						<div className="bg-title rounded-lg p-2 opacity-25"></div>
						<div className="rounded-lg bg-slate-500 p-12 opacity-25"></div>
						<hr className="mt-6 h-[2px] w-full border-t-2 border-none bg-gray-600" />
					</div>
				</div>
			</div>

			<div className="flex h-full w-full flex-1 flex-col gap-10">
				<div className="bg-post-body w-full p-16 opacity-50"></div>
				<div className="bg-post-body w-full p-16 opacity-50"></div>
				<div className="bg-post-body w-full p-16 opacity-50"></div>
				<div className="bg-post-body w-full p-16 opacity-50"></div>
			</div>
		</>
	);
}

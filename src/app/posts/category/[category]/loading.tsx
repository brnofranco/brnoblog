'use client';

import LoadingAnimation from '@/components/Loading';

export default function Loading() {
	return (
		<>
			<div className="absolute mt-[-5rem] h-screen w-full flex justify-center items-center">
				<LoadingAnimation />
			</div>

			<div className="flex-2 w-full h-full">
				<div className="w-60 flex flex-col gap-2">
					<div className="bg-title p-2 rounded-lg opacity-25"></div>
					<div className="bg-slate-500 mb-8 p-4 rounded-lg opacity-25"></div>
				</div>

				<div className="w-full h-full flex flex-col items-center gap-10">
					<div className="h-full w-full flex flex-col gap-3">
						<div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
							<p className="w-full xl:w-64 bg-slate-500 p-2 rounded-lg opacity-25"></p>
							<div className="w-full bg-slate-500 p-2 rounded-lg opacity-25"></div>
						</div>
						<div className="bg-title p-2 rounded-lg opacity-25"></div>
						<div className="bg-slate-500 p-12 rounded-lg opacity-25"></div>
						<hr className="w-full h-[2px] border-none border-t-2 bg-gray-600 mt-6" />
					</div>

					<div className="h-full w-full flex flex-col gap-3">
						<div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
							<p className="w-full xl:w-64 bg-slate-500 p-2 rounded-lg opacity-25"></p>
							<div className="w-full bg-slate-500 p-2 rounded-lg opacity-25"></div>
						</div>
						<div className="bg-title p-2 rounded-lg opacity-25"></div>
						<div className="bg-slate-500 p-12 rounded-lg opacity-25"></div>
						<hr className="w-full h-[2px] border-none border-t-2 bg-gray-600 mt-6" />
					</div>

					<div className="h-full w-full flex flex-col gap-3">
						<div className="w-full flex flex-col xl:flex-row justify-between items-center gap-2">
							<p className="w-full xl:w-64 bg-slate-500 p-2 rounded-lg opacity-25"></p>
							<div className="w-full bg-slate-500 p-2 rounded-lg opacity-25"></div>
						</div>
						<div className="bg-title p-2 rounded-lg opacity-25"></div>
						<div className="bg-slate-500 p-12 rounded-lg opacity-25"></div>
						<hr className="w-full h-[2px] border-none border-t-2 bg-gray-600 mt-6" />
					</div>
				</div>
			</div>

			<div className="flex-1 w-full h-full flex flex-col gap-10">
				<div className="w-full p-16 bg-postBody rounded-lg opacity-50"></div>
				<div className="w-full p-16 bg-postBody rounded-lg opacity-50"></div>
				<div className="w-full p-16 bg-postBody rounded-lg opacity-50"></div>
				<div className="w-full p-16 bg-postBody rounded-lg opacity-50"></div>
			</div>
		</>
	);
}

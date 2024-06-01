'use client';

import LoadingAnimation from '@/components/Loading';

export default function Loading() {
	return (
		<>
			<div className="flex-2 w-full h-full">
				<div className="h-full w-full flex justify-center">
					<div className="mt-[-5rem] absolute h-screen flex items-center justify-center">
						<LoadingAnimation />
					</div>

					<div className="w-full h-full p-4 xl:p-8 bg-postBody opacity-50">
						<div className="font-bold text-3xl mb-12 text-center bg-slate-500 p-6 rounded-lg opacity-25"></div>
						<div className="text-gray-400 text-sm text-center bg-slate-500 p-2 rounded-lg opacity-25"></div>
						<hr className="w-full h-[1px] border-none border-t-2 bg-gray-700 my-10 " />
						<div className="bg-slate-500 p-32 xl:p-48 rounded-lg opacity-25"></div>
					</div>
				</div>
			</div>

			<div className="flex-1 w-full h-full flex flex-col gap-10">
				<div className="w-full p-16 bg-postBody opacity-50"></div>
				<div className="w-full p-16 bg-postBody opacity-50"></div>
				<div className="w-full p-16 bg-postBody opacity-50"></div>
				<div className="w-full p-16 bg-postBody opacity-50"></div>
			</div>
		</>
	);
}

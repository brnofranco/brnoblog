'use client';

import LoadingAnimatedIcon from '@/components/LoadingAnimatedIcon';

export default function Loading() {
	return (
		<>
			<div className="flex h-full w-full flex-1">
				<aside className="flex h-96 w-full items-center justify-center bg-postBody p-8 shadow-md">
					<LoadingAnimatedIcon />
				</aside>
			</div>

			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col justify-center gap-12">
					<div className="flex h-60 w-full items-center justify-center bg-postBody p-4 shadow-md xl:p-8">
						<LoadingAnimatedIcon />
					</div>

					<div className="flex h-60 w-full items-center justify-center bg-postBody p-4 shadow-md xl:p-8">
						<LoadingAnimatedIcon />
					</div>
				</div>
			</div>
		</>
	);
}

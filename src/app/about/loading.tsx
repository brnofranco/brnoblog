'use client';

import LoadingAnimatedIcon from '@/components/LoadingAnimatedIcon';

export default function Loading() {
	return (
		<>
			<div className="h-full w-full flex-2">
				<div className="flex h-full w-full flex-col justify-center gap-12">
					<div className="bg-post-body flex h-60 w-full items-center justify-center p-4 shadow-md xl:p-8">
						<LoadingAnimatedIcon />
					</div>

					<div className="bg-post-body flex h-60 w-full items-center justify-center p-4 shadow-md xl:p-8">
						<LoadingAnimatedIcon />
					</div>
				</div>
			</div>

			<div className="flex h-full w-full flex-1">
				<aside className="bg-post-body flex h-96 w-full items-center justify-center p-8 shadow-md">
					<LoadingAnimatedIcon />
				</aside>
			</div>
		</>
	);
}

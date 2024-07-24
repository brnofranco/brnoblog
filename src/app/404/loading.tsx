'use client';

import LoadingAnimatedIcon from '@/components/LoadingAnimatedIcon';

export default function Loading() {
	return (
		<div className="mt-[-5rem] flex h-screen w-full items-center justify-center">
			<LoadingAnimatedIcon />
		</div>
	);
}

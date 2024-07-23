'use client';

import LoadingAnimation from '@/components/Loading';

export default function Loading() {
	return (
		<div className="mt-[-5rem] flex h-screen w-full items-center justify-center">
			<LoadingAnimation />
		</div>
	);
}

'use client';

import LoadingAnimation from '@/components/Loading';

export default function Loading() {
	return (
		<div className="mt-[-5rem] w-full h-screen flex justify-center items-center">
			<LoadingAnimation />
		</div>
	);
}

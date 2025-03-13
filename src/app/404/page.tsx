'use static';

import Link from 'next/link';

export default function Home() {
	return (
		<div className="mt-32 flex h-full w-full flex-col items-center justify-center gap-4">
			<h1 className="text-center text-5xl font-bold">Página não encontrada!</h1>
			<Link href="/posts">
				<p className="text-xl text-title underline">Voltar para Home</p>
			</Link>
		</div>
	);
}

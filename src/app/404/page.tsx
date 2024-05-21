'use static';

import Link from 'next/link';

export default function Home() {
	return (
		<div className="h-full w-full flex justify-center items-center flex-col gap-4 mt-32">
			<h1 className="text-5xl font-bold text-center">Página não encontrada!</h1>
			<Link href="/">
				<p className="underline text-title text-xl">Voltar para Home</p>
			</Link>
		</div>
	);
}

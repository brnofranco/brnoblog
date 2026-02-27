'use static';

export default function NotFound() {
	return (
		<div className="flex h-full w-full flex-col gap-10 p-16">
			<h2 className="mb-8 text-center text-4xl font-bold text-white opacity-80">Página não encontrada</h2>
			<p className="text-justify text-xl">Este link não existe ou não está mais disponível.</p>
		</div>
	);
}

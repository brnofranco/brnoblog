import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
	return (
		<div className="h-screen w-full flex flex-col justify-between items-center">
			<div className="w-full">
				<Header />
			</div>

			<div className="h-full w-full flex justify-center items-center flex-col gap-4">
				<h1 className="text-3xl font-bold">Página não encontrada!</h1>
				<Link href="/">
					<p className="underline text-title">Voltar para Home</p>
				</Link>
			</div>

			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
}

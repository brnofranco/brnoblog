export default function Footer() {
	return (
		<footer className="h-full w-full flex justify-center items-center bg-header shadow-lg py-8 mt-12">
			<div className="h-full w-4/5 xl:w-4/6 flex flex-col">
				<p className="text-xl font-bold mb-8">brnoblog</p>

				<hr className="w-full h-[2px] border-none border-t-2 bg-gray-500" />
				<p className="text-gray-600 text-sm mt-3">© 2024 Criado por Bruno Franco</p>
			</div>
		</footer>
	);
}

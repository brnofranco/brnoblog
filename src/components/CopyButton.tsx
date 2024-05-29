'use client';

import { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

export default function CopyButton({ code }: Readonly<{ code: string }>) {
	const [isChecked, setIsChecked] = useState(false);

	const copyEmailToClipBoard = () => {
		navigator.clipboard.writeText(code);
		setIsChecked(true);

		setInterval(() => {
			setIsChecked(false);
		}, 2000);
	};

	return (
		<button onClick={copyEmailToClipBoard} title="Copiar código">
			{isChecked ? <FaCheck /> : <FaRegCopy />}
		</button>
	);
}

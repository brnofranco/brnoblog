'use static';

import { redirect } from 'next/navigation';

export default function GlobalNotFound() {
	redirect('/404');
}

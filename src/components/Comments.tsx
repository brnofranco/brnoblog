'use client';

import { useEffect, useRef } from 'react';
import { config } from '@/shared/config';

export default function Comments() {
	const commentsSection = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = config.utteranc.src;
		script.async = true;
		script.crossOrigin = config.utteranc.crossorigin;
		script.setAttribute('repo', config.utteranc.repo);
		script.setAttribute('issue-term', config.utteranc.issueTerm);
		script.setAttribute('theme', config.utteranc.theme);
		commentsSection.current.appendChild(script);
	}, []);

	return <div ref={commentsSection} />;
}

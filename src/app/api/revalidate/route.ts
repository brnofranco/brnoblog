import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

interface DatoEntity {
	attributes?: {
		slug?: string;
	};
}

interface DatoWebhookBody {
	entity?: DatoEntity;
	record?: {
		slug?: string;
	};
	slug?: string;
}

function getSlug(body: DatoWebhookBody): string | undefined {
	return body.entity?.attributes?.slug ?? body.record?.slug ?? body.slug;
}

export async function POST(request: NextRequest) {
	const secret = request.nextUrl.searchParams.get('secret');

	if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
		return NextResponse.json({ revalidated: false, message: 'Invalid secret' }, { status: 401 });
	}

	let body: DatoWebhookBody = {};

	try {
		body = (await request.json()) as DatoWebhookBody;
	} catch {
		body = {};
	}

	const slug = getSlug(body);

	revalidatePath('/');
	revalidatePath('/posts');
	revalidatePath('/sitemap.xml');

	if (slug) {
		revalidatePath(`/posts/${slug}`);
	}

	return NextResponse.json({ revalidated: true, slug: slug ?? null, now: Date.now() });
}

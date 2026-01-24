import { NextResponse } from 'next/server';
import { contactRequestSchema, createContactRequest } from '@/lib/contactRequests';

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = contactRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Validation error',
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const headers = req.headers;
    const meta = {
      userAgent: headers.get('user-agent') ?? undefined,
      referer: headers.get('referer') ?? undefined,
      origin: headers.get('origin') ?? undefined,
    };

    const created = await createContactRequest({ input: parsed.data, meta });

    return NextResponse.json({ ok: true, id: created.id });
  } catch (err) {
    const isDev = process.env.NODE_ENV === 'development';
    const message = err instanceof Error ? err.message : 'Unknown error';
    return NextResponse.json(
      { ok: false, error: isDev ? message : 'Internal error' },
      { status: 500 },
    );
  }
}


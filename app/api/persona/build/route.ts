import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import crypto from 'crypto';

export const runtime = 'edge';

type UploadMeta = { field: string; url: string; pathname: string; size: number; type: string };

export async function POST(req: Request) {
  try {
    // multipart formdata
    const form = await req.formData();

    const userId = String(form.get('userId') || '').trim();
    if (!userId) {
      return NextResponse.json({ ok: false, error: 'userId is required' }, { status: 400 });
    }

    // velden die we accepteren
    const fields = ['chatfile', 'photo', 'clip'] as const;
    const uploads: UploadMeta[] = [];

    // Vercel Blob token, voor lokaal kun je ook een dev token zetten, in productie zet je de env in Vercel
    const token = process.env.BLOB_READ_WRITE_TOKEN;
    if (!token) {
      // Voor lokale dev zonder token, geef nette fout
      // Wil je alsnog lokaal opslaan, dan doen we dat in stap 2b, nu focussen we op Blob
    }

    for (const field of fields) {
      const f = form.get(field);
      if (!f || typeof f === 'string') continue;

      const file = f as File;
      const arrayBuf = await file.arrayBuffer();

      const ext = file.name.includes('.') ? file.name.split('.').pop() : 'bin';
      const hash = crypto.createHash('sha1').update(arrayBuf).digest('hex').slice(0, 8);
      const key = `uploads/${userId}/${field}-${Date.now()}-${hash}.${ext}`;

      const { url, pathname } = await put(key, new Uint8Array(arrayBuf), {
        access: 'public',
        token, // moet in productie gezet zijn
        contentType: file.type || 'application/octet-stream'
      });

      uploads.push({
        field,
        url,
        pathname,
        size: arrayBuf.byteLength,
        type: file.type || 'application/octet-stream'
      });
    }

    const personaId = `p_${userId}_${Date.now()}`;

    return NextResponse.json({
      ok: true,
      persona: { id: personaId, userId, status: uploads.length ? 'uploaded' : 'empty' },
      uploads
    });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'upload failed' }, { status: 500 });
  }
}

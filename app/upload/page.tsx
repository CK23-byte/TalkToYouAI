'use client';

import { useState } from 'react';

type BuildResp = {
  ok: boolean;
  persona: { id: string; userId: string; status: string };
  uploads: { field: string; url: string }[];
  error?: string;
};

export default function UploadPage() {
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState<BuildResp | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="p-6 max-w-xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Persona upload</h1>
      <form
        className="space-y-3"
        onSubmit={async e => {
          e.preventDefault();
          setLoading(true);
          setError(null);
          setResp(null);
          try {
            const fd = new FormData(e.currentTarget as HTMLFormElement);
            fd.set('userId', 'devuser');
            const res = await fetch('/api/persona/build', { method: 'POST', body: fd });
            const json = (await res.json()) as BuildResp;
            if (!res.ok || !json.ok) throw new Error(json.error || 'upload failed');
            setResp(json);
            sessionStorage.setItem('personaId', json.persona.id);
          } catch (err: any) {
            setError(err.message || 'upload failed');
          } finally {
            setLoading(false);
          }
        }}
      >
        <div>
          <label className="block text-sm">Chatfile</label>
          <input name="chatfile" type="file" accept=".txt,.md,.json" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm">Photo</label>
          <input name="photo" type="file" accept="image/*" className="border p-2 w-full" />
        </div>
        <div>
          <label className="block text-sm">Clip</label>
          <input name="clip" type="file" accept="video/*,audio/*" className="border p-2 w-full" />
        </div>
        <button type="submit" disabled={loading} className="px-4 py-2 rounded bg-black text-white">
          {loading ? 'Uploading...' : 'Upload persona'}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {resp && (
        <div className="border rounded p-3 space-y-2">
          <p className="font-medium">Persona: {resp.persona.id}</p>
          <ul className="list-disc pl-5 text-sm">
            {resp.uploads.map((u, i) => (
              <li key={i}><a className="underline" href={u.url} target="_blank" rel="noreferrer">{u.field}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

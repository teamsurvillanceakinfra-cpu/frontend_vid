"use client";

import { useState } from 'react';

interface DownloaderFormProps {
  platform?: string; // Optional: specific platform name
}

export default function DownloaderForm({ platform = "Any Platform" }: DownloaderFormProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<any>(null);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!url) {
      setError("Please paste a valid Video URL to begin.");
      return;
    }

    try { new URL(url); } catch {
      setError("Invalid format. Make sure you copy the entire link (https://...).");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Processing failed.');

      setResult({
        platform: data.data.platform,
        title: data.data.title || `${data.data.platform} Media`,
        thumbnail: data.data.thumbnail || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=640&h=360",
        qualityOptions: data.data.qualityOptions || [],
      });
    } catch (err: any) {
      setError(err.message || "Extraction timeout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="downloader-wrapper" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2" style={{ alignItems: 'center' }}>
        <div className="search-bar-wrapper" style={{ width: '100%', maxWidth: '750px', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '1rem', padding: '0.4rem', display: 'flex', alignItems: 'center', transition: 'box-shadow 0.2s, border-color 0.2s', boxShadow: 'var(--shadow-hover)' }}>
          <input 
            type="text" 
            placeholder={`Paste ${platform === 'Any Platform' ? 'video' : platform} URL here...`} 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="search-input"
            style={{ flex: 1, padding: '1rem 1.5rem', border: 'none', background: 'transparent', color: 'var(--foreground)', fontSize: '1.05rem', outline: 'none' }}
            onFocus={(e) => { e.currentTarget.parentElement!.style.borderColor = 'var(--primary)'; }}
            onBlur={(e) => { e.currentTarget.parentElement!.style.borderColor = 'var(--border)'; }}
          />
          <button type="button" onClick={handlePaste} className="btn btn-secondary" style={{ margin: '0 0.25rem', whiteSpace: 'nowrap' }} title="Paste Link">
            Paste
          </button>
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ padding: '0.8rem 2rem', marginLeft: '0.25rem', whiteSpace: 'nowrap' }}>
            {loading ? 'Analyzing...' : 'Download 👇'}
          </button>
        </div>
        
        {error && <div style={{ color: '#ef4444', fontSize: '0.95rem', fontWeight: 500, marginTop: '0.5rem' }}>{error}</div>}
      </form>

      {result && (
        <div className="result-container flex flex-col items-center" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', animation: 'fadeIn 0.4s ease-out', width: '100%', maxWidth: '750px', boxShadow: 'var(--shadow)' }}>
          <div className="flex" style={{ gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap', width: '100%' }}>
            <div style={{ flex: '1 1 200px', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid var(--border)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={result.thumbnail} alt="Ref" style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }} />
            </div>
            <div className="flex flex-col" style={{ flex: '2 1 250px', gap: '1rem', textAlign: 'left' }}>
              <p style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--foreground)' }}>{result.title}</p>
              <div className="flex flex-col gap-2">
                {result.qualityOptions.map((q: any, i: number) => (
                  <a key={i} href={`/api/proxy?url=${encodeURIComponent(q.url)}&ext=${q.ext || 'mp4'}`} download target="_blank" rel="noopener noreferrer" className="btn btn-secondary flex justify-between" style={{ width: '100%', padding: '0.8rem 1rem', background: 'var(--secondary)', border: '1px solid var(--border)' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = '#fff' }} onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--secondary)'; e.currentTarget.style.color = 'var(--foreground)' }}>
                    <span style={{ fontWeight: 600 }}>{q.resolution} - {q.ext.toUpperCase()}</span>
                    <span>Download 📥</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

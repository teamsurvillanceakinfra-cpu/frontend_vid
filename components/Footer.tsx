import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border)', background: 'var(--background)', padding: '4rem 0 2rem', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              VidSnatcher <span style={{ color: 'var(--foreground)'}}>AI</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '400px' }}>
              The ultimate universal video downloading platform driven by AI technology. Experience fast, secure, and watermark-free downloads from all your favorite social networks in one place.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '1.25rem', color: 'var(--foreground)' }}>Downloaders</h4>
            <div className="flex flex-col gap-3" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <Link href="/instagram">Instagram</Link>
              <Link href="/facebook">Facebook</Link>
              <Link href="/twitter">Twitter/X</Link>
              <Link href="/tiktok">TikTok</Link>
              <Link href="/pinterest">Pinterest</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: '600', marginBottom: '1.25rem', color: 'var(--foreground)' }}>Company</h4>
            <div className="flex flex-col gap-3" style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Support</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} VidSnatcher AI. All rights reserved.</p>
          <div className="social-links flex gap-4">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Discord">👾</a>
            <a href="#" aria-label="GitHub">🐙</a>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .footer a:hover { color: var(--primary); transition: var(--transition); }
      `}} />
    </footer>
  );
}

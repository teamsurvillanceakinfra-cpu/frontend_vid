import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | VidSnatcher AI',
  description: 'Your privacy is our priority. Read about how we handle data and protect your identity at VidSnatcher AI.'
};

export default function PrivacyPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div className="privacy-page" style={{ paddingTop: '6rem', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="privacy-hero" style={{ padding: '4rem 0 3rem', textAlign: 'center', background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--foreground)', letterSpacing: '-1px' }}>
            Privacy <span style={{ color: 'var(--primary)' }}>Policy</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Last updated: {lastUpdated} • We are committed to protecting your personal data and your right to privacy.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="privacy-content" style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="card" style={{ padding: '3rem', border: '1px solid var(--border)', background: 'var(--card-bg)' }}>
            <div className="policy-section" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--foreground)' }}>1. Introduction</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                Welcome to VidSnatcher AI. This Privacy Policy explains how our platform collects, uses, and safeguards your information when you visit our website or use our video extraction services.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                By using VidSnatcher AI, you consent to the data practices described in this policy. We take your privacy seriously and have designed our systems to minimize data collection.
              </p>
            </div>

            <div className="policy-section" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--foreground)' }}>2. Zero-Log Policy</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                At VidSnatcher AI, we maintain a strict **Zero-Log Policy** regarding the media you process through our service.
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: 'var(--text-muted)' }}>We do not store copies of the videos you download.</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: 'var(--text-muted)' }}>We do not maintain a history of the URLs you paste.</span>
                </li>
                <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span style={{ color: 'var(--text-muted)' }}>Temporary processing files are automatically wiped within 60 minutes.</span>
                </li>
              </ul>
            </div>

            <div className="policy-section" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--foreground)' }}>3. Information We Collect</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1rem' }}>
                When you visit VidSnatcher AI, we may collect basic technical information to ensure website stability and performance:
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                • **Device Information:** Browser type, operating system, and IP address (anonymized for analytics).<br />
                • **Usage Data:** Pages visited, duration of visit, and interaction with our extraction interface.
              </p>
            </div>

            <div className="policy-section" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--foreground)' }}>4. Cookies and Tracking</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                We use essential cookies to manage your preferences and technical session data. We may also use third-party analytics (like Google Analytics) to improve our service, which uses cookies to track visitor interactions in an aggregated way.
              </p>
            </div>

            <div className="policy-section" style={{ marginBottom: '2.5rem' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--foreground)' }}>5. Third-Party Links</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
                Our website links to external video platforms (Instagram, YouTube, etc.). We do not control their privacy policies. Please review the privacy terms of any platform from which you are extracting media.
              </p>
            </div>

            <div className="policy-section" style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Questions about our policy?</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                If you have any questions regarding your data privacy, feel free to reach out to our team.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ borderRadius: '2rem', padding: '0.75rem 2rem' }}>Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .policy-section h2 { letter-spacing: -0.02em; }
        .policy-section p { font-size: 1.05rem; }
      `}} />
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | VidSnatcher AI',
  description: 'Learn about our mission to simplify video downloading across the web.'
};

export default function AboutPage() {
  return (
    <div className="about-page" style={{ paddingTop: '6rem' }}>
      {/* Hero Section */}
      <section className="about-hero" style={{ padding: '4rem 0 6rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--foreground)', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
            Redefining Media <br />
            <span style={{
              background: 'linear-gradient(90deg, var(--primary), var(--highlight))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Extraction for the Modern Web.</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
            Say goodbye to ad-infested landing pages and broken download links. VidSnatcher AI seamlessly auto-routes, unblocks, and retrieves original quality media from over 50 platforms instantly.
          </p>

          <div className="stats-row flex justify-center gap-8" style={{ flexWrap: 'wrap', marginTop: '2rem' }}>
            <div className="stat-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--foreground)' }}>1M+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Media Extracted</div>
            </div>
            <div className="stat-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--foreground)' }}>99.9%</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Uptime SLA</div>
            </div>
            <div className="stat-card" style={{ padding: '1rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--foreground)' }}>50+</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>Supported Sites</div>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '60%', height: '80%', background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: 0, borderRadius: '50%' }}></div>
      </section>

      {/* Split Mission Section */}
      <section className="about-mission" style={{ padding: '5rem 0', background: 'var(--secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="flex items-center gap-8 flex-col-reverse md:flex-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div className="mission-text">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.5px' }}>Our Mission</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                We built VidSnatcher AI because we were tired of the status quo. The internet demanded a clean, reliable, and privacy-respecting tool to preserve digital memories and creative references without compromising security.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                By leveraging edge proxies and intelligent parsing algorithms, we can bypass geo-restrictions and platform anti-scraping measures, delivering a 100% success rate on supported media types.
              </p>
            </div>
            <div className="mission-image" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
              <Image src="/images/about-hero.png" width={600} height={400} alt="AI Cloud Media Extraction" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid System */}
      <section className="about-features" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Why Choose VidSnatcher?</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div className="card hover-lift" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Unified Experience</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Stop bookmarking different tools for Instagram, YouTube, and TikTok. Just paste the link, and we auto-route it securely.</p>
            </div>

            <div className="card hover-lift" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Privacy First Architecture</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We employ zero-log policies. Your IP and downloaded content are instantly wiped from our memory servers post-extraction.</p>
            </div>

            <div className="card hover-lift" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💎</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Premium SaaS Interface</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Enjoy a clean, distraction-free environment. No deceptive "Download Here" buttons, no popunders, just pure utility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" style={{ padding: '5rem 0', background: 'var(--card-bg)', borderTop: '1px solid var(--border)' }}>
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-0.5px', textAlign: "center" }}>Ready to simplify your workflow?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            Join thousands of creators and marketers who trust VidSnatcher for their daily media extraction needs.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem', fontSize: '1.1rem', borderRadius: '3rem' }}>Start Downloading Free</Link>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hover-lift:hover { transform: translateY(-5px); box-shadow: var(--shadow-hover) !important; }
      `}} />
    </div>
  );
}

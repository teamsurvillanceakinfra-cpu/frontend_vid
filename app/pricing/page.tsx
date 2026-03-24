import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Tokens | VidSnatcher AI',
  description: 'Recharge your account with tokens for high-quality downloads.'
};

export default function PricingPage() {
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--foreground)', letterSpacing: '-1px' }}>Simple Token Pricing</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>Every new account gets 10 free tokens. Each download costs 5 tokens.</p>
      </div>

      <div className="flex" style={{ gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Free Plan */}
        <div className="card plan-card flex flex-col" style={{ flex: '1 1 350px', padding: '3rem 2.5rem', borderTop: '4px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 600 }}>Sign Up Bonus</h2>
          <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>10<span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 400 }}> Tokens</span></div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Automatically credited to new accounts.</p>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1 }}>
            <li className="flex items-center gap-3">✓ 2 Free Downloads (5 tokens each)</li>
            <li className="flex items-center gap-3">✓ Maximum Quality (4K/8K)</li>
            <li className="flex items-center gap-3">✓ Supported Platforms: All</li>
            <li className="flex items-center gap-3">✓ 100% Ad-Free Experience</li>
          </ul>
          
          <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem', borderRadius: '3rem', fontWeight: 600, fontSize: '1.1rem' }}>Create Free Account</button>
        </div>

        {/* Recharge Plan */}
        <div className="card plan-card flex flex-col" style={{ flex: '1 1 350px', padding: '3rem 2.5rem', border: '2px solid var(--primary)', position: 'relative', transform: 'scale(1.02)', boxShadow: '0 20px 40px -15px rgba(79, 70, 229, 0.2)' }}>
          <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>Standard Recharge</div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--primary)', fontWeight: 600 }}>Token Pack</h2>
          <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>₹200<span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 400 }}>/pack</span></div>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Includes 100 Tokens (20 Downloads).</p>
          
          <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2.5rem 0', display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: 1 }}>
            <li className="flex items-center gap-3">✓ 100 Tokens instantly credited</li>
            <li className="flex items-center gap-3">✓ Lightning Fast Priority Servers</li>
            <li className="flex items-center gap-3">✓ Tokens never expire</li>
            <li className="flex items-center gap-3">✓ Batch Downloading Support</li>
          </ul>
          
          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', borderRadius: '3rem', fontWeight: 600, fontSize: '1.1rem', background: 'linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%)' }}>Recharge Now</button>
        </div>
      </div>
    </div>
  );
}

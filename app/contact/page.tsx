import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | VidSnatcher AI',
  description: 'Get in touch with the VidSnatcher AI team.'
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '6rem 0' }}>
      <div className="flex" style={{ gap: '5rem', flexWrap: 'wrap', maxWidth: '1100px', margin: '0 auto' }}>
        
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--foreground)', letterSpacing: '-1px' }}>Get in Touch</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: 1.7 }}>
            Have a question, feedback, or a partnership inquiry? Fill out the form and our deeply responsive AI-human hybrid team will get back to you within 24 hours.
          </p>
          
          <div className="flex flex-col" style={{ gap: '2rem' }}>
            <div className="flex items-center gap-4">
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.25rem' }}>✉️</div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Email Support</h3>
                <p style={{ color: 'var(--text-muted)' }}>support@vidsnatcher.ai</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.25rem' }}>💼</div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Business Inquiries</h3>
                <p style={{ color: 'var(--text-muted)' }}>partners@vidsnatcher.ai</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', fontSize: '1.25rem' }}>🐦</div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Twitter/X</h3>
                <p style={{ color: 'var(--text-muted)' }}>@VidSnatcherAI</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ flex: '1 1 450px', padding: '3rem', borderTop: '4px solid var(--primary)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Full Name</label>
              <input type="text" id="name" placeholder="John Doe" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none' }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none' }} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Subject</label>
              <select id="subject" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none', appearance: 'none', cursor: 'pointer' }}>
                <option value="support">General Support</option>
                <option value="billing">Billing Inquiry</option>
                <option value="bug">Report a Bug</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5" style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Message</label>
              <textarea id="message" rows={5} placeholder="How can we help you?" style={{ width: '100%', padding: '0.9rem 1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ padding: '1.1rem', width: '100%', fontWeight: 700, borderRadius: '3rem', fontSize: '1.05rem' }}>Send Message 🚀</button>
          </form>
        </div>

      </div>
    </div>
  );
}

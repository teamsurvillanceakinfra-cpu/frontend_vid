import DownloaderForm from '@/components/DownloaderForm';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return [
    { platform: 'instagram' },
    { platform: 'facebook' },
    { platform: 'twitter' },
    { platform: 'tiktok' },
    { platform: 'dailymotion' },
    { platform: 'pinterest' },
  ];
}

const platformMap: Record<string, {name: string, icon: string, desc: string}> = {
  instagram: { name: 'Instagram', icon: '📸', desc: 'Download Instagram Reels, Stories, and IGTV videos in HD.' },
  facebook: { name: 'Facebook', icon: '📘', desc: 'Save Facebook videos to your device quickly and securely.' },
  twitter: { name: 'Twitter/X', icon: '🐦', desc: 'Download viral videos from Twitter/X without watermarks.' },
  tiktok: { name: 'TikTok', icon: '🎵', desc: 'Download TikToks without the watermark in pristine quality.' },
  dailymotion: { name: 'Dailymotion', icon: '📺', desc: 'Download high-quality videos from Dailymotion easily and securely.' },
  pinterest: { name: 'Pinterest', icon: '📌', desc: 'Download Pinterest video pins and boards in native HD.' },
};

export async function generateMetadata({ params }: { params: Promise<{ platform: string }> }): Promise<Metadata> {
  const { platform } = await params;
  const data = platformMap[platform.toLowerCase()];
  if (!data) return { title: 'Not Found' };
  
  return {
    title: `${data.name} Video Downloader | VidSnatcher AI`,
    description: data.desc,
  };
}

export default async function PlatformPage({ params }: { params: Promise<{ platform: string }> }) {
  const { platform } = await params;
  const data = platformMap[platform.toLowerCase()];
  
  if (!data) {
    notFound();
  }

  return (
    <div className="platform-page" style={{ padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative' }}>
          <div className="glow-bg" style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '30%', height: '150%', background: 'var(--highlight)', filter: 'blur(100px)', opacity: 0.15, zIndex: -1, pointerEvents: 'none', borderRadius: '50%' }}></div>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{data.icon}</div>
          <h1 className="hero-h1" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-1px' }}>{data.name} Video <span style={{ background: 'var(--highlight)', color: '#000', padding: '0 0.5rem', display: 'inline-block', borderRadius: '0.5rem', transform: 'rotate(-2deg)' }}>Downloader</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            {data.desc}
          </p>
        </div>
        
        <DownloaderForm platform={data.name} />
        
        <div className="platform-features" style={{ marginTop: '6rem', background: 'var(--secondary)', margin: '6rem -1.5rem 0 -1.5rem', padding: '4rem 1.5rem', borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 700 }}>How to download {data.name} videos</h2>
            <div className="flex" style={{ gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div className="card text-center flex-1" style={{ minWidth: '280px', border: 'none', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '1rem', background: 'var(--background)', color: 'var(--primary)', border: '1px solid var(--border)', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem auto', boxShadow: 'var(--shadow)' }}>1</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700 }}>Copy the link</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Find the video on {data.name} and copy its URL from the share menu or address bar.</p>
              </div>
              <div className="card text-center flex-1" style={{ minWidth: '280px', border: 'none', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '1rem', background: 'var(--background)', color: 'var(--primary)', border: '1px solid var(--border)', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem auto', boxShadow: 'var(--shadow)' }}>2</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700 }}>Paste the link</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Paste the copied link into the input field above and click "Download Now".</p>
              </div>
              <div className="card text-center flex-1" style={{ minWidth: '280px', border: 'none', background: 'var(--card-bg)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '1rem', background: 'var(--background)', color: 'var(--primary)', border: '1px solid var(--border)', fontSize: '1.5rem', fontWeight: 'bold', margin: '0 auto 1.5rem auto', boxShadow: 'var(--shadow)' }}>3</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 700 }}>Save to device</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Choose your preferred video quality and format to save the file locally securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

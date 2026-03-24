"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <header className="navbar" style={{ 
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, 
      background: isScrolled ? (theme === 'dark' ? 'rgba(11, 30, 38, 0.85)' : 'rgba(255, 255, 255, 0.85)') : 'transparent',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: isScrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease'
    }}>
      <div className="container flex items-center justify-between" style={{ height: isScrolled ? '4rem' : '5rem', transition: 'height 0.3s ease' }}>
        <Link href="/" className="logo flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--primary)', letterSpacing: '-0.5px' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          VidSnatcher <span style={{ color: 'var(--foreground)'}}>AI</span>
        </Link>
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <nav className={`nav-links flex gap-6 items-center ${menuOpen ? 'mobile-open' : ''}`} style={{ fontSize: '0.95rem', fontWeight: 500 }}>
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <div className="dropdown" style={{ position: 'relative', padding: '1rem 0', cursor: 'pointer' }} onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span>Downloaders {dropdownOpen ? '▴' : '▾'}</span>
            <div className={`dropdown-menu card flex-col gap-1 ${dropdownOpen ? 'mobile-dropdown-open' : ''}`} style={{ display: 'none', position: 'absolute', top: '100%', left: '-1rem', minWidth: '220px', padding: '0.5rem', zIndex: 100 }}>
              <Link href="/instagram" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>Instagram Downloader</Link>
              <Link href="/youtube" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>YouTube Downloader</Link>
              <Link href="/facebook" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>Facebook Downloader</Link>
              <Link href="/twitter" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>Twitter/X Downloader</Link>
              <Link href="/tiktok" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>TikTok Downloader</Link>
              <Link href="/dailymotion" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>Dailymotion Downloader</Link>
              <Link href="/pinterest" onClick={() => setMenuOpen(false)} style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius)' }}>Pinterest Downloader</Link>
            </div>
          </div>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          
          <div className="flex items-center gap-4" style={{ marginLeft: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--border)' }}>
            <select className="language-selector" style={{ background: 'transparent', color: 'var(--foreground)', border: 'none', cursor: 'pointer', outline: 'none', fontSize: '0.9rem', fontWeight: 600 }}>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            
            <button onClick={toggleTheme} className="theme-toggle flex items-center justify-center" style={{ background: 'var(--secondary)', border: '1px solid var(--border)', width: '30px', height: '30px', borderRadius: '50%', color: 'var(--foreground)', cursor: 'pointer' }} aria-label="Toggle Theme">
              {mounted && (theme === 'dark' ? '☀️' : '🌙')}
            </button>
          </div>
        </nav>
      </div>
{/* Minimal inline CSS for hover interactions */}
<style dangerouslySetInnerHTML={{__html: `
@media (min-width: 769px) { .dropdown:hover .dropdown-menu { display: flex !important; } }
@media (max-width: 768px) { .dropdown-menu.mobile-dropdown-open { display: flex !important; } }
.dropdown-menu a:hover { background: var(--secondary); color: var(--primary); }
.nav-links > a:hover, .dropdown > span:hover { color: var(--primary); transition: var(--transition); }
`}} />
    </header>
  );
}

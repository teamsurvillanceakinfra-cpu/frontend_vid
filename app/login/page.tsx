"use client";

import { useState } from 'react';
import Link from 'next/link';
import { auth, googleProvider, signInWithPopup } from '../../lib/firebase';

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Authentication failed");

      localStorage.setItem("token", data.data.token);
      window.location.href = "/"; // redirect to home
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError("");
    
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken();
      
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Google Authentication failed through backend");

      localStorage.setItem("token", data.data.token);
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "Google Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="container flex justify-center items-center flex-col" style={{ minHeight: 'calc(100vh - var(--header-h) - 100px)', padding: '4rem 0' }}>
      <div className="card" style={{ width: '100%', maxWidth: '420px', padding: '3rem 2.5rem', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>{isLogin ? "Welcome Back" : "Create Account"}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>{isLogin ? "Sign in to continue to your dashboard" : "Sign up to get 10 free tokens"}</p>
        </div>

        <form onSubmit={handleEmailAuth} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Email</label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="name@example.com" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none' }} />
          </div>
          <div className="flex flex-col gap-1.5" style={{ marginBottom: '1.5rem' }}>
            <div className="flex justify-between items-center">
              <label htmlFor="password" style={{ fontWeight: 600, fontSize: '0.95rem' }}>Password</label>
              {isLogin && <a href="#" style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }}>Forgot password?</a>}
            </div>
            <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder="••••••••" style={{ width: '100%', padding: '0.9rem 1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', outline: 'none' }} />
          </div>
          
          {error && <div style={{ color: '#ef4444', fontSize: '0.95rem', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}

          <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: '1rem', width: '100%', fontWeight: 700, borderRadius: '3rem', fontSize: '1.05rem', opacity: loading ? 0.7 : 1 }}>{loading ? "Processing..." : (isLogin ? "Sign In" : "Sign Up")}</button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', position: 'relative' }}>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)' }} />
          <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--card-bg)', padding: '0 0.75rem', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Or continue with</span>
        </div>

        <div className="flex gap-4" style={{ marginTop: '2rem' }}>
          <button type="button" onClick={handleGoogleLogin} disabled={loading} className="flex items-center justify-center gap-2" style={{ flex: 1, padding: '0.9rem', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', cursor: 'pointer', color: '#000', fontWeight: 600 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Google
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button type="button" onClick={() => setIsLogin(!isLogin)} style={{ background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 700, cursor: 'pointer' }}>
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}

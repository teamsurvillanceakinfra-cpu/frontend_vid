import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ message: 'Please provide a strictly valid URL parameter.' }, { status: 400 });
    }

    if (url.toLowerCase().includes('youtube.com') || url.toLowerCase().includes('youtu.be')) {
      return NextResponse.json({ message: 'YouTube downloading is coming soon!' }, { status: 400 });
    }
    else if (url.toLowerCase().includes('dailymotion.com') || url.toLowerCase().includes('dai.ly')) {
      return NextResponse.json({ message: 'Daily Motion downloading is coming soon!' }, { status: 400 });
    }
    
    // Forward the extraction request entirely to the stable Express backend
    // which sidesteps Next.js Webpack binary bundling issues (ENOENT)
    const backendUrl = process.env.BACKEND_URL || 'https://backend-vid.onrender.com';
    const response = await fetch(`${backendUrl}/api/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    });

    const data = await response.json();
    console.log("RAW RESPONSE:", data);

    if (!response.ok) {
        return NextResponse.json({ message: data.message || 'Backend extraction failed' }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Frontend API Proxy Error:', error.message || error);
    return NextResponse.json({ message: `Failed to proxy extraction request to backend: ${error.message || String(error)}` }, { status: 500 });
  }
}


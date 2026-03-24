import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const videoUrl = searchParams.get('url');
    const ext = searchParams.get('ext') || 'mp4';
    
    if (!videoUrl) {
      return new NextResponse('Missing URL parameter', { status: 400 });
    }

    // Fetch the remote media URL securely from the server side, bypassing strict browser CORS
    const response = await fetch(videoUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Referer': new URL(videoUrl).origin,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch media stream. Status: ${response.status}`);
    }

    // Pass the media stream back to the client directly with an attachment disposition to force trigger a download
    return new NextResponse(response.body, {
      headers: {
        'Content-Type': response.headers.get('Content-Type') || 'application/octet-stream',
        'Content-Disposition': `attachment; filename="vidsnatcher_${Date.now()}.${ext}"`,
        'Transfer-Encoding': 'chunked'
      },
    });
  } catch (err: any) {
    console.error('Proxy Error:', err.message || err);
    return new NextResponse('Failed to proxy download securely.', { status: 500 });
  }
}

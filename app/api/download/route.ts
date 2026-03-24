import { NextResponse } from 'next/server';
import path from 'path';
// @ts-ignore
import { create } from 'youtube-dl-exec';

const youtubedl = create(path.join(process.cwd(), 'node_modules', 'youtube-dl-exec', 'bin', 'yt-dlp.exe'));

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ message: 'Please provide a strictly valid URL parameter.' }, { status: 400 });
    }

    let parsedUrlStr = url;
    try {
      const parsed = new URL(url);
      parsed.searchParams.delete('igsh');
      parsed.searchParams.delete('igshid');
      if (parsed.hostname.includes('instagram.com')) {
        parsed.search = '';
      }
      parsedUrlStr = parsed.toString();
      if (parsedUrlStr.includes('&')) {
        parsedUrlStr = parsedUrlStr.split('&')[0];
      }
    } catch (e) {
      return NextResponse.json({ message: 'Invalid URL format supplied.' }, { status: 400 });
    }

    const info: any = await youtubedl(parsedUrlStr, {
      dumpSingleJson: true,
      noWarnings: true,
      callHome: false,
      noCheckCertificates: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
    });

    const platform = info.extractor_key || 'Unknown';
    const qualityOptions = (info.formats || [])
      .filter((f: any) => f.url && (f.vcodec !== 'none' || f.acodec !== 'none'))
      .map((f: any) => ({
        formatId: f.format_id,
        resolution: f.resolution || (f.height ? `${f.height}p` : 'Audio/Unknown'),
        ext: f.ext,
        url: f.url,
        videoOnly: f.acodec === 'none',
        audioOnly: f.vcodec === 'none'
      }))
      .sort((a: any, b: any) => {
        if (!a.videoOnly && !a.audioOnly && (b.videoOnly || b.audioOnly)) return -1;
        if ((a.videoOnly || a.audioOnly) && !b.videoOnly && !b.audioOnly) return 1;
        return 0;
      });

    return NextResponse.json({
      status: 'success',
      data: {
        platform,
        title: info.title,
        thumbnail: info.thumbnail,
        duration: info.duration,
        qualityOptions,
        originalUrl: parsedUrlStr
      }
    });
  } catch (error: any) {
    console.error('YT-DLP Error:', error.stderr || error.message || error);
    return NextResponse.json({ message: `Failed to extract: ${error.stderr || error.message || String(error)}` }, { status: 500 });
  }
}

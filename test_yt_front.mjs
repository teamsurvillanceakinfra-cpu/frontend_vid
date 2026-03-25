import youtubedl from 'youtube-dl-exec';

async function test() {
  try {
    const info = await youtubedl('https://www.youtube.com/watch?v=dQw4w9WgXcQ', {
      dumpSingleJson: true,
      noWarnings: true,
      noCheckCertificates: true,
      preferFreeFormats: true,
    });
    console.log('Success:', info.title);
  } catch (error) {
    console.error('Extraction Failed:', error);
  }
}

test();

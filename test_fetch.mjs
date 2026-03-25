async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' })
    });
    
    if (!res.ok) {
      const err = await res.text();
      console.error('Fetch failed:', res.status, err);
      return;
    }
    
    const data = await res.json();
    console.log('Fetch succeeded. Title:', data.data?.title);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
test();

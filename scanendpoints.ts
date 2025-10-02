export async function scanEndpoints(baseUrl: string, endpoints: string[]) {
  const results: { url: string; status: number }[] = [];
    console.log("scanning!!");
  for (const endpoint of endpoints) {
    const url = baseUrl.endsWith("/") ? baseUrl + endpoint : `${baseUrl}/${endpoint}`;
    try {
      const res = await fetch(url);
      results.push({ url, status: res.status });
    } catch (error) {
      results.push({ url, status: -1 });
    }
  }
  return results;
}

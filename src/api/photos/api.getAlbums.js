export default async (page, limit=32) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
  return await res.json();
}
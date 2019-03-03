export default async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
  return await res.json();
}
export default async function SSGPage() {
  const time = new Date().toLocaleString();

  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/welcome/ssg`)
  const data = await response.json();

  return (
    <main>
      <h1 className="text-2xl font-bold">SSG Page</h1>
      <p className="text-lg font-semibold">This page was statically generated at: {time}</p>
      <p>{data.message}</p>
    </main>
  );
}
export const dynamic = 'force-dynamic';  //check route segment config : https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

export default async function SSRPage() {
    const time = new Date().toLocaleString();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/welcome/ssr`, { cache: 'no-store' })
    const data = await response.json();
    return (
        <main>
            <h1 className="text-2xl font-bold">SSR Page</h1>
            <p className="text-lg font-semibold">This page was server-side rendered at: {time}</p>
            <p>{data.message}</p>
        </main>
    );
}
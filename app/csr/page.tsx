'use client';
import { useEffect, useState } from 'react';

export default function SSRPage() {

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState('');

    useEffect(() => {
        setTime(new Date().toLocaleString());
        (async () => {
            const res = await fetch(`https://api.vercel.app/blog`);
            const json = await res.json();
            setData(json[0].title);
            setLoading(false);
        })();
    }, []);

    return (
        <main>
            <h1 className="text-2xl font-bold"> CSR Page</h1>
            <p className="text-lg font-semibold mb-4">This page was rendered at: {time}</p>
            {loading ? <p className="text-gray-300 ">Loading message...</p> : <p>{data}</p>}
        </main>
    );
}

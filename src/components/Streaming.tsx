import { Suspense } from "react";

async function Post() {
  const startTime = Date.now();
  await new Promise((resolve) => setTimeout(resolve, 7000));
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
  const data = await res.json();
  const loadingTime = Date.now() - startTime;

  return (
    <div>
      <p>⏳ 로딩 시간: {loadingTime}ms</p>
      <p>{data.title}</p>
    </div>
  );
}

export default function Streaming() {
  return (
    <div className="border p-4">
      <h2>📢 Streaming (Suspense)</h2>
      <Suspense fallback={<p className="animate-pulse">Loading post...</p>}>
        <Post />
      </Suspense>
    </div>
  );
}

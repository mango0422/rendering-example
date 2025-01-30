"use client";

import { useEffect, useState } from "react";

export default function LoadingUI() {
  const [post, setPost] = useState<{ title: string } | null>(null);
  const [loadingTime, setLoadingTime] = useState<number | null>(null);

  useEffect(() => {
    const startTime = Date.now();

    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/6")
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setLoadingTime(Date.now() - startTime);
        });
    }, 7000);
  }, []);

  return (
    <div className="border p-4">
      <h2>📢 Loading UI (Skeleton)</h2>
      {loadingTime && <p>⏳ 로딩 시간: {loadingTime}ms</p>}
      {!post ? (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ) : (
        <p>{post.title}</p>
      )}
    </div>
  );
}

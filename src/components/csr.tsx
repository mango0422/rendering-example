"use client";

import Image from 'next/image';
import { Key, useEffect, useState } from "react";

export default function CSR() {
  const [data, setData] = useState<{ id: Key | null | undefined; url: string; }[] | null>(null);
  const [loadingTime, setLoadingTime] = useState<number | null>(null);

  useEffect(() => {
    const startTime = Date.now();

    setTimeout(() => {
      const images = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        url: `https://picsum.photos/200/300?random=${index}`
      }));
      setData(images);
      setLoadingTime(Date.now() - startTime);
    }, 7000); // 7초 인위적 딜레이 추가
  }, []);

  return (
    <div className="border p-4">
      <h2>📢 CSR (Client-Side Rendering)</h2>
      {loadingTime && <p>⏳ 로딩 시간: {loadingTime}ms</p>}
      {!data ? (
        <p className="animate-pulse">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {data.map((item) => (
            <Image key={item.id} src={item.url} alt={`Random image ${item.id}`} width="120" height="120" unoptimized />
          ))}
        </div>
      )}
    </div>
  );
}

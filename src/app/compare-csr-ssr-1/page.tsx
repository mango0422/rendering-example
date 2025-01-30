"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CompareCSRvsSSR() {
  const [csrData, setCSRData] = useState<string | null>(null);
  const [csrLoadingTime, setCSRLoadingTime] = useState<number | null>(null);

  useEffect(() => {
    const startTime = Date.now();

    setTimeout(() => {
      fetch("https://picsum.photos/200/300?random=1")
        .then((res) => res.blob())
        .then((blob) => {
          setCSRData(URL.createObjectURL(blob));
          setCSRLoadingTime(Date.now() - startTime);
        });
    }, 5000);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <div className="border p-4">
        <h2>📢 CSR (Client-Side Rendering)</h2>
        {csrLoadingTime && <p>⏳ 로딩 시간: {csrLoadingTime}ms</p>}
        {!csrData ? (
          <p className="animate-pulse">Loading...</p>
        ) : (
          <Image src={csrData} alt="CSR Image" width={200} height={300} />
        )}
      </div>

      <div className="border p-4">
        <h2>📢 SSR (Server-Side Rendering)</h2>
        <SSR image={'https://picsum.photos/200/300'} loadingTime={0} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const startTime = Date.now();
  const res = await fetch("https://picsum.photos/200/300?random=2");
  const buffer = await res.arrayBuffer();
  const loadingTime = Date.now() - startTime;

  return {
    props: {
      image: `data:image/jpeg;base64,${Buffer.from(buffer).toString("base64")}`,
      loadingTime,
    },
  };
}

interface SSRProps {
  image: string;
  loadingTime: number;
}

function SSR({ image, loadingTime }: SSRProps) {
  return (
    <>
      <p>⏳ 로딩 시간: {loadingTime}ms</p>
      <Image src={image} alt="SSR Image" width={200} height={300} />
    </>
  );
}

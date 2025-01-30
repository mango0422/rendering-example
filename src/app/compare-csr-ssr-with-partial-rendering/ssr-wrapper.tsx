"use client";

import { Suspense } from "react";
import { useLoadingTime } from "./context";
import Loading from "./loading";
import dynamic from "next/dynamic";

// ✅ Server Component를 동적으로 로드 (CSR에서 직접 호출 방지)
const DynamicSSRPartial = dynamic(() => import("./ssr-partial"), { ssr: false });

export default function SSRWrapper() {
  const { startTime } = useLoadingTime(); // ✅ CSR에서 startTime 가져오기

  return (
    <Suspense fallback={<Loading />}>
      <DynamicSSRPartial startTime={startTime} />
    </Suspense>
  );
}

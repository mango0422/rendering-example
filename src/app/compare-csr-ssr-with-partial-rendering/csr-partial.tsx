"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "./skeleton";
import { useLoadingTime } from "./context"; // ✅ Context 사용

const IMAGE_URL = "https://fastly.picsum.photos/id/441/200/300.jpg?hmac=QKMN_HV9XLlzyUWdanPyq2Qz8FJmYYH5Q0CjPACcnsI";

export default function CSRPartial() {
  const { startTime } = useLoadingTime(); // ✅ 공통 startTime 사용
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [csrLoadingTime, setCSRLoadingTime] = useState<number | null>(null);

  useEffect(() => {
    const requestStartTime = Date.now();

    setTimeout(() => {
      setData(IMAGE_URL); // ✅ 일정 시간 후 데이터 로드
      setLoading(false);
      setCSRLoadingTime(Date.now() - requestStartTime); // ✅ CSR 렌더링 시간 측정
    }, 3000); // 3초 후 렌더링
  }, [startTime]);

  return (
    <div>
      {csrLoadingTime && <p>⏳ 로딩 시간: {csrLoadingTime}ms</p>}
      {loading ? <Skeleton /> : <Image src={data!} alt="CSR Partial" width={200} height={300} unoptimized />}
    </div>
  );
}

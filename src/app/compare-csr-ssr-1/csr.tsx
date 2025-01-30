"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "./skeleton"; // ✅ Skeleton 로딩 UI 추가
import { useLoadingTime } from "./context"; // ✅ Context 사용

export default function CSR({ imageUrl }: { imageUrl: string }) {
    const { startTime } = useLoadingTime(); // ✅ 공통 startTime 사용
    const [csrLoadingTime, setCSRLoadingTime] = useState<number | null>(null);

    useEffect(() => {
        const requestStartTime = Date.now();

        setTimeout(() => {
            setCSRLoadingTime(Date.now() - requestStartTime); // ✅ 공통 startTime 기준 로딩 시간 계산
        }, 2000); // ✅ 2초 딜레이 후 로딩 완료
    }, [startTime]);

    return (
        <div className="border p-4">
            <h2>📢 CSR (Client-Side Rendering)</h2>
            {csrLoadingTime && <p>⏳ 로딩 시간: {csrLoadingTime}ms</p>}
            {!csrLoadingTime ? <Skeleton /> : <Image src={imageUrl} alt="CSR Image" width={200} height={300} unoptimized/>}
        </div>
    );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "./skeleton"; // ✅ Skeleton 로딩 UI 추가

export default function CSRInsideSSR({ startTime, imageUrl }: { startTime: number; imageUrl: string }) {
    const [csrLoadingTime, setCSRLoadingTime] = useState<number | null>(null);

    useEffect(() => {
        const requestStartTime = Date.now();

        setTimeout(() => {
            setCSRLoadingTime(Date.now() - requestStartTime); // ✅ SSR 기준 startTime 사용
        }, 3000); // ✅ 3초 후 CSR 실행
    }, [startTime]);

    return (
        <div className="border-t mt-4 pt-4">
            <h3>📢 CSR inside SSR</h3>
            {csrLoadingTime && <p>⏳ 로딩 시간: {csrLoadingTime}ms</p>}
            {!csrLoadingTime ? <Skeleton /> : <Image src={imageUrl} alt="CSR Inside SSR Image" width={200} height={300} unoptimized/>}
        </div>
    );
}

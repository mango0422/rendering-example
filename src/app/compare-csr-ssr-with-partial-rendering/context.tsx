"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ✅ Context 생성 (startTime을 저장하는 전역 컨텍스트)
const LoadingTimeContext = createContext<{ startTime: number }>({ startTime: Date.now() });

export function LoadingTimeProvider({ children }: { children: React.ReactNode }) {
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setStartTime(Date.now()); // ✅ 페이지가 처음 렌더링될 때 startTime 설정
  }, []);

  return (
    <LoadingTimeContext.Provider value={{ startTime }}>
      {children}
    </LoadingTimeContext.Provider>
  );
}

// ✅ CSR 및 SSR에서 공통으로 startTime을 가져오는 Hook
export function useLoadingTime() {
  return useContext(LoadingTimeContext);
}

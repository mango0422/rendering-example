"use client";

import { createContext, useContext, useEffect, useState } from "react";

// ✅ Context 생성
const LoadingTimeContext = createContext<{ startTime: number }>({ startTime: Date.now() });

export function LoadingTimeProvider({ children }: { children: React.ReactNode }) {
  const [startTime, setStartTime] = useState<number>(Date.now());

  useEffect(() => {
    setStartTime(Date.now()); // ✅ 페이지가 로드될 때 기준 시간 설정
  }, []);

  return (
    <LoadingTimeContext.Provider value={{ startTime }}>
      {children}
    </LoadingTimeContext.Provider>
  );
}

export function useLoadingTime() {
  return useContext(LoadingTimeContext);
}

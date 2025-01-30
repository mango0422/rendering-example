import Image from "next/image";
import CSRInsideSSR from "./ssr-csr"; // ✅ SSR 내부에서 CSR 실행

export default async function SSR({ imageUrl }: { imageUrl: string }) {
  const startTime = Date.now(); // ✅ SSR 실행 시점 저장
  const loadingTime = Date.now() - startTime; // ✅ SSR 기준 로딩 시간 계산

  return (
    <div className="border p-4">
      <h2>📢 SSR (Server-Side Rendering)</h2>
      <p>⏳ 로딩 시간: {loadingTime}ms</p>
      <Image src={imageUrl} alt="SSR Image" width={200} height={300} unoptimized/>
      {/* <CSRInsideSSR startTime={startTime} imageUrl={imageUrl} /> ✅ CSR을 포함하여 클라이언트에서 실행 */}
    </div>
  );
}

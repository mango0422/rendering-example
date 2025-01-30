import CSRPartial from "./csr-partial";
import SSRWrapper from "./ssr-wrapper"; // ✅ SSR 대신 Wrapper 사용
import { LoadingTimeProvider } from "./context"; // ✅ Context 적용

export default function CompareCSRvsSSRWithPartialRendering() {
  return (
    <LoadingTimeProvider> {/* ✅ 공통 startTime 제공 */}
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="border p-4">
          <h2>📢 CSR + 부분 렌더링</h2>
          <CSRPartial /> {/* ✅ CSR 방식으로 부분 렌더링 */}
        </div>

        <div className="border p-4">
          <h2>📢 SSR + 부분 렌더링</h2>
          <SSRWrapper /> {/* ✅ SSR을 감싸는 CSR Wrapper 사용 */}
        </div>
      </div>
    </LoadingTimeProvider>
  );
}

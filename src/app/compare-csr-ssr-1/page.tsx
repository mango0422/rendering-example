import CSR from "./csr";
import SSR from "./ssr";
import { LoadingTimeProvider } from "./context"; // ✅ Context 적용

const IMAGE_URL = "https://fastly.picsum.photos/id/441/200/300.jpg?hmac=QKMN_HV9XLlzyUWdanPyq2Qz8FJmYYH5Q0CjPACcnsI";

export default async function CompareCSRvsSSR() {
  return (
    <LoadingTimeProvider> {/* ✅ Context 적용하여 공통 startTime 제공 */}
      <div className="grid grid-cols-2 gap-4 p-8">
        <CSR imageUrl={IMAGE_URL} />
        <SSR imageUrl={IMAGE_URL} />
      </div>
    </LoadingTimeProvider>
  );
}

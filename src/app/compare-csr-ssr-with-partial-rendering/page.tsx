export default function CompareCSRvsSSRWithPartialRendering() {
    return (
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="border p-4">
          <h2>📢 CSR + 부분 렌더링</h2>
          {/* Partial Rendering 적용된 컴포넌트 */}
        </div>
  
        <div className="border p-4">
          <h2>📢 SSR + 부분 렌더링</h2>
          {/* Partial Rendering 적용된 컴포넌트 */}
        </div>
      </div>
    );
  }
  
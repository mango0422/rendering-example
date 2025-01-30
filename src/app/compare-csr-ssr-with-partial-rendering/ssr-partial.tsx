import Image from "next/image";

// ✅ 서버에서 데이터 로드를 시뮬레이션하는 함수
async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 딜레이
  return "https://fastly.picsum.photos/id/441/200/300.jpg?hmac=QKMN_HV9XLlzyUWdanPyq2Qz8FJmYYH5Q0CjPACcnsI";
}

export default async function SSRPartial({ startTime }: { startTime: number }) {
//   const requestStartTime = Date.now();
  const data = await fetchData(); // ✅ 서버에서 데이터 가져오기
  const ssrLoadingTime = Date.now() - startTime; // ✅ CSR에서 전달받은 startTime 기준으로 로딩 시간 계산

  return (
    <div>
      <p>⏳ 로딩 시간: {ssrLoadingTime}ms</p>
      <Image src={data} alt="SSR Partial" width={200} height={300} unoptimized />
    </div>
  );
}

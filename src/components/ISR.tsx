export const revalidate = 10;

export async function getStaticProps() {
  const startTime = Date.now();
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const data = await res.json();
  const loadingTime = Date.now() - startTime;

  return {
    props: {
      post: data,
      loadingTime,
    },
    revalidate: 10, // 10초 후 데이터 갱신
  };
}

interface Post {
  title: string;
  body: string;
}

export default function ISR({ post, loadingTime }: { post: Post; loadingTime: number }) {
  return (
    <div className="border p-4">
      <h2>📢 ISR (Incremental Static Regeneration)</h2>
      <p>⏳ 로딩 시간: {loadingTime}ms</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

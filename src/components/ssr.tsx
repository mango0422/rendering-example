export const dynamic = "force-dynamic";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/4");
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}

interface Post {
  title: string;
  body: string;
}

export default function SSRPage({ post }: { post: Post }) {
  return (
    <div>
      <h1>📢 Server-Side Rendering (SSR)</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

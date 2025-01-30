export async function generateStaticParams() {
  return [{ id: "3" }];
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
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

export default function SSGPage({ post }: { post: Post }) {
  return (
    <div>
      <h1>📢 Static Site Generation (SSG)</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

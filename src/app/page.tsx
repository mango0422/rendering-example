// Define the Post type
type Post = {
  title: string;
  body: string;
};

// Modify the components to use the Post type
import CSR from "@/components/csr";
import ISR from "@/components/ISR";
import SSG from "@/components/ssg";
import SSR from "@/components/ssr";
import Streaming from "@/components/Streaming";
import LoadingUI from "@/components/LoadingUI";

export default function Home() {
  const samplePosts: Post[] = [
    { title: "ISR Title", body: "ISR Body" },
    { title: "SSG Title", body: "SSG Body" },
    { title: "SSR Title", body: "SSR Body" }
  ];

  return (
    <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CSR />
      <ISR post={samplePosts[0]} loadingTime={5000} />
      <SSG post={samplePosts[1]} />
      <SSR post={samplePosts[2]} />
      <Streaming />
      <LoadingUI />
    </main>
  );
}

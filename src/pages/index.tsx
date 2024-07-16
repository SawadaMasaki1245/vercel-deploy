import Footer from "@/components/footer";
import Header from "@/components/header";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Pagenation from "@/components/pagenation";
import Posts from "@/components/posts";
import { Post } from "@/types/biog";
// import { Layout } from "lucide-react";
import { Inter } from "next/font/google";
import { use, useEffect, useState } from "react";
import { selectPosts } from "@/utils/supabase";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await selectPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" isImage />
      <Posts posts={posts} />
      <Pagenation nextText="次の記事へ" nextUrl="/blog" />
    </Layout>
  );
}

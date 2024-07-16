import Eyecatch from "@/components/eyecatch";
import Layout from "@/components/layout";
import Pagenation from "@/components/pagenation";
import PostCategory from "@/components/post-category";
import PostHeader from "@/components/post-header";
import TwoColumnLayout from "@/components/two-column-layout";
import { Post } from "@/types/biog";
import { selectPost } from "@/utils/supabase";
import { useRouter } from "next/router";
import {
  Children,
  ClassAttributes,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import ReactMarkdown, { ExtraProps } from "react-markdown";
import remarkGfm from "remark-gfm";

// 見出し要素の型定義
type headingProps = ClassAttributes<HTMLHeadingElement> &
  HTMLAttributes<HTMLHeadingElement> &
  ExtraProps;

const H1 = ({ children }: headingProps) => {
  return <h1 className="text-3xl border-l-2 m-l-2">{children}</h1>;
};

type ParagraohProps = ClassAttributes<HTMLParagraphElement> &
  HTMLAttributes<HTMLParagraphElement> &
  ExtraProps;
const P = ({ children }: ParagraohProps) => {
  return <p className="text-base">{children}</p>;
};

const DetailPage = () => {
  const [post, setPost] = useState<Post>();
  const [blogId, setBlogId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    // クエリパラメータを取得する
    const slug = router.query.slug;
    // console.log(slug, typeof slug, typeof slug === "string");
    // クエリパラメーターにslugが存在する時にblogIdの状態を更新する
    if (typeof slug === "string") {
      setBlogId(slug);
    }
  }, [router.query]);

  useEffect(() => {
    // blogIdが空白の時には何もしない
    if (blogId === "") {
      return;
    }
    const fetchPost = async () => {
      const data = await selectPost(blogId);
      if (!data) {
        return;
      }
      setPost(data);
    };
    fetchPost();
  }, [blogId]);

  return (
    <Layout>
      <article className="flex flex-col items-center">
        {post && <PostHeader post={post} />}
      </article>

      <Eyecatch
        src={
          post
            ? `https://qjwwiterhacflyfcsvqq.supabase.co/storage/v1/object/public/thumbnails/__________2024_03_21_103710.png/${post.eyecatch}`
            : "/images/eyecatch.jpg"
        }
        width={568}
        height={288}
      />

      <TwoColumnLayout>
        <div className="flex flex-col flex-1 text-base leading-8">
          <ReactMarkdown
            rehypePlugins={[remarkGfm]}
            components={{ h1: H1, p: P }}
          >
            {post && post.body}
          </ReactMarkdown>
        </div>

        <PostCategory />
      </TwoColumnLayout>

      <Pagenation
        prevText="前の記事へ"
        prevUrl="/blog/0001"
        nextText="次の記事へ"
        nextUrl="/blog/0003"
      />
      {/* ↑↑追加↑↑ */}
    </Layout>
  );
};

export default DetailPage;

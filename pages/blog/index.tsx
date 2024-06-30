import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/helpers";
import { Layout } from "@/components";

type Post = {
  date: string;
  title: string;
  id: string;
  excerpt: string;
};

export const getStaticProps = () => {
  const posts: Post[] = getSortedPostsData();
  return { props: { posts } };
};

const Page = ({ posts }: { posts: Post[] }) => {
  const title = "Blog | Jake's Website";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="pb-8 p-4 align-center mx-auto max-w-2xl">
        <div className="flex flex-col align-center mt-12 mb-16">
          <h4 className="text-3xl mb-8">Posts ✍️</h4>
          <div className="flex flex-col flex-wrap gap-y-6">
            {posts.map((post) => (
              <div key={post.id}>
                <Link
                  className="hover:underline decoration-sky-500"
                  href={`/blog/${post.id}`}
                >
                  <h1 className="">{post.title}</h1>
                </Link>
                <h4 className="opacity-60">{post.date}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

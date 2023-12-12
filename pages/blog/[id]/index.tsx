import Head from 'next/head';
import Link from 'next/link';
import { getAllPostIds, getPostData } from '@/lib/helpers';
import { spectral } from '@/fonts';
import { Layout } from '@/components';

import styles from './index.module.scss';

type Props = {
  post: Post;
}

type Post = {
  title: string;
  date: string;
  contentHtml: string;
}

export const getStaticPaths = async () => {
  const ids = getAllPostIds();
  return {
    paths: ids,
    fallback: false
  }
}

export const getStaticProps = async (
  { params }: { params: { id: string }}
) => {
  const post = await getPostData(params.id);
  return { props: { post } };
}

const Page = ({ post }: Props) => {
  const title = `${post.title} | Jake's Website`;

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${styles.post} p-4 pb-6`}>
        <h2 className="text-4xl my-4">
          <Link style={{ textDecoration: 'none' }} href="/blog">..</Link>
        </h2>
        <h1>{post.title}</h1>
        <div
          className={spectral.className}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        ></div>
      </div>
    </Layout>
  )
}

export default Page;

import Head from "next/head";
import { Layout } from "@/components";

const Page = () => {
  const title = "Consulting | Jake's Website";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="pb-8 p-4 align-center mx-auto max-w-2xl">
        <div className="flex flex-col align-center mt-12 mb-16">
          <h4 className="text-3xl mb-6">Consulting 🛠️</h4>
          <div className="rounded-3xl overflow-hidden mb-6">
            <img src="/doggy.png" />
          </div>
          <p className="cursor-text text-lg mb-4 opacity-90">
            I&apos;m most effective quick prototyping, adding features to
            existing websites and iOS apps, and/or going deep on product
            decisions.
          </p>
          <p className="cursor-text text-lg mb-4 opacity-90">
            If you&apos;re interested in working with me send an email to{" "}
            <a
              href="mailto:jake@getstreamkit.com"
              className="underline decoration-sky-500"
            >
              jake@getstreamkit.com
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

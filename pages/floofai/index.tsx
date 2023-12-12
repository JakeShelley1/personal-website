import Head from "next/head";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <Head>
        <title>FloofAI</title>
      </Head>
      <div
        style={{ background: "#f8f1fe" }}
        className="text-center m-auto p-16"
      >
        <div className="font-bold text-5xl">Floof AI</div>
        <div className="text-xl f4 m-auto mb-4 mt-2 text-center max-w-xxs">
          Beautiful, AI generated images of your pup
        </div>
        <img className="mx-auto max-w-xxs" src="/floofai-image.png" alt="" />
        <Link
          className="m-auto mb-8 mt-2 inline-block"
          target="_blank"
          rel="noreferrer"
          href="https://apps.apple.com/us/app/ai-avatar-for-dogs-floof-ai/id1659283776"
        >
          <img
            style={{ cursor: "pointer" }}
            src="/download_on_app_store.svg"
            alt=""
          />
        </Link>
        <div className="flex text-center m-auto gap-x-4 text-sm underline justify-center">
          <a className="f6 black" href="mailto:jake@getstreamkit.com">
            Email support
          </a>
          <Link className="f6 black" href="/floofai-privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;

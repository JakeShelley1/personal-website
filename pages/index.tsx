import Head from "next/head";
import Link from "next/link";
import { AppButton, Layout } from "@/components";

import styles from "./index.module.css";

const Page = () => {
  const title = "Jake's Website";

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="pb-8 p-4 align-center mx-auto max-w-2xl">
        <div className="flex flex-col align-center mt-9 mb-16">
          <h4 className="text-3xl mb-6">Hi, I&apos;m Jake</h4>
          <p className="text-lg mb-4 opacity-90">
            I&apos;m a software engineer from New York City.
          </p>
          <p className="text-lg mb-4 opacity-90">
            I&apos;ve been working at{" "}
            <a
              target="_blank"
              rel="norefferer"
              href="https://ads.spotify.com"
              className={`${styles.spotify} ${styles.link}`}
            >
              Spotify
            </a>{" "}
            since they acquired{" "}
            <a
              target="_blank"
              href="https://techcrunch.com/2022/02/16/spotify-snaps-up-podcast-measurement-and-analytics-firms-podsights-and-chartable/"
              rel="norefferer"
              className={`${styles.chartable} ${styles.link}`}
            >
              Chartable
            </a>{" "}
            back in 2021.
          </p>
          <p className="text-lg mb-4 opacity-90">
            Lately, I&apos;ve been most interested in using AI to create in-game
            characters, tools for content creators, and consumer apps. If
            you&apos;d like to chat you can reach me by{" "}
            <a
              className={`${styles.link} ${styles.mail}`}
              href="mailto:jake@getstreamkit.com"
            >
              email
            </a>{" "}
            or on{" "}
            <a
              target="_blank"
              rel="norefferer"
              href="https://discord.com/channels/@me/584819000140103680"
              className={`${styles.link} ${styles.discord}`}
            >
              discord
            </a>
            .
          </p>
          <p className="text-lg mb-4 opacity-90">
            I&apos;m also trying to{" "}
            <Link href="blog" className={`${styles.blog} ${styles.link}`}>
              write more.
            </Link>
          </p>
          <p className="text-lg opacity-90">
            Below are some of the projects and apps I&apos;ve worked on. I may
            also be available for{" "}
            <Link
              href="/consulting"
              className={`${styles.work} ${styles.link}`}
            >
              consulting work
            </Link>
            .
          </p>
        </div>
        <div className={styles.iconGrid}>
          <AppButton
            roundImageCorners
            imageSrc="/streamkit.png"
            link="https://apps.apple.com/us/app/streamkit-share-stream-clips/id1571506295"
            title="StreamKit"
          />
          <AppButton
            roundImageCorners
            imageSrc="/floofai.png"
            link="https://apps.apple.com/us/app/ai-avatar-for-dogs-floof-ai/id1659283776"
            title="FloofAI"
          />
          <AppButton
            roundImageCorners
            imageSrc="/promptai.png"
            link="https://apps.apple.com/us/app/prompt-ai-draw-anything/id1645128182"
            title="PromptAI"
          />
          <AppButton
            roundImageCorners
            imageSrc="/linkdrop.png"
            link="https://linkdrop.co"
            title="Linkdrop"
          />
          <AppButton
            roundImageCorners
            imageSrc="/todo.png"
            link="https://apps.apple.com/us/app/todo-lists-organize-your-life/id1329807333"
            title="Todo"
          />
          <AppButton
            roundImageCorners
            imageSrc="/blockninjas.png"
            link="https://itunes.apple.com/us/app/block-ninjas/id956615108?mt=8"
            title="BlockNinjas"
          />
          <AppButton
            roundImageCorners
            imageSrc="/colorpop.png"
            link="https://apps.apple.com/us/app/color-pop-the-game/id1202606108"
            title="ColorPop"
          />
          <AppButton
            roundImageCorners
            imageSrc="/emit.png"
            link="https://apps.apple.com/us/app/emit-track-your-carbon-emissions/id1182170211"
            title="Emit"
          />
          <AppButton
            roundImageCorners
            imageSrc="/talkboard.png"
            dead
            title="Talkboard"
          />
          <AppButton
            roundImageCorners
            imageSrc="/radiou.png"
            dead
            title="RadioU"
          />
          <AppButton
            roundImageCorners
            imageSrc="/soundcheck.png"
            dead
            title="Soundcheck"
          />
        </div>
      </div>
      <div className="hidden">
        <img
          fetchPriority="high"
          alt=""
          aria-hidden="true"
          src="/spotify.png"
        />
        <img
          fetchPriority="high"
          alt=""
          aria-hidden="true"
          src="/chartable.png"
        />
        <img fetchPriority="high" alt="" aria-hidden="true" src="/mail.png" />
        <img fetchPriority="high" alt="" aria-hidden="true" src="/blog.png" />
        <img
          fetchPriority="high"
          alt=""
          aria-hidden="true"
          src="/discord.png"
        />
        <img
          fetchPriority="high"
          alt=""
          aria-hidden="true"
          src="/consulting.png"
        />
      </div>
    </Layout>
  );
};

export default Page;

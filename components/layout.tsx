import "postcss";
import Link from "next/link";
import { GrainyGradient } from "@/components";
import { playfair } from "@/fonts";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${playfair.className} main-content`}>
      <Link className="inline-block pt-3 pl-2" href="/">
        <div className="rounded-full overflow-hidden hover:animate-spin">
          <GrainyGradient
            width="40px"
            height="40px"
            linearGradient="linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)"
          />
        </div>
      </Link>
      {children}
    </div>
  );
};

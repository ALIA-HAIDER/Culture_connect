import { Link } from "@heroui/link";
// import { Snippet } from "@heroui/snippet";
// import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

// import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
// import { GithubIcon } from "@/components/icons";
import picone from "@/assets/imageOne.jpg";

function HeaderHp() {
  return (
    <div
      className="flex flex-col bg-cover bg-center mb-10  bg-no-repeat text-white  items-center justify-center gap-6 py-16 w-full h-auto md:h-[calc(100vh-64px)] lg:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)] 2xl:h-[calc(100vh-112px)]"
      style={{ backgroundImage: `url(${picone})` }}
    >
      <div className="inline-block max-w-3xl text-center bg-deepBlack-800/80 p-6 rounded-2xl backdrop-blur-15 shadow-xl border border-primary-500/30">
        <span className={title({ class: "text-softWhite" })}>Find your&nbsp;</span>
        <span className={title({ color: "primary" })}>vibe-aligned&nbsp;</span>
        <br />
        <span className={title({ class: "text-softWhite" })}>neighborhood & community.</span>

        <div className={subtitle({ class: "mt-4 text-mutedGray-300" })}>
          Discover localities that match your lifestyle, language, culture, and
          energy.
        </div>
      </div>

      <div className="flex gap-4 mt-6 flex-wrap justify-center">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/explore"
        >
          Explore Now
        </Link>
        <Link
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
          })}
          href="/how-it-works"
        >
          How It Works
        </Link>
      </div>
    </div>
  );
}

export default HeaderHp;

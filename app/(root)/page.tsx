import Socials from "@/components/Socials";
import { ResumeViewerSimple } from "@/components/ResumeViewerSimple";
import { DottedGlowBackground } from "@/components/UI/dotted-glow-background";
import { EncryptedText } from "@/components/UI/EncryptedText";
import { HeroHighlight, Highlight } from "@/components/UI/HeroHighlight";
import { about } from "@/utils/data";
import { Button, Image, Link } from "@nextui-org/react";
import { ChevronRight, DownloadIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SS Portfolio | Home",
  openGraph: {
    title: "SS Portfolio | Home",
    url: "https://sdesaadshaikh.vercel.app",
    images: [
      {
        url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
        alt: "portfolio-logo",
      },
    ],
  },
  twitter: {
    title: "SS Portfolio | Home",
    images: [
      {
        url: "https://res.cloudinary.com/dkjo8w9u8/image/upload/v1715601375/Screenshot_2024-05-13_172543_z2juxo.png",
        alt: "portfolio-logo",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center px-6">
        <DottedGlowBackground
          className="pointer-events-none absolute inset-0 mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
          opacity={1.5}
          gap={10}
          radius={1.6}
          colorLightVar="--color-purple-500"
          glowColorLightVar="--color-purple-600"
          colorDarkVar="--color-purple-500"
          glowColorDarkVar="--color-purple-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.6}
          speedScale={1}
        />
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl w-full">
          <div className="justify-self-center">
            <Image
              src="/saad-img-portfolio.png"
              alt="saad shaikh"
              className="opacity-100 rounded-full w-[200px] md:w-[300px] lg:w-[400px]"
            />
          </div>
          <div className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center lg:text-left mx-auto">
            <p className="text-4xl md:text-5xl lg:text-8xl mb-4">
              I'm {about.name}
            </p>
            <div>
              <Highlight className="text-black dark:text-white block">
                <EncryptedText text={about.position} flipDelayMs={1000} />
              </Highlight>
            </div>
            <div className="mt-16 flex flex-wrap gap-2">
              <div className="inline-flex md:hidden">
                <ResumeViewerSimple resumeUrl="/saad_resume.pdf" buttonSize="sm" />
              </div>
              <div className="hidden md:inline-flex">
                <ResumeViewerSimple resumeUrl="/saad_resume.pdf" buttonSize="lg" />
              </div>
              <Button
                variant="faded"
                color="secondary"
                size="sm"
                className="inline-flex md:hidden"
                as={Link}
                href="/about"
              >
                Know More <ChevronRight size={18} />
              </Button>
              <Button
                variant="faded"
                color="secondary"
                size="lg"
                className="hidden md:inline-flex"
                as={Link}
                href="/about"
              >
                Know More <ChevronRight size={18} />
              </Button>
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
}

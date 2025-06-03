import Image from "next/image";

import ShakhzodFull from "/public/images/shakhzod-full.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={ShakhzodFull}
              alt="Shakhzod on Dragon"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography>
            I&apos;m a frontend developer with a strong foundation in modern web
            development, currently I&apos;m finishing studies at Noroff. I began
            my journey in August 2023, and since then, I&apos;ve built up skills
            in HTML, CSS, JavaScript, and Tailwind CSS for styling. I&apos;ve
            also worked with Figma for UI design and used Vite for efficient
            tooling in my projects. And have been using Git actively for all the
            assignments for Noroff ({" "}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>
            ). Lately, I&apos;ve been diving deeper into React and TypeScript to
            build more scalable and dynamic applications. I&apos;m passionate
            about clean, accessible code and continuously learning to stay up to
            date with the latest in frontend technologies.
          </Typography>
          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>
          <Typography>
            I&apos;m interested in investing and keen on managing finances
            effectively, so in my spare time I&apos;d like to stay updated in
            investment oppportunities and financing. Also, I enjoy gaming from
            time to time.
          </Typography>
          <Typography>Some quick bits about me:</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.A. in Financial management
              </Typography>
              <Typography component="li">
                Certificate in HTML/CSS mark-up course
              </Typography>
              <Typography component="li">
                Noroff frontend development graduate
              </Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Avid learner</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance works, and
            internship positions to build more experiences working on bigger
            projects, so feel free to reach out!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;

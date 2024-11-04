import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 flex-col items-start"
          }
        >
          <h2 className="lg: col-span-full md:col-span-6 sm: col-span-full  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I’m a forward-thinking Full Stack Developer with a passion for blending technology and creativity to solve complex problems. Currently immersed in .NET development, I build resilient, scalable web applications and craft intuitive APIs that empower seamless user experiences. My work goes beyond the conventional—I’ve developed a yoga posture-correction app using MediaPipe that gives real-time feedback, and a Carnatic music analysis tool that precisely identifies ragas, showcasing my commitment to innovation and usability. A published researcher, I’ve contributed to the fields of AI, blockchain, and design thinking, exploring ways to make technology smarter, safer, and more accessible. My journey is fueled by a drive to not only enhance functionality but also to push the boundaries of what’s possible in tech.
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,cs,nodejs,flutter,dotnet,html,css,bootstrap,expressjs,mysql,mongodb,firebase,git,github,ai,postman,sklearn,tensorflow`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mridula-narang&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&layout=compact&card_width=300`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-6 !p-0"}>
          <Link href={"https://github.com/mridula-narang/Yoga-Monitoring-and-Correction-System"} target = "_blank" className="w-full">
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/pin/?username=mridula-narang&repo=Yoga-Monitoring-and-Correction-System&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&layout=compact&card_width=300`}
            alt="CodeBucks"
            loading="lazy"
          />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;

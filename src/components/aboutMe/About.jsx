import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { experience } from "../../services/experience";
import { useLayoutEffect } from "react";

export function About() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <section className="md:col-span-9 md:text-center px-4 lg:px-10 my-8">
        <h2 className="text-2xl font-medium md:text-4xl 2xl:text-5xl text-neutral50 text-center md:leading-[3.5rem] mb-5 font-inter">
          About me
        </h2>
        <p className="text-sm md:text-lg font-inter font-extralight text-neutral50 text-center md:text-left mb-8">
          I’m a frontend developer with previous mid-level experience. After a
          break from the industry, I’ve been updating my skills by building
          projects with React, Astro, TypeScript, TailwindCSS and Supabase. I’ve
          worked on features like user login, cloud databases and deployments.
          Now I’m looking to re-enter the market as a mid-level developer,
          bringing both past experience and new knowledge.
        </p>
        <ul className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          {experience.map((exp) => (
            <Experience
              key={exp.title}
              title={exp.title}
              content={exp.content}
            />
          ))}
        </ul>
        <div className="order-last md:order-first col-span-8 md:col-span-3 bg-secondary900 flex flex-col justify-between items-center py-8 flex-wrap content-center">
          <Skills title="Tech Skills" />
          <Skills title="Soft Skills" />
          <Skills title="Languages" />
        </div>
      </section>
    </>
  );
}

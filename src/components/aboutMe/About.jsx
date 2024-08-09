import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { experience } from "../../services/experience";

export function About() {
  return (
    <>
      <section className="col-span-9 md:text-center px-4 lg:px-10 my-8">
        <h2 className="text-2xl font-medium md:text-4xl 2xl:text-5xl text-neutral50 text-center md:leading-[3.5rem] mb-5 font-typewriter">
          About me
        </h2>
        <p className="text-sm md:text-xl font-inter font-thin text-neutral50 text-center md:text-left mb-8">
          Hi! My name is Freddy Romo And I am a Web Developer with more than 4
          years of working experience. I am passionated building web sites using
          different technologies. Spanish is my native language but fluent in
          English. Currently learning new technologies like ReactJS,
          TailwindCSS, Astro and more.
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

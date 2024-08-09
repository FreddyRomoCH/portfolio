import { ProjectCard } from "./ProjectCard";
import { projects } from "../../services/projects";
import { useLayoutEffect } from "react";
import { useState } from "react";

export function Projects() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const [isAllProjects, setIsAllProjects] = useState(false);

  const handleAllProjects = () => {
    setIsAllProjects(!isAllProjects);
  };

  const allprojects = projects
    .map(({ id, title, image, shortDescription }) => (
      <ProjectCard
        key={id}
        id={id}
        title={title}
        description={shortDescription}
        image={image}
      />
    ))
    .reverse();

  return (
    <section className="md:col-span-9 text-center px-4 lg:px-32 my-8">
      <h2
        id="projects"
        className="text-2xl font-medium md:text-4xl 2xl:text-5xl text-neutral50 text-center md:leading-[3.5rem] mb-5 font-typewriter"
      >
        {isAllProjects ? "Projects" : "Latest Projects"}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-3 justify-between items-start max-w-5xl mb-8">
        {isAllProjects ? allprojects : allprojects.slice(0, 2)}
      </div>

      {!isAllProjects && (
        <button
          onClick={handleAllProjects}
          className="bg-primary500 hover:bg-primary600 rounded-[4px] text-neutral50 px-4 py-2"
        >
          See more Projects
        </button>
      )}
    </section>
  );
}

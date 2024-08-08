import { ProjectCard } from "./ProjectCard";
import { projects } from "../../services/projects";

export function Projects() {
  return (
    <section className="bg-home-radial p-8 flex flex-col justify-between items-center gap-8 w-screen">
      <h2
        id="projects"
        className="text-2xl font-medium md:text-4xl 2xl:text-5xl text-neutral50 text-center md:leading-[3.5rem] mb-5 font-typewriter"
      >
        Latest Projects
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 justify-between items-start w-screen max-w-5xl">
        {projects
          .map(({ id, title, image, description, url }) => (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              image={image}
              url={url}
            />
          ))
          .reverse()
          .slice(0, 2)}
      </div>

      {projects.length > 2 && (
        <a
          className="bg-primary500 hover:bg-primary600 rounded-[4px] text-neutral50 px-4 py-2"
          href=""
        >
          See more Projects
        </a>
      )}
    </section>
  );
}

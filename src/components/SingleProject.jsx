import { useParams } from "react-router-dom";
import { projects } from "../services/projects";
import { useLayoutEffect } from "react";

export function SingleProject() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const { id } = useParams();
  const idParam = Number(id);

  const singleProject = projects.filter((project) => project.id === idParam);
  const { title, description, image, technologies, url, gitHub } =
    singleProject[0];

  const techs = technologies.map((tech) => (
    <li
      className="border-[1px] border-primary500 text-primary500 rounded-lg text-sm px-3 py-1"
      key={tech}
    >
      {tech}
    </li>
  ));

  return (
    // <div className="relative grid grid-rows-[auto_1fr_auto] justify-center min-h-screen gap-7">
    <section className="col-span-9 md:text-center px-4 lg:px-32 my-20">
      <div className="flex flex-col max-w-[1024px] text-center mx-auto gap-7">
        <h1 className="font-typewriter font-medium text-2xl md:text-5xl">
          {title}
        </h1>
        <picture>
          <img className="rounded-md object-cover" src={image} alt={title} />
        </picture>
        <ul className="flex flex-rown flex-wrap justify-center gap-3">
          {techs}
        </ul>
        <p className="font-inter font-thin text-base">{description}</p>
        <a
          className="bg-primary500 hover:bg-primary600 text-neutral50 w-auto px-4 py-2 rounded-md text-lg"
          href={url}
          target="_blank"
        >
          <p className="font-inter font-medium text-base">Visit Site</p>
        </a>
        <a
          href={gitHub}
          target="_blank"
          className="flex flex-flex justify-center items-center border-[1px] border-primary500 hover:border-primary600w-auto px-4 py-2 rounded-md text-lg gap-3"
        >
          <p className="font-inter font-medium text-base text-primary500 ">
            Visit GitHub Project
          </p>
          <img src="/images/orange-git-hub.svg" alt="GitHub Icon" />
        </a>
      </div>
    </section>
    // </div>
  );
}

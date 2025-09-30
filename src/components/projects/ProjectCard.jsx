import { Link } from "react-router-dom";

export function ProjectCard({ title, description, image, id }) {
  const nameLink = title.toLowerCase().split(" ").join("-");
  const link = `/my-projects/${id}/${nameLink}`;

  return (
    <div className="bg-secondary900 rounded-lg flex flex-col p-6 gap-4 items-center justify-between h-full">
      <picture>
        <img
          className="h-64 object-cover flex-1 "
          src={image}
          alt="Project Cover Image"
        />
      </picture>
      <h2 className=" text-xl lg:text-2xl font-inter font-semibold">{title}</h2>
      <p className="font-inter font-normal text-base text-center text-neutral50">
        {description}
      </p>
      <Link
        to={link}
        className="border-[1px] border-primary500 hover:border-primary600 rounded-[4px] text-primary500 hover:text-primary600 px-4 md:px-5 py-1 md:py-2 font-light text-base"
      >
        View Case
      </Link>
    </div>
  );
}

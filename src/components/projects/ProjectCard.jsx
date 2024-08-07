export function ProjectCard({ title, description, image, url }) {
  return (
    <div className="bg-secondary900 rounded-lg flex flex-col p-6 gap-4 items-center justify-between">
      <picture>
        <img
          className="h-64 object-cover"
          src={image}
          alt="Project Cover Image"
        />
      </picture>
      <h2 className="text-4xl font-typewriter font-semibold">{title}</h2>
      <p className="font-inter font-thin text-base text-center">
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="border-[1px] border-primary500 rounded-[4px] text-primary500 px-4 md:px-5 py-1 md:py-2 font-light text-base"
      >
        Know more
      </a>
    </div>
  );
}

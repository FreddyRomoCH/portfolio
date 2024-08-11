import { SkillCard } from "./skillCard";
import { techSkills, softSkills, languages } from "../../services/skills";

export function Skills({ title }) {
  const skills = {
    "Tech Skills": techSkills,
    "Soft Skills": softSkills,
    Languages: languages,
  };

  return (
    <div>
      <h3 className="font-normal text-base md:text-2xl xl:text-3xl text-center mb-4 font-typewriter">
        {title}
      </h3>
      <ul className="text-primary500 flex flex-row gap-2 flex-wrap items-center justify-center mb-6 font-inter px-1">
        {title !== "Tech Skills"
          ? skills[title].map((skill) => (
              <SkillCard key={skill} skill={skill} />
            ))
          : skills[title].map(({ tech, image }) => (
              <SkillCard key={tech} skill={tech} image={image} />
            ))}
      </ul>
    </div>
  );
}

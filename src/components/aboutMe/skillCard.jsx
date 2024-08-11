export function SkillCard({ skill, image }) {
  return (
    <li className="flex flex-row items-center justify-center gap-1 border-[1px] border-primary500 rounded-xl px-2 py-1">
      {image && (
        <picture>
          <img className="w-5 h-5" src={image} alt={`Icon of ${skill}`} />
        </picture>
      )}

      {skill ? (
        <p className="text-primary500 font-inter text-center text-xs font-thin">
          {skill}
        </p>
      ) : (
        "No skills found"
      )}
    </li>
  );
}

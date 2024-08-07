export function SkillCard({ skill }) {
  return (
    <li className="border-[1px] border-primary500 rounded-xl px-2 py-1 text-center text-xs font-thin">
      {skill ? skill : "No skills found"}
    </li>
  );
}

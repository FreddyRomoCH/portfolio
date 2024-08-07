export function Experience({ title, content }) {
  return (
    <li className="flex-1 bg-secondary900 rounded-xl p-4 flex flex-col justify-start gap-4">
      <h3 className="font-typewriter text-primary500 text-base md:text-xl font-semibold md:font-bold">
        {title}
      </h3>
      {content.map((item) => {
        return (
          <p key={item.id} className="font-inter text-sm font-thin text-left">
            <span className="text-primary500 font-semibold">
              {item.company || item.school}:{" "}
            </span>
            {item.description || item.location}
          </p>
        );
      })}
    </li>
  );
}

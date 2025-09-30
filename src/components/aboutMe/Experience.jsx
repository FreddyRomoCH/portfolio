export function Experience({ title, content }) {
  return (
    <li className="flex-1 bg-secondary900 text-neutral50 font-inter font-light rounded-xl p-4 flex flex-col justify-start gap-4">
      <h3 className="text-primary500 text-md md:text-xl font-semibold md:font-bold font-inter">
        {title}
      </h3>
      {content.map((item) => {
        return (
          <p
            key={item.id}
            className="font-inter text-md font-extralight text-left"
          >
            <span className="text-primary500 font-medium">
              {item.company || item.school}:{" "}
            </span>
            {item.description || item.location}
          </p>
        );
      })}
    </li>
  );
}

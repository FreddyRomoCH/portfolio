export function MenuButton({ title, href }) {
  return (
    <li className="border-[1px] border-primary400 hover:border-primary600 text-primary400 hover:text-primary600 font-normal text-xl 2xl:text-2xl w-full text-center">
      <a href={href} className="block w-full h-full py-4 2xl:py-7">
        {title}
      </a>
    </li>
  );
}

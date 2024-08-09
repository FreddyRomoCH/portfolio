import { Link } from "react-router-dom";
import { SendEmail } from "../home/SendEmail";

export function MenuButton({ title, href, onClickOpenMenu }) {
  return (
    <li className="relative border-[1px] border-primary400 hover:border-primary600 text-primary400 hover:text-primary600 font-normal text-xl 2xl:text-2xl w-full text-center group">
      {title === "My CV" ? (
        <a
          href={href}
          target="_blank"
          className="block w-full h-full py-4 2xl:py-7"
        >
          {title}
        </a>
      ) : (
        <Link
          onClick={title !== "Contact" ? onClickOpenMenu : undefined}
          to={href}
          className="block w-full h-full py-4 2xl:py-7"
        >
          {title}
        </Link>
      )}
      {title === "Contact" && <SendEmail onClickOpenMenu={onClickOpenMenu} />}
    </li>
  );
}

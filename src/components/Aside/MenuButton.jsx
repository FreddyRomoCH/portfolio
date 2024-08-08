import { SendEmail } from "../home/SendEmail";

export function MenuButton({ title, href, onClickOpenMenu }) {
  return (
    <li className="relative border-[1px] border-primary400 hover:border-primary600 text-primary400 hover:text-primary600 font-normal text-xl 2xl:text-2xl w-full text-center group">
      <a
        onClick={title !== "Contact" ? onClickOpenMenu : undefined}
        href={href}
        download={title === "Download my CV" ? "Freddy-Romo-CV.pdf" : undefined}
        className="block w-full h-full py-4 2xl:py-7"
      >
        {title}
      </a>
      {title === "Contact" && <SendEmail onClickOpenMenu={onClickOpenMenu} />}
    </li>
  );
}

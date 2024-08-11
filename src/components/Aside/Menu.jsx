import { useLocation } from "react-router-dom";
import { MenuButton } from "./MenuButton";

export function Menu({ onClickOpenMenu }) {
  const CV = "files/Freddy-Romo-Resume.pdf";

  const url = useLocation();
  const currentSection = url.pathname.slice(1);

  return (
    <section className="menu">
      <ul className="flex flex-col justify-between gap-5">
        <MenuButton
          title="About"
          href="/about"
          isActive={currentSection === "about"}
          onClickOpenMenu={onClickOpenMenu}
        />
        <MenuButton
          title="Projects"
          href="/projects"
          isActive={currentSection === "projects"}
          onClickOpenMenu={onClickOpenMenu}
        />
        <MenuButton title="Contact" onClickOpenMenu={onClickOpenMenu} />
        <MenuButton title="My CV" href={CV} onClickOpenMenu={onClickOpenMenu} />
      </ul>
    </section>
  );
}

import { MenuButton } from "./MenuButton";

export function Menu({ onClickOpenMenu }) {
  const CV = "files/Freddy-Romo-CV.pdf";

  return (
    <section className="menu">
      <ul className="flex flex-col justify-between gap-5">
        <MenuButton
          title="About"
          href="#about-me"
          onClickOpenMenu={onClickOpenMenu}
        />
        <MenuButton
          title="Projects"
          href="#projects"
          onClickOpenMenu={onClickOpenMenu}
        />
        <MenuButton
          title="Contact"
          href="#contact"
          onClickOpenMenu={onClickOpenMenu}
        />
        <MenuButton
          title="Download my CV"
          href={CV}
          onClickOpenMenu={onClickOpenMenu}
        />
      </ul>
    </section>
  );
}

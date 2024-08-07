import { MenuButton } from "./MenuButton";

export function Menu() {
  return (
    <section className="menu">
      <ul className="flex flex-col justify-between gap-5">
        <MenuButton title="About" href="#about-me" />
        <MenuButton title="Projects" href="#projects" />
        <MenuButton title="Contact" href="#contact" />
        <MenuButton title="Resumé" href="#resume" />
      </ul>
    </section>
  );
}

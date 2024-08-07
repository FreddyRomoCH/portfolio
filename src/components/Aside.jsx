import { Logo } from "./Aside/Logo";
import { Menu } from "./Aside/Menu";
import { Social } from "./Aside/Social";

export function Aside({ isMobileMenuOpen }) {
  return (
    <aside
      className={`${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } fixed flex z-20 md:relative col-span-3 w-full bg-secondary900 md:flex flex-col justify-between h-full transition-all ease-linear duration-500 md:translate-x-0 px-10 md:px-0`}
    >
      <Logo showIn="desktop" />
      <Menu />
      <Social />
    </aside>
  );
}

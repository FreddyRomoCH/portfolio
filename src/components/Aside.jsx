import { Logo } from "./Aside/Logo";
import { Menu } from "./Aside/Menu";
import { Social } from "./Aside/Social";

export function Aside({ isMobileMenuOpen, onClickOpenMenu }) {
  return (
    <aside
      className={`${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } fixed top-0 flex z-20 bg-secondary900 md:flex flex-col justify-between h-full transition-all ease-linear duration-500 md:translate-x-0 px-10 md:px-0 w-dvw md:w-[23%]`}
    >
      <Logo onClickOpenMenu={onClickOpenMenu} />
      <Menu onClickOpenMenu={onClickOpenMenu} />
      <Social />
    </aside>
  );
}

import { Logo } from "./Aside/Logo";
import { Menu } from "./Aside/Menu";
import { Social } from "./Aside/Social";

export function Aside() {
  return (
    <aside className="hidden col-span-2 w-full bg-secondary900 md:flex flex-col justify-between h-full">
      <Logo />
      <Menu />
      <Social />
    </aside>
  );
}

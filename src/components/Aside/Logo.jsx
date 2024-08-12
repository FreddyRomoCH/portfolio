import { Link } from "react-router-dom";

export function Logo({ onClickOpenMenu }) {
  return (
    <header className="flex bg-primary500 justify-center w-full  p-1">
      <picture>
        <Link onClick={onClickOpenMenu} to="/">
          <img
            src="/freddy-logo-2.svg"
            alt="Freddy Romo Dev - Logo"
            className="w-20"
          />
        </Link>
      </picture>
    </header>
  );
}

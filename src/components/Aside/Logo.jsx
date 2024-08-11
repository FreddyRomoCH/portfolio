import { Link } from "react-router-dom";

export function Logo({ onClickOpenMenu }) {
  return (
    <header className="flex justify-center bg-primary400 w-full h-12">
      <picture>
        <Link onClick={onClickOpenMenu} to="/">
          <img src="/images/logo.png" alt="Freddy Romo Logo" className="w-20" />
        </Link>
      </picture>
    </header>
  );
}

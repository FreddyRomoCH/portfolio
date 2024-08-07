import { useState } from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/aboutMe/About";
import { Projects } from "./components/projects/Projects";
import "./App.css";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClickOpenMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        onClick={handleClickOpenMenu}
        className={`menu-mobile w-28- md:hidden bg-primary400 text-secondary900 py-1 px-5 rounded-b-md -rotate-90 fixed -left-10 top-1/2 -mt-36 z-30 pl-10 uppercase before:content-[url('/images/arrow.svg')] before:inline-block ${
          isMobileMenuOpen ? "before:-rotate-90" : "before:rotate-90"
        } before:w-[25px] before:h-[22px] before:fixed before:left-3 before:top-[6px]`}
      >
        Menu
      </div>
      <Home isMobileMenuOpen={isMobileMenuOpen} />
      <About />
      <Projects />
    </>
  );
}

export default App;

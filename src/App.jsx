import { useState } from "react";
import { Home } from "./components/home/Home";
import { About } from "./components/aboutMe/About";
import { Routes, Route } from "react-router-dom";
import { SingleProject } from "./components/SingleProject";
import { Aside } from "./components/Aside";
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

      <div className="relative bg-home-radial md:grid md:grid-cols-12 min-h-screen w-screen items-center px-0 md:px-8 2xl:px-10 md:gap-5">
        <div className="relative col-span-3">
          <Aside
            isMobileMenuOpen={isMobileMenuOpen}
            onClickOpenMenu={handleClickOpenMenu}
          />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/my-projects/:id/:name" element={<SingleProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

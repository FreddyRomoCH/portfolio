import "@github/typing-effect-element";
import { Aside } from "../Aside";

export function Home({ isMobileMenuOpen }) {
  return (
    <div className="relative bg-home-radial md:grid md:grid-cols-12 h-screen w-screen items-center px-0 md:px-8 2xl:px-10 md:gap-5">
      <Aside isMobileMenuOpen={isMobileMenuOpen} />
      <main className="relative flex flex-col justify-center items-center h-screen w-full md:col-span-9">
        {/* <div
          onClick={handleClickOpenMenu}
          className={`menu-mobile w-28- md:hidden bg-primary400 text-secondary900 py-1 px-5 rounded-b-md -rotate-90 fixed -left-10 -mt-6 z-30 pl-10 uppercase before:content-[url('/images/arrow.svg')] before:inline-block ${
            isMobileMenuOpen ? "before:-rotate-90" : "before:rotate-90"
          } before:w-[25px] before:h-[22px] before:absolute before:left-3 before:top-[6px]`}
        >
          Menu
        </div> */}
        <div className="grow flex flex-col justify-center items-center text-center">
          <typing-effect
            data-lines={JSON.stringify([
              "- Hi! My name is Freddy.",
              "- I'm Web Developer.",
            ])}
          >
            <span
              data-target="typing-effect.content"
              className="text-3xl font-medium md:text-4xl 2xl:text-5xl text-neutral50 md:w-3/4 text-center md:leading-[3.5rem] mb-5"
            ></span>
            <span data-target="typing-effect.cursor" className="text-neutral50">
              |
            </span>
          </typing-effect>

          <button className="text-neutral50 px-7 bg-primary400 hover:bg-primary500 py-2 2xl:py-3 w-36 rounded mt-5">
            Contact me
          </button>
        </div>

        <div className="down text-base flex flex-col justify-center items-center mb-8 animate-bounce">
          <p className="text-primary500">Scroll Down</p>
          <img className="h-8" src="/images/arrow-down.svg" alt="arrow down" />
        </div>
      </main>
    </div>
  );
}

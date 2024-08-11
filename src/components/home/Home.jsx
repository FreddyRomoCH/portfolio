import "@github/typing-effect-element";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <main className="relative flex flex-col justify-center items-center h-screen w-full md:col-span-9">
        <div className="grow flex flex-col justify-center items-center text-center">
          <typing-effect
            data-lines={JSON.stringify([
              "- Hi! My name is Freddy.",
              "- I'm a Web Developer.",
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

          <Link
            to="/projects"
            className="text-neutral50 px-7 w-auto bg-primary400 hover:bg-primary500 py-2 2xl:py-3 rounded mt-5"
          >
            Check out my projects
          </Link>
        </div>

        {/* <div className="down text-base flex flex-col justify-center items-center mb-8 animate-bounce">
          <p className="text-primary500">Scroll Down</p>
          <img className="h-8" src="/images/arrow-down.svg" alt="arrow down" />
        </div> */}
      </main>
    </>
  );
}

import "@github/typing-effect-element";

export function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center h-screen w-full md:col-span-10">
      <div className="grow flex flex-col justify-center items-center text-center">
        <typing-effect
          data-lines={JSON.stringify([
            "Hi! My name is Freddy and",
            "I'm Web Developer",
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

        {/* <h1 className="text-4xl 2xl:text-5xl text-neutral50 w-3/4 text-center leading-[3.5rem] mb-5">
          Hi! Mi name is{" "}
          <span className="text-primary500 font-bold">Freddy </span>
          and I’m a
          <span className="text-primary500 font-bold"> Web Developer</span>
        </h1> */}

        <button className="text-neutral50 px-7 bg-primary400 hover:bg-primary500 py-2 2xl:py-3 w-36 rounded mt-5">
          Contact me
        </button>
      </div>

      <div className="down text-base flex flex-col justify-center items-center mb-8 animate-bounce">
        <p className="text-primary500">Scroll Down</p>
        <img className="h-8" src="/images/arrow-down.svg" alt="arrow down" />
      </div>
    </main>
  );
}

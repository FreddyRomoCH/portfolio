export function Social() {
  return (
    <footer className="social bg-primary500 py-6">
      <ul className="flex flex-row justify-center gap-2">
        <li>
          <a href="https://github.com/FreddyRomoCH" target="_blank">
            <img
              src="/images/github.svg"
              alt="Github Icon"
              className="transition-transform ease-out duration-200 hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/freddy-romo-ch%C3%A1vez-6a0741165/"
            target="_blank"
          >
            <img
              src="/images/linkedin.svg"
              alt="Linkedin Icon"
              className="transition-transform ease-out duration-200 hover:scale-110"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

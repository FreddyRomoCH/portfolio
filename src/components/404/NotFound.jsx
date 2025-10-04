export function NotFound() {
  return (
    <section className="md:col-span-9 md:text-center px-4 lg:px-10 my-8 flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl md:text-7xl font-bold text-primary400">404</h1>
      <p className="text-2xl md:text-3xl text-primary400">Page not found.</p>

      <p className="mb-4 text-neutral-50 font-sans text-md font-light max-w-2xl">
        The link may be broken or the page was moved. Go back home or browse my
        projects.
      </p>

      <nav>
        <a
          href="/"
          className="bg-secondary900 border border-primary400 rounded-md px-6 py-4 text-neutral500 hover:bg-secondary800 transition-colors"
        >
          Go back to Home
        </a>
      </nav>
    </section>
  );
}

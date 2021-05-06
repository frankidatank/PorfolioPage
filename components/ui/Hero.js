export default function Hero() {
  return (
    <section className="px-2 py-28 bg-white md:px-0 border">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          <div className="w-full md:w-1/2 md:px-3">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">Full-Stack </span>
                <span className="block text-indigo-600 xl:inline">
                  Software Engineer
                </span>
              </h1>
              <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                Motivated software engineer with experience in development in
                Javascript, C++, and Java, also using frameworks including React
                and NextJS. Excited to join a team and bring a combination of
                excellent soft skills and coding experience and a passion to
                learn and grow in the industry.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
              <img src="/images/code.jpeg" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

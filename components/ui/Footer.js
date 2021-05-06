export default function Footer() {
  return (
    <footer className="text-gray-700 bg-white body-font">
      <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <a
          href="#_"
          className="text-xl font-black leading-none text-gray-900 select-none logo"
        >
          Frankie Murillo<span className="text-indigo-600">.</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
          Thanks for visiting....
        </p>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="https://github.com/frankidatank"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span className="sr-only">GitHub</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </span>
        <span className="inline-flex justify-center mt-4 space-x-5 sm:ml-75% sm:mt-0 sm:justify-start">
          <a
            href="https://www.linkedin.com/in/frankie-murillo-499445174/"
            className="text-gray-400 hover:text-gray-500"
            target="_blank"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

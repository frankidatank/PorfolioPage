const NavItem = (props) => {
  return (
    <li>
      <a
        href={props.href}
        className="text-md font-bold px-2 py-1 hover:bg-indigo-600 hover:bg-opacity-70 rounded transition-colors duration-300"
      >
        {props.text}
      </a>
    </li>
  );
};

export default function Navbar() {
  return (
    <header>
      <nav className="flex font-bold justify-between px-3 py-5 ">
        <div>
          <span className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none">
            Frankie Murillo.
          </span>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <NavItem href="/" text="Home" />
          </ul>
        </div>
      </nav>
    </header>
  );
}

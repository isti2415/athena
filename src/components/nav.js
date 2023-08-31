import Image from "next/image";

export default function Nav() {
  const navOptions = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <div className="navbar px-8">
      <div className="navbar-start">
        <a href="/" className="navbar-brand flex items-center gap-2">
          <Image
            src="/final.png"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="text-2xl font-bold text-secondary">Athena Empowerment Hub</span>
        </a>
      </div>
      <div className="navbar-end">
        <div className="dropdown">
          <label tabIndex={0} className="lg:hidden btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions.map((option) => (
              <li key={option}>
                <a href={option.link}>{option.name}</a>
              </li>
            ))}
            <button className="mt-2 btn btn-sm join-item btn-outline btn-secondary font-bold">
              Register
            </button>
            <button className="mt-2 btn btn-sm join-item btn-outline btn-secondary font-bold">
              Login
            </button>
          </ul>
        </div>
        <div className="hidden lg:block">
          <ul className="menu flex flex-row items-center">
            {navOptions.map((option) => (
              <li key={option}>
                <a href={option.link} className="text-md font-bold">
                  {option.name}
                </a>
              </li>
            ))}
            <div className="divider divider-horizontal"></div>
            <div className="join">
              <button className="btn btn-sm join-item btn-outline btn-secondary font-bold">
                Register
              </button>
              <button className="btn btn-sm join-item btn-outline btn-secondary font-bold">
                Login
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

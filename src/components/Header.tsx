// const navItems = ["Spaces", "Principles", "Stories"];

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="glass-header fixed inset-x-0 top-0 z-50 border-b border-outline-variant/15">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-lg shadow-primary/15">
            <span className="font-headline text-lg font-extrabold">Q</span>
          </div>
          <div>
            <p className="font-headline text-lg font-extrabold tracking-tight text-on-surface sm:text-xl">
              The Quiet Architect
            </p>
            <p className="hidden text-xs uppercase tracking-[0.24em] text-on-surface-variant sm:block">
              Calm by design
            </p>
          </div>
        </a>

        {/* <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-on-surface-variant hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav> */}

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden rounded-full border border-outline-variant/30 px-5 py-2.5 text-sm font-semibold text-on-surface hover:border-primary/40 hover:text-primary sm:inline-flex"
          >
            Log In
          </Link>
          <Link
            to="/"
            className="message-gradient inline-flex rounded-full px-5 py-2.5 text-sm font-bold text-on-primary shadow-lg shadow-primary/20 hover:scale-[1.01]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

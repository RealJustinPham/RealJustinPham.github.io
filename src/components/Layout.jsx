import { Outlet, NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/now", label: "Now" },
  { to: "/tools", label: "Tools" },
  { to: "/blog", label: "Blog" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <span className="dot" />
          <span>Justin Pham</span>
        </div>

        <nav className="nav">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => (isActive ? "navlink active" : "navlink")}
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Justin Pham</span>
        <span className="sep">•</span>
        <a href="https://github.com/RealJustinPham" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}
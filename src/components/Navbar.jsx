import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <span className="navbar-brand fw-bold fs-4">React Mastery</span>

      <div className="navbar-nav ms-4">
        <Link
          className={`nav-link ${
            location.pathname === "/" ? "active fw-bold" : ""
          }`}
          to="/"
        >
          Basics
        </Link>

        <Link
          className={`nav-link ${
            location.pathname === "/hooks" ? "active fw-bold" : ""
          }`}
          to="/hooks"
        >
          Hooks
        </Link>

        <Link
          className={`nav-link ${
            location.pathname === "/advanced" ? "active fw-bold" : ""
          }`}
          to="/advanced"
        >
          Advanced
        </Link>

        <Link className="nav-link" to="/api">
          API
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

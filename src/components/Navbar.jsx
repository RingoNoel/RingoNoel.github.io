import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", jp: "ホーム", label: "Home" },
  { path: "/band", jp: "バンド", label: "The Band" },
  { path: "/members", jp: "メンバー", label: "Members" },
  { path: "/discography", jp: "アルバム", label: "Discography" },
  { path: "/live", jp: "ライブ", label: "Live & Tours" },
  { path: "/films", jp: "映画", label: "Films" },
  { path: "/contact", jp: "リンク", label: "Connect" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="topbar">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          RADWIMPS
        </NavLink>

        <button
          className={`menu-btn ${isOpen ? "is-open" : ""}`}
          aria-label="Open navigation menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <aside className={`sidenav ${isOpen ? "is-open" : ""}`} aria-hidden={!isOpen}>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
                >
                  <span className="jp">{item.jp}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div
        className={`backdrop ${isOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Navbar;
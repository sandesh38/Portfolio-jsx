import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="/">MyWebsite</a>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/services" className="nav-link">Services</a>
          <a href="/contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
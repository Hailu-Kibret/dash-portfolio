import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photo from "../../asset/dash-high.png";
import "./navStyling.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive((prev) => !prev);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link onClick={closeMenu} to="/" className="navbar--content">
        <div className="navbar-img">
          <img width={120} src={photo} alt="Hailu Kibret" />
        </div>
      </Link>

      {/* Hamburger Menu */}
      <div
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </div>

      {/* Navigation Items */}
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              to="/#heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="/#MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="/#AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              to="/#testimonial"
              className="navbar--content"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>

      {/* Contact Button */}
      <Link
        onClick={closeMenu}
        to="/#Contact"
        className="btn btn-outline-primary nav-contact"
      >
        Contact me
      </Link>
    </nav>
  );
};

export default Navbar;

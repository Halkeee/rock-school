import React, { VFC } from "react";
import Icons from "./Icons";

const Navbar: VFC = () => {
  const [navbar, setNavbar] = React.useState(false);
  const [mobileNavbar, setMobileNavbar] = React.useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <div className={`nav is-hidden-touch ${navbar && "not-on-top"}`}>
        <a href="#about" className="nav-item">
          <Icons icon="about-us" /> O NAMA
        </a>
        <a href="#contact" className="nav-item">
          <Icons icon="contact-us" /> KONTAKT
        </a>
        <a href="#home" className="nav-logo">
          <img src="/images/placeholder.png" alt="Logo" />
        </a>
        <a href="#music-studio" className="nav-item">
          <Icons icon="music-studio" /> MUZIČKI STUDIO
        </a>
        <a href="#learn-to-play" className="nav-item">
          <Icons icon="learn" /> NAUČI SVIRATI
        </a>
      </div>

      <nav
        className="navbar is-hidden-desktop is-fixed-top is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#home">
            <img src="/images/placeholder.png" alt="Logo placeholder" />
          </a>

          <a
            role="button"
            className={`navbar-burger ${mobileNavbar ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="mobile-navbar"
            onClick={() => setMobileNavbar(!mobileNavbar)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="mobile-navbar"
          className={`navbar-menu ${mobileNavbar ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <a
              href="#about"
              onClick={(e) => {
                e.stopPropagation();
                setMobileNavbar(false);
              }}
              className="navbar-item nav-item"
            >
              <Icons icon="about-us" /> O NAMA
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.stopPropagation();
                setMobileNavbar(false);
              }}
              className="navbar-item nav-item"
            >
              <Icons icon="contact-us" /> KONTAKT
            </a>
            <a
              href="#music-studio"
              onClick={(e) => {
                e.stopPropagation();
                setMobileNavbar(false);
              }}
              className="navbar-item nav-item"
            >
              <Icons icon="music-studio" /> MUZIČKI STUDIO
            </a>
            <a
              href="#learn-to-play"
              onClick={(e) => {
                e.stopPropagation();
                setMobileNavbar(false);
              }}
              className="navbar-item nav-item"
            >
              <Icons icon="learn" /> NAUČI SVIRATI
            </a>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-social-medias">
                <a className="facebook">
                  <Icons icon="facebook" />
                </a>
                <a className="instagram">
                  <Icons icon="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

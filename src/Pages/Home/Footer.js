import { Link } from "react-router-dom";
import React from "react";
import photo from "../../asset/dash-high.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const date = new Date();
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div className="footer--intouch">
          <img width={120} src={photo} alt="Logo" />
          <h3>GET IN TOUCH</h3>
          <div className="contactme">
            <div className="contactmail">
              <span style={{ color: "blue" }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>

              <p>Hayalu4hb@gmail.com</p>
            </div>
            <div className="contactmail">
              <span style={{ color: "#24A1DE" }}>
                <FontAwesomeIcon icon={faTelegram} />
              </span>

              <p>@dash_427</p>
            </div>
            <div className="contactmail">
              <span style={{ color: "red" }}>
                <FontAwesomeIcon icon={faPhone} />
              </span>

              <p>09-00-97-31-00</p>
            </div>
          </div>
        </div>
        <div className="footer--items">
          <Link
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="/#Contact"
            className="btn btn-outline-primary"
          >
            Contact me
          </Link>
        </div>
        <div className="footer--social--icon">
          <ul>
            <li className="footer-special">
              <a
                href="https://github.com/DASH4274"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#24292e" }}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hailu-kibret"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077B5" }}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/DASH_427"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#24A1DE" }}
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>
          </ul>
          <p className="footer--content">
            &copy;{date.getFullYear()}. All rights reserved!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

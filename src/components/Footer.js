import React from "react";

// Import CSS
import "./Footer.css";

// Import Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/fontawesome-free";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-social-links">
          <a href="https://github.com/AliBailoun" title="GitHub">
            <FontAwesomeIcon className="font-awesome" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-bailoun-6a6670246/"
            title="LinkedIn"
          >
            <FontAwesomeIcon className="font-awesome" icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/ali_bailoun/"
            title="Instagram"
          >
            <FontAwesomeIcon className="font-awesome" icon={faInstagram} />
          </a>
        </div>
        <p className="footer-p">
          &copy; 2023 Ali Bailoun | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
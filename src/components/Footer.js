import React from "react";
import { MDBIcon } from 'mdb-react-ui-kit';

// Import CSS
import "../components/css/Footer.css";

// Import Font Awesome Icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faLinkedin,
//   faGithub,
//   faInstagram,
// } from "@fortawesome/fontawesome-free";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-social-links">
          <a href="https://github.com/AliBailoun" title="gitHub">
            {/* <FontAwesomeIcon className="font-awesome" icon={faGithub} /> */}
            <MDBIcon fab icon="github" />
          </a>
          <a href="https://www.linkedin.com/in/ali-bailoun-6a6670246/" title="linkedIn">
            {/* <FontAwesomeIcon className="font-awesome" icon={faLinkedin} /> */}
            <MDBIcon fab icon="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/ali_bailoun/" title="instagram">
            {/* <FontAwesomeIcon className="font-awesome" icon={faInstagram} /> */}
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
        <p className="footer-p">
          &copy; 2023 Ali Bailoun | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
import React from "react";
// import { MDBIcon } from 'mdb-react-ui-kit';

import "../components/css/Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/fontawesome-free";

export default function Footer() {
  return (
    <>
      <footer className="footer ">
        <div className="footer-social-links">
          <a className='d-flex justify-content-center' href="https://github.com/AliBailoun" title="GitHub">
            <FontAwesomeIcon className="font-awesome " icon={faGithub} />
            GitHub,
          </a>
          <a className='d-flex justify-content-center' href="https://www.linkedin.com/in/ali-bailoun-6a6670246/" title="LinkedIn">
            <FontAwesomeIcon className="font-awesome " icon={faLinkedin} />LinkedIn,
          </a>
          <a className='d-flex justify-content-center' href="https://www.instagram.com/ali_bailoun/" title="Instagram">
            <FontAwesomeIcon className="font-awesome d-flex " icon={faInstagram} />
            Instagram
          </a>
        </div>
        <p className="footer-p">
          &copy; 2023 Ali Bailoun | All Rights Reserved
        </p>
      </footer>
    </>
  );
}
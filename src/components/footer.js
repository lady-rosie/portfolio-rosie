import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
  <footer>
      <div className="footer">
        <Link>Get in touch !</Link>
        <div className="social-links">
          <Link to="#"> <FontAwesomeIcon icon={["fab", "github"]} /> </Link>
          <Link to="#"> <FontAwesomeIcon icon={["fab", "linkedin"]} /> </Link>
        </div>
      </div>
  </footer>
)


export default Footer;

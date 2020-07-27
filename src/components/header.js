import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => (
  <header>
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">ROSE GRONDIN</Link>
        </div>
        <div className="navigation">
          <nav>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          </nav>
        </div>
      </div>
      <div className="right-nav-side">
        <div className="separetor"></div>
        <div className="social-links">
        <Link to="#"> <FontAwesomeIcon icon={["fab", "github"]} /> </Link>
        <Link to="#"> <FontAwesomeIcon icon={["fab", "linkedin"]} /> </Link>
        </div>
      </div>
  </header>
)


export default Header

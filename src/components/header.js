import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="nav-bar">
        <div className="logo">
          <Link to="/">ROSE GRONDIN</Link>
        </div>
        <div className="navigation">
          <nav>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">Contact</Link>
          </nav>
        </div>
      </div>

    </div>
  </header>
)


export default Header

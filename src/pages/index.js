import React from "react"
//import style
import "../styles/styles.scss"
//import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
//import components
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import TechnicalSkills from "../components/technical-skills"
import Projects from "../components/projects-section"
import Footer from "../components/footer"

library.add(fab, faLinkedin, faGithub, faArrowDown, faArrowRight)

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <TechnicalSkills />
    <Projects />
    <Footer />
  </div>
)

export default IndexPage

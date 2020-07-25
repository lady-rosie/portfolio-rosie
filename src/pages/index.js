import React from "react"
import "../styles/styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Header from "../components/header"
import Banner from "../components/banner"
import About from "../components/about"
import TechnicalSkills from "../components/technical-skills"

library.add(fab, faLinkedin, faGithub, faArrowDown, faArrowRight)

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About />
    <TechnicalSkills />
  </div>
)

export default IndexPage

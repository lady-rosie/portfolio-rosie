import React from "react"
import "../styles/styles.scss"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Header from "../components/header"
import Banner from "../components/banner"

library.add(fab, faLinkedin, faGithub, faArrowDown)

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
  </div>
)

export default IndexPage

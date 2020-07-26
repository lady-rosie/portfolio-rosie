import React from "react"
import { useStaticQuery, graphl, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      lesClassiques: file(relativePath: { eq: "Les-petits-classique.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cocktailA: file(relativePath: { eq: "Cocktail-advisor.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return(
        <div className="projects-section">
            <div className="container">
                <div className="project-content">
                    <h2>Projects</h2>
                    <div className="projects-list">
                        <div className="project">
                            <Img fluid={data.lesClassiques.childImageSharp.fluid} />
                        </div>
                        <div className="project">
                            <Img fluid={data.cocktailA.childImageSharp.fluid} />
                        </div>
                        <div className="project">
                            <Img fluid={data.cocktailA.childImageSharp.fluid} />
                        </div>
                        <div className="project">
                            <Img fluid={data.cocktailA.childImageSharp.fluid} />
                        </div>
                    </div>
                    <div className="project-button">
                            <p>All projects</p>
                         <Link to="/projects"><span><FontAwesomeIcon icon="arrow-right"/></span></Link>
                     </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;
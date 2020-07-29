import React from "react"
import { useStaticQuery, graphl, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = () => {
    const data = useStaticQuery(graphql`
    query {
      lesClassiques: file(relativePath: { eq: "Les-petits-classique.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      figmaLogo: file(relativePath: { eq: "Figma-1-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
      greenThumb: file(relativePath: { eq: "Greenthumb-project.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      stellactica: file(relativePath: { eq: "Mockup-stellactica.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      marie: file(relativePath: { eq: "Mockup-Marie.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      isabelle: file(relativePath: { eq: "Mockup-isabelleduvert.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
<div className="project-page">
    <div className="container">
      <div className="project-card">
        <div className="project-image">
          <Img fluid={data.lesClassiques.childImageSharp.fluid} />
        </div>
        <div className="project-content">
          <h2>Name of the project</h2>
          <p>This is a project a made about ...</p>
          <div className="tools-icons"> 
            <Img fluid={data.figmaLogo.childImageSharp.fluid} />
            <div className="project-links">
              <Link>See figma</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <Img fluid={data.cocktailA.childImageSharp.fluid} />
        </div>
        <div className="project-content">
          <h2>Name of the project</h2>
          <p>This is a project a made about ...</p>
          <div className="tools-icons"> 
            <Img fluid={data.figmaLogo.childImageSharp.fluid} />
            <div className="project-links">
              <Link>See figma</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <Img fluid={data.greenThumb.childImageSharp.fluid} />
        </div>
        <div className="project-content">
          <h2>Name of the project</h2>
          <p>This is a project a made about ...</p>
          <div className="tools-icons"> 
            <Img fluid={data.figmaLogo.childImageSharp.fluid} />
            <div className="project-links">
              <Link>See figma</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <Img fluid={data.stellactica.childImageSharp.fluid} />
        </div>
        <div className="project-content">
          <h2>Name of the project</h2>
          <p>This is a project a made about ...</p>
          <div className="tools-icons"> 
            <Img fluid={data.figmaLogo.childImageSharp.fluid} />
            <div className="project-links">
              <Link>See figma</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <Img fluid={data.marie.childImageSharp.fluid} />
        </div>
        <div className="project-content">
          <h2>Name of the project</h2>
          <p>This is a project a made about ...</p>
          <div className="tools-icons"> 
            <Img fluid={data.figmaLogo.childImageSharp.fluid} />
            <div className="project-links">
              <Link>See figma</Link>
              </div>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-image">
          <Img fluid={data.isabelle.childImageSharp.fluid} />
        </div>
        <div className="project-content">
          <h2>Name of the project</h2>
          <p>This is a project a made about ...</p>
          <div className="tools-icons"> 
            <Img fluid={data.figmaLogo.childImageSharp.fluid} />
            <div className="project-links">
              <Link>See figma</Link>
              </div>
          </div>
        </div>
      </div>

    </div>
</div>
    )
}
export default Project;
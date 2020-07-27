import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphl, Link } from "gatsby"


const Stack = ()=> {
    const data = useStaticQuery(graphql`
    query {
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rubyLogo: file(relativePath: { eq: "ruby_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cssLogo: file(relativePath: { eq: "CSS3_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
      bootstrapLogo: file(relativePath: { eq: "Bootstrap_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jsLogo: file(relativePath: { eq: "JavaScript-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reactLogo: file(relativePath: { eq: "React-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sassLogo: file(relativePath: { eq: "Sass_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      postgresLogo: file(relativePath: { eq: "Postgresql.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gitLogo: file(relativePath: { eq: "Git_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return(
        <div className="stack-logos">
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.cssLogo.childImageSharp.fluid} />
                <p>CSS3</p>
            </div>
            <div className="stack">
                <Img fluid={data.jsLogo.childImageSharp.fluid} />
                <p>JavaScript ES6</p>
            </div>
            <div className="stack">
                <Img fluid={data.reactLogo.childImageSharp.fluid} />
                <p>React</p>
            </div>
            <div className="stack">
                <Img fluid={data.rubyLogo.childImageSharp.fluid} />
                <p>Ruby on Rails</p>
            </div>
            <div className="stack">
                <Img fluid={data.bootstrapLogo.childImageSharp.fluid} />
                <p>Bootstrap</p>
            </div>
            <div className="stack">
                <Img fluid={data.figmaLogo.childImageSharp.fluid} />
                <p>Figma</p>
            </div>
            <div className="stack">
                <Img fluid={data.sassLogo.childImageSharp.fluid} />
                <p>Sass</p>
            </div>
            <div className="stack">
                <Img fluid={data.gitLogo.childImageSharp.fluid} />
                <p>Git & Github</p>
            </div>
            <div className="stack">
                <Img fluid={data.postgresLogo.childImageSharp.fluid} />
                <p>PostgreSQL</p>
            </div>
        </div>
    )
}
export default Stack;
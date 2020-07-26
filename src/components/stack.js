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
      railsLogo: file(relativePath: { eq: "Ruby_On_Rails_Logo.svg.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      htmlLogo: file(relativePath: { eq: "HTML5_logo.png" }) {
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
                <Img fluid={data.railsLogo.childImageSharp.fluid} />
                <p>CSS3</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>JavaScript ES6</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>React</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Ruby on Rails</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Bootstrap</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Figma</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Sass</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Git & Github</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>PostgreSQL</p>
            </div>
        </div>
    )
}
export default Stack;
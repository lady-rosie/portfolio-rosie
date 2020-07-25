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
    }
  `)
    return(
        <div className="stack-logos">
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
            <div className="stack">
                <Img fluid={data.htmlLogo.childImageSharp.fluid} />
                <p>Html5</p>
            </div>
        </div>
    )
}
export default Stack;
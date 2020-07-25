import React from "react"
import { useStaticQuery, graphl, Link } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
<div className="banner">
    <div className="container">
        <div className="presentation">
            <div className="main-text">
                    <h1>Hi, I'm Rose Grondin</h1>
                    <span>Front-end developer</span>
                    <p>Recently completed a 9-week full stack web developement course, I’m seeking new projects to work on.</p>
                    <p>email: <Link to="mailto:rose.grondin@gmail.com">rose.grondin@gmail.com</Link></p>
                    <button className="light-green-btn">Download resume</button>
            </div>
            <div className="main-picture">
                <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </div>
        </div>
        <div className="scroll">
            <span>Scroll</span>
        </div>
    </div>
</div>
    )
}
export default Banner;
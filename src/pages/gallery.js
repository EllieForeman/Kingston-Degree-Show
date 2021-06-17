import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'



class ProductPage extends React.Component {
    
    render() {
        const products = get(this, 'props.data.allDataJson.edges')
        console.log(products)

        return (
        <Layout>
            <div className="outerDiv">
                {products.map(({ node }, index) => {
                    console.log('insta', node.instagram)
                    return (
                        <div key={index} className={`image${index} flex-container`}>
                            <div className="img1-wrap">
                                <img src={node.profileImage.childImageSharp.fluid.src} alt={node.alt} className="image"/>
                                <div className="overlay">
                                    <div className="text">
                                        <p>{node.artist}</p>
                                        <div className="socialIcons">
                                            {node.instagram && <a href="https://twitter.com/gatsbyjs"><FontAwesomeIcon aria-label="instagram link" className="socialIcon" icon={faInstagram} /></a>}
                                            {node.website && <a href="https://twitter.com/gatsbyjs"><FontAwesomeIcon aria-label="website link" className="socialIcon" icon={faUserAstronaut} /></a>}
                                            {node.email && <a href="https://twitter.com/gatsbyjs"><FontAwesomeIcon aria-label="email link" className="socialIcon" icon={faEnvelope} /></a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Layout>
        )
    }
}

export default ProductPage


export const productsQuery = graphql`
  query {
    allDataJson {
      edges {
        node {
          artist
          email
          website
          instagram
          profileImage {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`
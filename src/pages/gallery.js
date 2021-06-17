import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"

class ProductPage extends React.Component {
  render() {

    const products = get(this, 'props.data.allDataJson.edges')
    console.log(products)

    return (
      <Layout>
        <div className="outerDiv">
            {products.map(({ node }) => {
                return (
                    <div key={node.artist}>
                    {/* <p>{node.artist}</p> */}
                    <img class="profileImage"
                    src={node.profileImage.childImageSharp.fluid.src}
                    alt={node.alt}/>
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
          link
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
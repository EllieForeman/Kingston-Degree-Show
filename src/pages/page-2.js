import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'

class ProductPage extends React.Component {
  render() {

    const products = get(this, 'props.data.allDataJson.edges')
    console.log(products)

    return (
      <Layout>
        {products.map(({ node }) => {
          return (
            <div key={node.artist}>
              <p>{node.artist}</p>
              <img src={node.profileImage.childImageSharp.fluid.src} />
            </div>
          )
        })}
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
        }
      }
    }
  }
`
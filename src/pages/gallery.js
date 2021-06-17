import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isHovered: false
        };
        this.handleImageHover = this.handleImageHover.bind(this);
    }

    handleImageHover() {
        console.log("inside")
        this.setState({
          isHovered: !this.state.isHovered
        });
    }

  render() {
    const menuActive = this.state.isHovered ? "active" : "";
    console.log('menu', menuActive)
    const products = get(this, 'props.data.allDataJson.edges')
    console.log(products)

    return (
      <Layout>
        <div className="outerDiv">
            {products.map(({ node }, index) => {
                return (
                    <div className={`image${index} innerDiv`} onMouseEnter={this.handleImageHover} onMouseLeave={this.handleImageHover}>    
                        <div id="imgOverlayColour">
                        <p className={(menuActive === "active" ? 'overlayText' : 'displayNone')}>{node.artist}</p>
                        <img
                        className={menuActive}
                        src={node.profileImage.childImageSharp.fluid.src}
                        alt={node.alt}/>
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
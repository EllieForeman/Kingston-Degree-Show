import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../components/header.css'
import gifExample from '../images/profile-photos/testgif1.gif'


class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "all",
            products: get(this, 'props.data.allDataJson.edges').sort(() => Math.random() - 0.5)
        }
        this.handleClick = this.filter.bind(this);
    }
    filter(tag) {
        if (tag === "all") {
            console.log("button clicked", tag)
            this.setState({products: get(this, 'props.data.allDataJson.edges').sort(() => Math.random() - 0.5)})
        } else {
            let taggedArray = get(this, 'props.data.allDataJson.edges').filter(obj => {
                return obj.node.tag.includes(tag)
            })
            this.setState({products: taggedArray.sort(() => Math.random() - 0.5)})
        };
        this.setState({ tag: tag });
    }        



    render() {
        const products = this.state.products
        console.log(products)
        console.log('tag', this.state.tag === "all")
        return (
        <Layout>
            <div className="flex">
            {/* DESKTOP HEADER */}
            <header className="header headerDesktop">
                <Link to="/" className="logoImage">
                    <StaticImage src="../images/logo-with-text.png"
                    alt="Logo"
                    placeholder="tracedSVG"
                    layout="fixed"
                    width={200}
                    height={200}
                    />
                </Link>
                <div class="navLinkSection">
                    <ul>
                        <li className="TopNav"><button onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button></li>
                        <li className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("all")}><StaticImage className="icon" src="../images/shapes/grain-3.png" width={40} alt="Logo" placeholder="tracedSVG"/>all</button></li>
                        <li className={this.state.tag === "moving image" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("moving image")}><StaticImage className="icon" src="../images/shapes/moving-image.png" width={40} alt="Logo" placeholder="tracedSVG"/>moving image</button></li>
                        <li className={this.state.tag === "illustration" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("illustration")}><StaticImage className="icon" src="../images/shapes/illustration.png" width={40} alt="Logo" placeholder="tracedSVG"/>illustration</button></li>
                        <li className={this.state.tag === "animation" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("animation")}><StaticImage className="icon" src="../images/shapes/animation.png" width={40} alt="Logo" placeholder="tracedSVG"/>animation</button></li>
                        <li className={this.state.tag === "children's books" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("children's books")}><StaticImage className="icon" src="../images/shapes/childrens-book.png" width={40} alt="Logo" placeholder="tracedSVG"/>children's books</button></li>
                        <li className={this.state.tag === "documentary" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("documentary")}><StaticImage className="icon" src="../images/shapes/documentary.png" width={40} alt="Logo" placeholder="tracedSVG"/>documentary</button></li>
                        <li className={this.state.tag === "etc" ? "tagActive tagFilter TopNav" : "tagFilter TopNav"}><button onClick={() => this.filter("etc")}><StaticImage className="icon" src="../images/shapes/etc.png" width={40} alt="Logo" placeholder="tracedSVG"/>etc</button></li>
                        <li><Link to="/about" className="menuLink">about</Link></li>
                    </ul>
                </div>
            </header>
            {/* MOBILE HEADER */}
            <header className="headerMobile">
                <Link to="/" className="logoImageMobile flexCenter">
                        <StaticImage src="../images/logo-with-text.png"
                        alt="Logo"
                        placeholder="tracedSVG"
                        layout="fixed"
                        width={150}
                        height={150}
                        />
                </Link>
                <div className="flexCenter paddingTop">
                    <button onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button>
                    <Link to="/about" className="menuLink">about</Link>
                </div>
                <div class="mobileFilterContainer">
                    <p className="filterBy">Filter by:</p>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("all")}>all</button>
                        <StaticImage className="icon" src="../images/shapes/grain-3.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "moving image" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("moving image")}>moving image</button>
                        <StaticImage className="icon" src="../images/shapes/moving-image.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "illustration" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("illustration")}>illustration</button>
                        <StaticImage className="icon" src="../images/shapes/illustration.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "animation" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("animation")}>animation</button>
                        <StaticImage className="icon" src="../images/shapes/animation.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "children's books" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("children's books")}>children's books</button>
                        <StaticImage className="icon" src="../images/shapes/childrens-book.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "documentary" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("documentary")}>documentary</button>
                        <StaticImage className="icon" src="../images/shapes/documentary.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div class="flexCenterReverse">
                        <button className={this.state.tag === "etc" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("etc")}>etc</button>
                        <StaticImage className="icon" src="../images/shapes/etc.png" width={40} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                </div>
            </header>
            {/* GALLERY OF IMAGES */}
            <div className="outerDiv">

                {products.map(({ node }, index) => {
                    console.log('extension', typeof(node.extension))
                    return (
                        <div key={index} className={`image${index} flex-container ${node.tag}`}>
                            <div className="img1-wrap">
                                {node.extension.includes("gif")
                                    ? <img src={gifExample} alt={node.alt} />
                                    : <img src={node.profileImage.childImageSharp.fluid.src} alt={node.alt} className="image"/>
                                }
                                <div className="overlay">
                                    <div className="text">
                                        <p>{node.artist}</p>
                                        <div className="socialIcons">
                                            {node.instagram && <a href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="instagram link" className="socialIcon" icon={faInstagram} /></a>}
                                            {node.website && <a href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="website link" className="socialIcon" icon={faUserAstronaut} /></a>}
                                            {node.email && <a href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon aria-label="email link" className="socialIcon" icon={faEnvelope} /></a>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
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
          tag
          extension
        }
      }
    }
  }
`
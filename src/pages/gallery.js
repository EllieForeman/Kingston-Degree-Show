import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../components/header.css'
import gifExample from '../images/profile-photos/testgif1.gif'
import { FaInstagram } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaBeer } from 'react-icons/fa';



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
                        <li><Link to="/about" className="menuLink">about</Link></li>
                        <li><Link to="/graduates" className="menuLink">graduates</Link></li>
                        <li className="TopNav"><button onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button></li>
                        <li className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("all")}><StaticImage className="icon" src="../images/shapes/grain-3.png" width={40} alt="Logo" placeholder="tracedSVG"/>all</button></li>
                        <li className={this.state.tag === "moving image" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("moving image")}><StaticImage className="icon" src="../images/shapes/moving-image.png" width={40} alt="Logo" placeholder="tracedSVG"/>moving image</button></li>
                        <li className={this.state.tag === "illustration" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("illustration")}><StaticImage className="icon" src="../images/shapes/illustration.png" width={40} alt="Logo" placeholder="tracedSVG"/>illustration</button></li>
                        <li className={this.state.tag === "animation" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("animation")}><StaticImage className="icon" src="../images/shapes/animation.png" width={40} alt="Logo" placeholder="tracedSVG"/>animation</button></li>
                        <li className={this.state.tag === "children's books" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("children's books")}><StaticImage className="icon" src="../images/shapes/childrens-book.png" width={40} alt="Logo" placeholder="tracedSVG"/>children's books</button></li>
                        <li className={this.state.tag === "documentary" ? "tagActive tagFilter" : "tagFilter"}><button onClick={() => this.filter("documentary")}><StaticImage className="icon" src="../images/shapes/documentary.png" width={40} alt="Logo" placeholder="tracedSVG"/>documentary</button></li>
                        <li className={this.state.tag === "etc" ? "tagActive tagFilter TopNav" : "tagFilter TopNav"}><button onClick={() => this.filter("etc")}><StaticImage className="icon" src="../images/shapes/etc.png" width={40} alt="Logo" placeholder="tracedSVG"/>etc</button></li>
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
                        width={120}
                        height={120}
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
                    console.log('extension', node)
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
                                        <div className="flexAround">
                                        <p><a href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></p>
                                        <p><a href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener noreferrer"><CgProfile /></a></p>
                                        <p><a href="https://twitter.com/gatsbyjs" target="_blank" rel="noopener noreferrer"><HiOutlineMailOpen /></a></p>
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
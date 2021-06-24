import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../components/header.css'
// import gifExample from '../images/profile-photos/testgif1.gif'
import { FaInstagram } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { node } from 'prop-types'
import { faBimobject } from '@fortawesome/free-brands-svg-icons'



class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: "all",
            showEmailCopy: false,
            products: get(this, 'props.data.allDataJson.edges')
        }
        this.handleClick = this.filter.bind(this);
        this.handleClick = this.showEmailCopy.bind(this);
    }

    filter(tag) {
        if (tag === "all") {
            this.setState({products: get(this, 'props.data.allDataJson.edges')})
        }
        else if (tag === "MovingImage") {
            let taggedArray = get(this, 'props.data.allDataJson.edges').filter(obj => {
                let results = obj.node.tag.includes("stopMotion") || obj.node.tag.includes("2D") || obj.node.tag.includes("3D") || obj.node.tag.includes("MovingImage");
                if (results) {
                    return obj.node  
                }
            })
            this.setState({products: taggedArray})
        } 
        else {
            let taggedArray = get(this, 'props.data.allDataJson.edges').filter(obj => {
                return obj.node.tag.includes(tag)
            })
            this.setState({products: taggedArray})
        };
        this.setState({ tag: tag });
    }      

    showEmailCopy(email) {
        this.setState({ showEmailCopy: true });
        setTimeout(() => {
            this.setState({ showEmailCopy: false });
        }, 1000);
        navigator.clipboard.writeText(email);
    }

    componentDidMount = () => {
        window.addEventListener("load", this.refresh());
    }

    refresh() {
        this.setState({products: get(this, 'props.data.allDataJson.edges')})
    }

    render() {
        const products = this.state.products
        return (
        <Layout>
            <div className="flex">
            {/* DESKTOP HEADER */}
            <header className="header headerDesktop">
                <div className="flexCenter">
                    <Link to="/" className="logoImage">
                        <StaticImage src="../images/logoTwo.png"
                        alt="Logo"
                        placeholder="blurred"
                        layout="fixed"
                        width={200}
                        height={200}
                        className="logoImage"
                        />
                    </Link>
                </div>
                <div className="navLinkSection">
                    <ul className="scrollableList">
                        <li><Link to="/about" className="menuLink">about</Link></li>
                        <li><Link to="/graduates" className="menuLink">graduates</Link></li>
                        <li className="TopNav catalogue"><button onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button></li>
                        <li><button className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("all")}><StaticImage className="icon noTwist" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>All</button></li>
                        <li><button className={this.state.tag === "MovingImage" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("MovingImage")}><StaticImage className="icon noTwist" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>Moving Image</button></li>
                        <li><button className={this.state.tag === "Printmaking" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Printmaking")}><StaticImage className="icon noTwist" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>Printmaking</button></li>
                        <li><button className={this.state.tag === "Drawings" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Drawings")}><StaticImage className="icon twist" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>Drawings</button></li>
                        <li><button className={this.state.tag === "ChildrenBooks" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("ChildrenBooks")}><StaticImage className="icon noTwist" src="../images/shapes/grain-2.png" width={30} alt="Logo" placeholder="tracedSVG"/>Children's Books</button></li>
                        <li><button className={this.state.tag === "ComicsGN" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("ComicsGN")}><StaticImage className="icon noTwist" src="../images/shapes/etc.png" width={30} alt="Logo" placeholder="tracedSVG"/>Graphic novels</button></li>
                        <li><button className={this.state.tag === "Publication" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Publication")}><StaticImage className="icon twist" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>Publication</button></li>
                        <li><button className={this.state.tag === "Installation" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Installation")}><StaticImage className="icon twist" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>Installation</button></li>
                        <li><button className={this.state.tag === "Objects" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Objects")}><StaticImage className="icon twist" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>Objects</button></li>
                        <li><button className={this.state.tag === "Textiles" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Textiles")}><StaticImage className="icon twist" src="../images/shapes/moving-image.png" width={30} alt="Logo" placeholder="tracedSVG"/>Textiles</button></li>
                        <li><button className={this.state.tag === "GamesDesign" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("GamesDesign")}><StaticImage className="icon twistTwo" src="../images/shapes/etc.png" width={30} alt="Logo" placeholder="tracedSVG"/>Games Design</button></li>
                        <li><button className={this.state.tag === "DigitalArt" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("DigitalArt")}><StaticImage className="icon noTwist" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>Digital Art</button></li>
                        <li><button className={this.state.tag === "Workshops" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Workshops")}><StaticImage className="icon twist" src="../images/shapes/grain-2.png" width={30} alt="Logo" placeholder="tracedSVG"/>Educational</button></li>
                    </ul>
                </div>
            </header>
            {/* MOBILE HEADER */}
            <header className="headerMobile">
                <Link to="/" className="logoImageMobile flexCenter">
                        <StaticImage src="../images/logoTwo.png"
                        alt="Logo"
                        placeholder="tracedSVG"
                        layout="fixed"
                        width={120}
                        height={120}
                        />
                </Link>
                <div className="flexCenter paddingTop">
                    <Link to="/about" className="menuLink">about</Link>
                    <Link to="/graduates" className="menuLink">graduates</Link>
                    <button className="buttonmenuLink" onClick={() => this.filter("all")}><Link to="/gallery" className="menuLink active">catalogue</Link></button>
                </div>
                <div className="mobileFilterContainer">
                    <p className="filterBy">Filter by:</p>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "all" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("all")}>All</button>
                        <StaticImage className="icon noTwist" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "MovingImage" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("MovingImage")}>Moving Image</button>
                        <StaticImage className="icon noTwist" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Printmaking" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Printmaking")}>Printmaking</button>
                        <StaticImage className="icon noTwist" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Drawings" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Drawings")}>Drawings</button>
                        <StaticImage className="icon twist" src="../images/shapes/grain-3.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "ChildrenBooks" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("ChildrenBooks")}>children's books</button>
                        <StaticImage className="icon noTwist" src="../images/shapes/grain-2.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "ComicsGN" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("ComicsGN")}>Graphic novels</button>
                        <StaticImage className="icon noTwist" src="../images/shapes/etc.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Publication" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Publication")}>Publication</button>
                        <StaticImage className="icon twist" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Installation" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Installation")}>Installation</button>
                        <StaticImage className="icon twist" src="../images/shapes/animation.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Objects" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Objects")}>Objects</button>
                        <StaticImage className="icon twist" src="../images/shapes/documentary.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Textiles" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Textiles")}>Textiles</button>
                        <StaticImage className="icon twist" src="../images/shapes/moving-image.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "GamesDesign" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("GamesDesign")}>Games Design</button>
                        <StaticImage className="icon twistTwo" src="../images/shapes/etc.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "DigitalArt" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("DigitalArt")}>Digital Art</button>
                        <StaticImage className="icon noTwist" src="../images/shapes/illustration.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                    <div className="flexCenterReverse">
                        <button className={this.state.tag === "Workshops" ? "tagActive tagFilter" : "tagFilter"} onClick={() => this.filter("Workshops")}>Educational</button>
                        <StaticImage className="icon twist" src="../images/shapes/grain-2.png" width={30} alt="Logo" placeholder="tracedSVG"/>
                    </div>
                </div>
            </header>
            {/* GALLERY OF IMAGES */}
            <div className="outerDiv">
                {products.sort(() => Math.random() - 0.5).map(({ node }, index) => {
                    return (
                        <div key={index} id={node.artist} className={ node.profileImage !== null ? `image${index} flex-container ${node.tag}` : `image${index} flex-container ${node.tag} displayNone`}>
                            {node.profileImage !== null &&
                                <div className="img1-wrap">
                                    <img src={node.profileImage.childImageSharp.fluid.src} alt="profile of artist" className="image"/>
                                    <div className="overlay">
                                        <div className="text">
                                            <p className="artistName">{node.artist}</p>
                                            <div className="flexAround">
                                                {node.instagram && <p className="iconP"><a href={node.instagram} target="_blank" rel="noopener noreferrer" width="5px"><FaInstagram /></a></p>}
                                                {node.website && <p className="iconP"><a href={node.website} target="_blank" rel="noopener noreferrer"><CgProfile /></a></p>}
                                                {node.email && <p className="iconP">
                                                    <a onClick={() => this.showEmailCopy(node.email)}><HiOutlineMailOpen /></a></p>}
                                            </div>
                                            <p className={this.state.showEmailCopy ? "display emailCopy" : "emailCopy"}>email copied!</p>
                                        </div>
                                    </div>
                                </div>
                            }
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
          tag
          extension
        }
      }
    }
  }
`
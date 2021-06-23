import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import get from 'lodash/get'
import "./gallery.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../components/header.css'
import '../pages/graduates.css'
import '../pages/gallery.css'
import '../pages/about.css'

class GraduatesPage extends React.Component {

    render() {
        const graduates = get(this, 'props.data.allDataJson.edges')
        let twentyTwenty = [];
        let twentyTwentyOne = [];
        graduates.map(({ node }) => {
            console.log('in array', node.year)
            if (node.year === "2020") {
                twentyTwenty.push(node);
            } else {
                twentyTwentyOne.push(node)
            }
        })
        const halfTwentyTwenty = Math.ceil(twentyTwenty.length / 2);    
        const firstHalfTwentyTwenty = twentyTwenty.splice(0, halfTwentyTwenty); 
        const secondHalfTwentyTwenty = twentyTwenty.splice(-halfTwentyTwenty); 
        const halfTwentyTwentyOne = Math.ceil(twentyTwentyOne.length / 2);    
        const firstHalfTwentyTwentyOne = twentyTwentyOne.splice(0, halfTwentyTwentyOne); 
        const secondHalfTwentyTwentyOne = twentyTwentyOne.splice(-halfTwentyTwentyOne); 

        return (
            <Layout>
                <div>
                    <header className="header headerDesktop">
                        <Link to="/" className="logoImage">
                            <StaticImage src="../images/logoTwo.png"
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
                                <li><Link to="#" className="menuLink active">graduates</Link></li>
                                <li className="TopNav"><Link to="/gallery" className="menuLink">catalogue</Link></li>
                            </ul>
                        </div>
                    </header>
                    <header className="headerMobile">
                        <Link to="/" className="logoImageMobile flexCenter">
                                <StaticImage src="../images/logoTwo.png"
                                alt="Logo"
                                placeholder="tracedSVG"
                                layout="fixed"
                                width={150}
                                height={150}
                                />
                        </Link>
                        <div className="flexCenter paddingTop">
                            <Link to="/gallery" className="menuLink">catalogue</Link>
                            <Link to="#" className="menuLink active">about</Link>
                        </div>
                    </header>
                    <div className="aboutOuterDiv">
                        <h1 className="title">Graduates</h1>
                        <div className="flexEven">
                            <div className="graduateYearColumn">
                                <h1 className="yearTitle">2020.</h1>
                                {firstHalfTwentyTwenty.map(person => {
                                    return (
                                        <div>
                                            <h3 className="graduateName">{person.artist}</h3> 
                                            <h3 className="graduateEmail">{person.email}</h3>    
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="graduateYearColumn bottom">
                                {secondHalfTwentyTwenty.map(person => {
                                    return (
                                        <div>
                                            <h3 className="graduateName">{person.artist}</h3> 
                                            <h3 className="graduateEmail">{person.email}</h3>    
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="graduateYearColumn">
                                <h1 className="yearTitle">2021.</h1>
                                {firstHalfTwentyTwentyOne.map(person => {
                                    return (
                                        <div>
                                            <h2 className="graduateName">{person.artist}</h2>
                                            <h3 className="graduateEmail">{person.email}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="graduateYearColumn bottom">
                                {secondHalfTwentyTwentyOne.map(person => {
                                    return (
                                        <div>
                                            <h2 className="graduateName">{person.artist}</h2>
                                            <h3 className="graduateEmail">{person.email}</h3>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default GraduatesPage


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
          year
        }
      }
    }
  }
`
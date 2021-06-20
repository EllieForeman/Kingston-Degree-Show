import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../pages/about.css'

const AboutPage = () => (
    <Layout>
        <div className="flex">
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
                        <li className="TopNav"><Link to="/gallery" className="menuLink">catalogue</Link></li>
                        <li><Link to="#" className="menuLink active">about</Link></li>
                    </ul>
                </div>
            </header>
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
                    <Link to="/gallery" className="menuLink">catalogue</Link>
                    <Link to="#" className="menuLink active">about</Link>
                </div>
            </header>
            <div className="aboutOuterDiv">
                <h1 className="title">We are Reconnecting.</h1>
                <p className="aboutBody">With the Covid switch to more digital learning, we have been dealing with dodgy internet and broken connections; we have been communicating with each other in virtual rooms and corridors. While we have been engaged with the digital, we have also been reconnecting to other things: nature, ourselves, our cultures and the rest of the world. </p>
                <p className="aboutBody">For the first time, two graduate years - graduates of 2020 and 2021 - are holding a show together. This is in the <b>OXO Bargehouse from the 25th to the 27th of June 2021.</b> This website is a document of the show, and the participating graduates, please feel free to contact us!</p>

            </div>
        </div>
    </Layout>
)

export default AboutPage

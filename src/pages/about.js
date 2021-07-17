import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import '../pages/about.css'
import video from "../images/film.mp4"

const AboutPage = () => (
    <Layout>
        <div className="flex">
            <header className="header headerDesktop">
                <Link to="/" className="logoImage">
                    <StaticImage src="../images/logoTwo.png"
                    alt="Logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={160}
                    height={160}
                    className="logoImage"
                    />
                </Link>
                <div className="navLinkSection">
                    <ul>
                        <li className="mainNav"><Link to="#" className="menuLink active">about</Link></li>
                        <li className="mainNav"><Link to="/graduates" className="menuLink">graduates</Link></li>
                        <li className="TopNav mainNav"><Link to="/gallery" className="menuLink">catalogue</Link></li>
                    </ul>
                </div>
            </header>
            <header className="headerMobile">
                <Link to="/" className="logoImageMobile flexCenter">
                        <StaticImage src="../images/logoTwo.png"
                        alt="Logo"
                        placeholder="blurred"
                        layout="fixed"
                        width={120}
                        height={120}
                        />
                </Link>
                <div className="flexCenter paddingTop">
                    <Link to="#" className="menuLink active">about</Link>
                    <Link to="/graduates" className="menuLink">graduates</Link>
                    <Link to="/gallery" className="menuLink">catalogue</Link>
                </div>
            </header>
            <div className="aboutOuterDiv">
                <h1 className="title">We are Reconnecting.</h1>
                <div className="flex topPad">
                    <div className="imageContainer">
                        <StaticImage src="../images/logoAbout.png"
                                alt="Logo"
                                placeholder="blurred"
                                layout="fixed"
                                // width={150}
                                height={250}
                                className="aboutImage"
                                />
                    </div>
                    <div>
                        <p className="aboutBody">With the Covid switch to more digital learning, we have been dealing with dodgy internet and broken connections; we have been communicating with each other in virtual rooms and corridors. While we have been engaged with the digital, we have also been reconnecting to other things: nature, ourselves, our cultures and the rest of the world.</p>
                        <p className="aboutBody">Two graduate years - graduates of 2020 and 2021 - came together and held a show. This was in the OXO Bargehouse from the 25th to the 27th of June 2021. This website is a document of the show, and the participating graduates. Below you can see a film of the show and a digitalised version of our publication. Please feel free to contact us!</p>
                    </div>
                </div>
                <div className="iframeContainer">
                    <iframe sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox"
                    allowfullscreen="true"
                    className="iframeInner"
                    src="https://e.issuu.com/embed.html?d=reconnecting_flipsnack&u=lucyllorente"> 
                    </iframe>
                </div>
                <div className="videoOuterDiv">
                    <iframe src="https://player.vimeo.com/video/575424396?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen className="vid" title="Reconnecting Illustration Animation Show Film">
                    </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>


            </div>
        </div>
    </Layout>
)

export default AboutPage


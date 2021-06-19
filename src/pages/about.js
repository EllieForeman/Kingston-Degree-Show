import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

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
            <div className="outerDiv">
                <h1>About</h1>
            </div>
        </div>
    </Layout>
)

export default AboutPage

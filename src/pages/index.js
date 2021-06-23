import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import splashGif from '../images/logo.png'
import '../pages/index.css'


const IndexPage = () => (
    <section className="splashLayout">
        <Seo title="Home" />
        <img className="splashGif" src={splashGif} alt="Otter dancing with a fish" />
        <Link className="enterButton" to="/gallery/">enter</Link> <br />
    </section>
)

export default IndexPage

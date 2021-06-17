import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "./header.css"



class Header extends React.Component {
    
    render() {
        function isActive( {isCurrent} ) {
            console.log('isCurrent', isCurrent)
            return isCurrent ? {className: "active"} : null
        }

        return (
            <header className="header">
            <div>
            <Link to="/" className="logoImage">
                <StaticImage src="../images/logo-with-text.png"
                alt="Logo"
                placeholder="blurred"
                layout="fixed"
                width={200}
                height={200}
                />
            </Link>
            </div>
            <div class="line"></div>
            <div class="navLinkSection">
                <ul>
                    {/* <Link activeClassName={navStyles.active} to="/contact"> */}
                    <li>
                        <Link getProps={isActive} to="/gallery" className="menuLink">catalogue</Link>
                    </li>
                    <li>
                        <Link getProps={isActive} to="/about" className="menuLink">about</Link>
                    </li>
                </ul>
            </div>
        </header>
        )
    }
}

export default Header



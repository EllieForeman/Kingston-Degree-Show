import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
    <header
        style={{
        marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
            margin: `0 auto`,
            maxWidth: 1200,
            padding: `1.45rem 1.0875rem`,
            }}
        >
            <Link to="/">
                <StaticImage src="../images/logo.png"
                alt="A dinosaur"
                placeholder="blurred"
                layout="fixed"
                width={200}
                height={200}
                />
            </Link>
        </div>
    </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header

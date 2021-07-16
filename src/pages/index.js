import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link } from "gatsby"
import '../pages/index.css'
import shapes from '../images/shapes/riso-bouncing-shapes-ani-white-wide-eira.gif'

class IndexPage extends React.Component {

    constructor() {
        super();
        this.state = {
            showButton: false,
        };
    }
    
    showButton() {
        if (this.state.showButton === false) {
            setTimeout(() => {
                this.setState({ showButton: true });
            }, 1700);
        }
    }

    
    render() {
        console.log('showing', this.state.showButton)
        this.showButton()
        console.log('showing', this.state.showButton)
        return (
            <div className="indexContainer">
                <Link className={this.state.showButton ? "enterButton show" : "enterButton"} to="/gallery/">enter</Link> <br />
                <img src={shapes} alt="shapes falling" className="gif" />
            </div>
        )
    }
}


export default IndexPage
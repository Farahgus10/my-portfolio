import React from "react";
import { Link } from 'react-scroll'
import './navComponent.css'


export default class NavComponent extends React.Component {
    render() {
        return(
            <div className="nav">
                <div className="nav_elements">
                    <Link to="projects" spy={true} smooth={true}>Projects</Link>
                    <Link to="about" spy={true} smooth={true}>About</Link>
                    <Link to="header" spy={true} smooth={true}>Contact</Link>
                </div>
            </div>
        )
    }
}
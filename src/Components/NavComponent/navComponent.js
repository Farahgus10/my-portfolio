import React from "react";
import './navComponent.css'


export default class NavComponent extends React.Component {
    render() {
        return(
            <div className="nav">
                <div className="nav_elements">
                    <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
            </div>
        )
    }
}
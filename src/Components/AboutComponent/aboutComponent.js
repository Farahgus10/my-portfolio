import React from "react";
import './aboutComponent.css'

export default class AboutComponent extends React.Component {
    render() {
        return (
            <div className="about" id="contact">
                <div className="about_box_1">
                    <div className="about_header">
                        <h1>About</h1>
                    </div>
                    
                    <div className="about_description">
                        <p className="bio">Bio</p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                </div>

                <div className="skills">
                    <h3>Skills</h3>
                    <p>Javascript, HTML5, CSS3</p>
                    <p>React, jQuery</p>
                    <p>Node, Express, PostgreSQL</p>
                </div>
            </div>
        )
    }
}
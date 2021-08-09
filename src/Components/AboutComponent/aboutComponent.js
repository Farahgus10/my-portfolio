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
                        <p>I'm a full-stack developer who values collaborative work, open minds, and a desire to keep learning above all else.</p>
                        <p>Besides coding, a typical week consists of exploring the great outdoors with my dog, learning new cooking skills, or curled up with a good book.</p>
                        <p>If you're interested in working with me, or just want to say hello, feel free to contact me through phone, email, or Linkedin.</p>
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
import React from "react"
import './headerComponent.css'

export default class HeaderComponent extends React.Component {
    render() {
        return(
            <div className="header" id="header">
                <div className="name">
                    <h1>Farah Gustafson</h1>
                </div>
                
                <h2>Full Stack Developer</h2>
            </div>
        )
    }
}
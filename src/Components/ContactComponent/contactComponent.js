import React from "react";
import './contactComponent.css'


export default class ContactComponent extends React.Component {
    render() {
        return(
            <div className="contact-component" id="contact">
                <div className="col contact_phone">
                    <p className="title">phone</p>
                    <p>(301) 542-4486</p>
                </div>
                <div className="col contact_email">
                    <p className="title">email</p>
                    {/* <a href="mailto: farah.gustafson@gmail.com">farah.gustafson@gmail.com</a> */}
                    <p>farah.gustafson@gmail.com</p>
                </div>
                <div className="col contact_location">
                    <p className="title">location</p>
                    <p>Washintong, D.C.</p>
                </div>
                <div className="col contact_find_me">
                    <p className="title">find me</p>
                    {/* <p>GitHub LinkedIn</p> */}
                    <a href="https://github.com/Farahgus10">Github</a>{' '}<a href="https://www.linkedin.com/in/farah-gustafson/">LinkedIn</a>
                </div>
            </div>
        )
    }
}
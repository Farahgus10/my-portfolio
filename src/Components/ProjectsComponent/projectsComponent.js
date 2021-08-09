import React from "react";
import './projectsComponent.css'
import sustainachoiceImage from '../../Images/sustainachoice.PNG'
import movieRouletteImage from '../../Images/movieroulette.PNG'

export default class ProjectsComponent extends React.Component {
    render() {
        return( 
            <div className="projects">
                <div className="projects_header">
                    <h1>Projects</h1>
                </div>

                <div className="project project_1">
                    <div className="project-description">
                        <h2>SustainAChoice</h2>
                        <p>An app for eco-minded individuals in the Washington, D.C. area to find sustainably-sourced food in their area.</p>
                        <p className="tech-stack">Technical stack: React, Node, PostgreSQL, Express, HTML, CSS</p>
                        <a href="https://github.com/Farahgus10/Sustainachoice-client"><p>Client-side repo</p></a>
                        <a href="https://github.com/Farahgus10/Sustainachoice-server"><p>Server-side repo</p></a>
                    </div>
                    <div className="project-picture"> 
                        <a href="https://farah-sustainachoice-app.vercel.app/"><img src={sustainachoiceImage}/></a>
                    </div>
                </div>

                <div className="project project_2">
                    <div className="project-picture"> 
                        <a href="https://movie-roulette-app-6itlzl39z-farahgus.vercel.app/"><img src={movieRouletteImage}/></a>
                    </div>
                    <div className="project-description">
                        <h2>Movie Roulette</h2>
                        <p>Movie Roulette is the perfect app for users who just can't figure out what to watch.</p>
                        <p className="tech-stack">Technical stack: React, Node, PostgreSQL, Express, HTML, CSS</p>
                        <a href="https://github.com/Farahgus10/Movie-Roulette-client"><p>Client-side repo</p></a>
                        <a href="https://github.com/Farahgus10/Movie-Roulette-Server"><p>Server-side repo</p></a>
                    </div>
                </div>

            </div>
        )
    }
}
import React, { Component } from 'react';
class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <div class="projects-wrapper">
                    <div class="project-card">
                        <div class="project-preview">
                            <div class="project-description">

                                <h1>Vue Todo</h1>
                                <div class="separator"></div>
                                <h3 class="h3-space">Technologies used:</h3>
                                <div class="technologies">
                                    <p>VueJS</p>
                                    <p>ExpressJS</p>
                                    <p>MongoDB</p>
                                </div>
                                <div class="separator"></div>
                                <h3 class="h3-space">Goal of the project:</h3>
                                <div class="project-goal">
                                    <p>
                                        The goal of this project was to get a better understanding of how the back-end and the
                            front-end are connected and work together. <br></br> I built a basic To-Do app by using MongoDB
                                        as the
                                        database,
                            ExpressJS as the server, and VueJS as the front-end framework. <br></br>
                                                I implemented basic CRUD functionality.
                        </p>
                                </div>
                                <div class="separator"></div>
                                <h3 class="h3-space">Check it out:</h3>
                                <a href="https://todo-vue-mf.herokuapp.com/" target="_blank"><button class="project-button">Click
                            Here</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ color: 'red' }}>| More projects to come... |</p>
            </div>)
    }
}
export default Projects
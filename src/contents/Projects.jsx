import React, { Component } from 'react';
class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Projects</h1>
                <div class="projects-wrapper">
                    {/* PROJECT 1 */}
                    <div class="project-card pc1">
                        <div class="project-preview pp1">
                            <div class="project-description pd1">
                                <h1>Vue Todo</h1>
                                <div class="separator s1"></div>
                                <h3 class="h3-space">Technologies used:</h3>
                                <div class="technologies">
                                    <p>VueJS</p>
                                    <p>ExpressJS</p>
                                    <p>MongoDB</p>
                                </div>
                                <div class="separator s1"></div>
                                <h3 class="h3-space">Goal of the project:</h3>
                                <div class="project-goal">
                                    <p>
                                        The goal of this project is to get a better understanding of how the back-end and the
                            front-end are connected and work together. <br></br> I built a basic To-Do app by using MongoDB
                                        as the
                                        database,
                            ExpressJS as the server, and VueJS as the front-end framework. <br></br>
                                                I implemented basic CRUD functionality.
                        </p>
                                </div>
                                <div class="separator"></div>
                                <h3 class="h3-space">Check it out:</h3>
                                <a href="https://todo-vue-mf.herokuapp.com/" target="_blank"><button class="project-button pb1">Click
                            Here</button></a>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div class="project-card pc2">
                        <div class="project-preview pp2">
                            <div class="project-description pd2">
                                <h1>React Expense Tracker</h1>
                                <div class="separator s2"></div>
                                <h3 class="h3-space">Technologies used:</h3>
                                <div class="technologies">
                                    <p>ReactJS</p>
                                    <p>ExpressJS</p>
                                    <p>MongoDB</p>
                                </div>
                                <div class="separator s2"></div>
                                <h3 class="h3-space">Goal of the project:</h3>
                                <div class="project-goal">
                                    <p>
                                        The main goal of this project is to familiarize with React's workflow leveraging useState, useReducer and useContext hooks. <br></br> I built a basic expense tracker app by using MongoDB
                                        as the
                                        database,
                            ExpressJS as the server, and ReactJS as the front-end framework.
                        </p>
                                </div>
                                <div class="separator"></div>
                                <h3 class="h3-space">Check it out:</h3>
                                <a href="https://react-expense-mf.netlify.app/" target="_blank"><button class="project-button pb2">Click
                            Here</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 style={{ color: 'red' }}>🛈 More projects coming soon... 🛈</h5>
            </div>)
    }
}
export default Projects
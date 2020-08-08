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
                                <h2>Vue Todo</h2>
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
                                <h4 class="h3-space">Check it out:</h4>
                                <a href="https://todo-vue-mf.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button class="project-button pb1">Click
                            Here</button></a>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div class="project-card pc2">
                        <div class="project-preview pp2">
                            <div class="project-description pd2">
                                <h2>React Expense Tracker</h2>
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
                                <h4 class="h3-space">Check it out: </h4>
                                <a href="https://expense-tracker-mf.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button class="project-button pb2">Click
                            Here</button></a>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 3 */}
                    <div class="project-card pc3">
                        <div class="project-preview pp3">
                            <div class="project-description pd3">
                                <h2>Memo Map</h2>
                                <div class="separator s3"></div>
                                <h3 class="h3-space">Technologies used:</h3>
                                <div class="technologies">
                                    <p>ReactJS</p>
                                    <p>ExpressJS</p>
                                    <p>MongoDB</p>
                                </div>
                                <div class="separator s3"></div>
                                <h3 class="h3-space">Goal of the project:</h3>
                                <div class="project-goal">
                                    <small>(  ⚠The mobile version is still under construction⚠  )</small>
                                    <p>
                                        The goal of this project is to familiarize with the MERN stack. <br></br>
                                        I first created a schema by leveraging Mongoose with all the information about the data each pin(📍) would contain.<br></br>
                                        I then created an API which satisfied the fetching, creation and deletion of pins <br></br>
                                        And to finish, I embedded a Mapbox GL compononent where the pins stored inside of MongoDB Atlas would appear.
                                        <br></br>
                                        <br></br>
                                        In order to add a new pin, a key to access the API must be added inside of the request form.<br></br>
                                        <u>Remember this easy API KEY before checking out the app.</u>
                                        <br></br>
                                        <br></br>
                                        <b>API KEY:</b><br></br>
                                        <b>memomap</b>
                                    </p>
                                </div>
                                <div class="separator"></div>
                                <h4 class="h3-space">Check it out: </h4>
                                <a href="https://memo-map-mf.herokuapp.com/" rel="noopener noreferrer" target="_blank"><button class="project-button pb3">Click
                            Here</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
    }
}
export default Projects
import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import TeamContainer from "./components/team/TeamContainer";
import ProjectContainer from "./components/project/ProjectContainer";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

const App = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col sm={1}><Navbar/></Col>
                    <Col sm={11}>
                        <Route render={() => <Home/>} exact path="/"/>
                        <Route render={() => <TeamContainer/>} path="/team"/>
                        <Route render={() => <Contact/>} path="/contact"/>
                        <Route render={() => <ProjectContainer/>} path="/project"/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default App;

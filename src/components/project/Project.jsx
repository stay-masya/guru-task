import React from 'react';
import {Card} from "react-bootstrap";
import s from './Project.module.css'

const Project = (props) => {
    return (<>
            <div className={`shadow ${s.cardContainer}`}>
                <Card className="bg-dark text-white" style={{width: '24rem'}}>
                    <Card.Img src={props.avatar} alt="Card image"/>
                </Card>
                <Card style={{width: '18rem'}}>
                    <Card.Body>
                        <Card.Title>{props.projectName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{props.commitCounter} commit</Card.Subtitle>
                        <Card.Text>
                            {props.description}
                        </Card.Text>

                        <Card.Text>
                            <b>Date of last changes</b> : <br/> {props.lastChangeDate}
                        </Card.Text>
                        <Card.Text>
                            <b>Signed up for vuejs/vue</b> : <br/> {props.subCounter} persons
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};
export default Project;

import React from 'react';
<<<<<<< HEAD
import {Button, Card} from "react-bootstrap";
=======
import {Card} from "react-bootstrap";
>>>>>>> parent of 8fe1235... Connected the carousel, but it is not spinning yet :)
import s from './Project.module.css'


const Project = (props) => {
<<<<<<< HEAD
    return (
        <div className={`shadow ${s.canvas}`}>
            <div className={`${s.cardContainer}`}>
=======
    return (<>
            <div className={`shadow ${s.cardContainer}`}>
>>>>>>> parent of 8fe1235... Connected the carousel, but it is not spinning yet :)
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
<<<<<<< HEAD
            <OwlCarousel
                items="3"
                className="owl-theme"
                autoplay
                margin={10}
                loop
            >
                {props.team.length > 0
                    ? props.team.map(t =>
                        <div key={t.id} className="item">
                            <Card className={s.card}>
                                <a href="/project"><Card.Img variant="top" src={t.avatar_url}/></a>
                                <Card.Body>
                                    <Card.Title>{t.login}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button href={t.html_url} variant="primary">Рersonal page</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ) : props.getUsers(1)
                }
            </OwlCarousel>
        </div>
=======
        </>
>>>>>>> parent of 8fe1235... Connected the carousel, but it is not spinning yet :)
    )
};

export default Project;

import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import s from './Project.module.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Project = (props) => {
    return (<div className='shadow'>
            <div className={`${s.cardContainer}`}>
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
            <OwlCarousel
                items="5"
                className="owl-theme"
                autoplay
                margin={10}
                nav
                loop
            >

                {props.team.map(t =>
                    <Row class="item">
                            <Col key={t.id}>
                                <Card className={s.card} style={{width: '18rem'}}>
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
                            </Col>
                    </Row>
                    )}
                    
            </OwlCarousel>
        </div>
    )
};
export default Project;

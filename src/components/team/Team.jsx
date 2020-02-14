import React from 'react';
import s from './Team.module.css'
import InfiniteScroll from "react-infinite-scroll-component";
import {Button, Card, Col, Row} from "react-bootstrap";



const Team = (props) => {
    return (
        <div>
            <InfiniteScroll
                dataLength={props.team.length}
                next={props.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <h2>Team</h2>
                <Row>
                    {props.team.map(t =>
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
                    )}
                </Row>
            </InfiniteScroll>
        </div>
    )
};
export default Team;

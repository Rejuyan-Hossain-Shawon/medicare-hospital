import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import g1 from "../../images/g-1.jpg";
import g2 from "../../images/g-2.jpg";
import g3 from "../../images/g-3.jpg";
import g4 from "../../images/g-4.jpg";
import g5 from "../../images/g-5.jpg";
import g6 from "../../images/g-6.jpg";
import g7 from "../../images/g-7.jpg";
import g8 from "../../images/g-8.jpg";

const Gallery = () => {
    return (
        <div>

            <h3 className="text-info text-start  ">The relationship we have with you is special</h3><br />
            <h1 className="fw-bold  ">OUR PATIENTS WITH DOCTORS</h1>
            <Row xs={1} sm={1} md={2} className="g-4">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={g1} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g2} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g3} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g4} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g5} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g6} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g7} />

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={g8} />

                    </Card>
                </Col>

            </Row>


        </div>
    );
};

export default Gallery;
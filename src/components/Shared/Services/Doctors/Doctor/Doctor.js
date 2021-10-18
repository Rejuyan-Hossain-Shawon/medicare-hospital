import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    console.log(props.doctor);
    const { name, designation, picture, position } = props.doctor;
    console.log(designation);
    return (
        <Col>
            <Card>
                <Card.Img style={{ height: "550px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {designation}
                    </Card.Text>
                    <Card.Text>
                        {position}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;
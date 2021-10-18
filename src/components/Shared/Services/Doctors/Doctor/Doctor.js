import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {

    const { _id, name, designation, picture, position } = props.doctor;

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
                    <Link to={`/doctors/${_id}`}><Button>Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Doctor;
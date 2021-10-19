import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const DiagnosticDisplay = (props) => {
    const handleApplyBtn = () => {
        alert(`You Have to pay ${price}`);

    }

    const { duration, instructor, picture, price, testName } = props.element;
    return (
        <Col>
            <Card>
                <Card.Img style={{ width: "100%", height: "400px" }} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title as={"h3"} className="fw-bold">{testName}</Card.Title>
                    <Card.Text>
                        Instructor Name:{instructor}
                    </Card.Text>
                    <Card.Text>
                        Time Duration:{duration} /hours
                    </Card.Text>
                    <Card.Text>
                        Price:{price}
                    </Card.Text>
                    <Button onClick={handleApplyBtn}>Apply</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default DiagnosticDisplay;
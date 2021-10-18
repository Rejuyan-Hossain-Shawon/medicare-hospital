import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ambulance from "../../../../images/ambulance.jpg"

const Ambulance = () => {
    return (
        <Row >
            <Col md={8}>
                <img style={{ width: "100%" }} src={ambulance} alt="" />
            </Col>
            <Col style={{ height: "100%" }} className="bg-light text-danger fw-bold" md={4}>

                <h1> <FontAwesomeIcon icon={faAmbulance} />Emergency Call<FontAwesomeIcon icon={faPhone} /> 111</h1>
                <p>We will be there for you to pick up</p>
                <p>Dont hesitate For money</p>
                <h1>This service is free for Poor People </h1>


            </Col>
        </Row>
    );
};

export default Ambulance;
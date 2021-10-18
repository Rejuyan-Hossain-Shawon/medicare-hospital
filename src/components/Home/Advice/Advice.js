import React from 'react';
import { Col, Row } from 'react-bootstrap';
import doctor from "../../../images/headDoctor.png"
import sign from "../../../images/signature.png"

const Advice = () => {
    return (
        <>
            <h1 className="text-warning">Head of Medicare</h1>
            <Row className="d-flex justify-content-center align-items-center bg-light mx-2">
                <Col sm={8}>
                    <h4>Dr. Stephanie Wosniack</h4>
                    <h1>OUR TEAM</h1>
                    <p>Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years, Dr. Woshiack found her calling to help others get well</p>
                    <img src={sign} alt="" />
                </Col>
                <Col>
                    <img src={doctor} alt="" />
                </Col>
            </Row>
        </>
    );
};

export default Advice;
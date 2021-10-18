import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { id } = useParams();


    // data loadig from loacl data base and finding the needed data and set it to state
    const [doctor, setDoctor] = useState({})
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setDoctor(data.find(doctor => doctor._id === id)))
    }, [id])
    // single doctor data destructuring
    const { name, position, picture, designation, age, address, email, phone } = doctor;
    return (
        <Row>
            <Col md={5}>
                <img src={picture} alt="" />
            </Col>
            <Col md={5}>
                <h1>{name}</h1>
                <h3>Position:{position}</h3>
                <h4>Designation:{designation}</h4>
                <p>Age:{age}</p>
                <p>Phone:{phone}, Email:{email}</p>
                <address>{address}</address>
            </Col>
        </Row>
    );
};

export default DoctorDetails;
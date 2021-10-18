import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import dentist from "../../../images/white-teeth.jpg"
import cardiologist from "../../../images/cardiologist.jpg"
import eyeSpecialist from "../../../images/eye specialist.jpg"
import pediatrician from "../../../images/pediatrician.jpg"
import lab from "../../../images/lab.jpg"
import ambulance from "../../../images/ambulance.jpg"
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="mt-5 pt-5 p-5">
            <h1 className="text-primary">Services</h1>
            <Row xs={1} md={3} className="g-3">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={dentist} />
                        <Card.Body>
                            <Card.Title className="fw-bold">Dentist</Card.Title>
                            <Card.Text>
                                Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases.All practicing general dentists have earned either a DDS or DMD degree (doctor of dental surgery or doctor of dental medicine, respectively).
                            </Card.Text>
                            <Link to="/services/doctors"><Button variant="primary">See More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={cardiologist} />
                        <Card.Body>
                            <Card.Title className="fw-bold">Cardiologist</Card.Title>
                            <Card.Text>
                                A cardiologist is a doctor who specializes in treating diseases of the cardiovascular system — mainly the heart and blood vessels.A cardiologist is a medical specialist who can diagnose and treat diseases.A cardiologist is a medical specialist who can diagnose and treat diseases.A cardiologist is a medical specialist.
                            </Card.Text>
                            <Link to="/services/doctors"><Button variant="primary">See More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={eyeSpecialist} />
                        <Card.Body>
                            <Card.Title className="fw-bold">Eye Specialist</Card.Title>
                            <Card.Text>
                                An ophthalmologist — Eye M.D. — is a medical or osteopathic doctor who specializes in eye and vision care. Ophthalmologists differ from optometrists and opticians in their levels of training and in what they can diagnose and treat.
                            </Card.Text>
                            <Link to="/services/doctors"><Button variant="primary">See More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={pediatrician} />
                        <Card.Body>
                            <Card.Title className="fw-bold">Pediatrician</Card.Title>
                            <Card.Text>
                                A pediatrician is a medical doctor who manages the physical, behavioral, and mental care for children from birth until age 18. A pediatrician is trained to diagnose and treat a broad range of childhood illnesses, from minor health problems to serious diseases.
                            </Card.Text>
                            <Link to="/services/doctors"><Button variant="primary">See More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={lab} />
                        <Card.Body>
                            <Card.Title className="fw-bold">Diagnostic Lab</Card.Title>
                            <Card.Text>
                                What Does Diagnostic Test Mean? A diagnostic test is a test used to identify a condition or its cause. It is used to diagnose. A diagnostic test performed as a part of a medical exam may be used to identify the cause of symptoms or identify a disease.
                            </Card.Text>
                            <Link to="/diagnostics"><Button variant="primary">See More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={ambulance} />
                        <Card.Body>
                            <Card.Title className="fw-bold">Ambulance Services</Card.Title>
                            <Card.Text>
                                The Bangladesh government has officially launched the 999 emergency helpline. Police, fire service and ambulance services will be available from any phone (mobile or fixed line) dialing the number.
                                You can call 111 number to Call Ambulance From Our Clinic
                            </Card.Text>
                            <Link to="/ambulance"><Button variant="primary">See More</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default Services;
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import founder from "../../images/profile.png"
import doctor from "../../images/headDoctor.png"


const About = () => {
    return (
        <div className="my-5 ">
            <Row className="d-flex-lg justify-content-center align-items-center" >
                <Col sm={12} md={4}>
                    <img style={{ height: "250px" }} src={founder} alt="" />
                </Col>

                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header className="text-info" as="h1">Founder Chairman</Card.Header>
                        <Card.Header as="h6">Medicare Clinic</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-primary">Rejuyan Hossain Shawon</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ratione quasi. Perspiciatis fugiat dolorem ipsum quisquam ullam labore magnam dolor cupiditate! Vel, sapiente ducimus? Beatae eligendi suscipit ratione perferendis. Perferendis.
                            </Card.Text>
                            <Button variant="primary"><a className="text-white" href="https://www.linkedin.com/in/rejuyan-hossain-shawon-41a60514b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Boh3SH%2FJ4TlCudsk3Q%2F8erA%3D%3D">Linkedin Profile</a></Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>




            <Row className="d-flex-lg justify-content-center align-items-center" >
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header className="text-info" as="h3">Co Chairman</Card.Header>
                        <Card.Header as="h6">Medicare Clinic</Card.Header>
                        <Card.Body>
                            <Card.Title className="text-primary">Dr. Stephanie Wosniack</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ratione quasi. Perspiciatis fugiat dolorem ipsum quisquam ullam labore magnam dolor cupiditate! Vel, sapiente ducimus? Beatae eligendi suscipit ratione perferendis. Perferendis.
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </Col>


                <Col sm={12} md={4}>
                    <img style={{ height: "250px" }} src={doctor} alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default About; <h1>this is about</h1>
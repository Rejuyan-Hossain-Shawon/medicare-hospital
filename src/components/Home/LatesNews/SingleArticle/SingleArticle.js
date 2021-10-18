import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const SingleArticle = (props) => {

    const { title, description, urlToImage, url } = props.article;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" style={{ height: "300px" }} src={urlToImage} />
                <Card.Body style={{ height: "300px" }}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button><a href={url} className="text-white" title="you will directed to New Website">Details</a></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleArticle;
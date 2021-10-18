import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner-1.jpg"
import banner2 from "../../../images/banner-2.jpg"
import banner3 from "../../../images/banner-3.png"

const Banner = () => {

    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />

                <Carousel.Caption className="text-success fw-bolder">
                    <h3>THE RIGHT PEDIATRICIAN</h3>
                    <p>We at MediCare are always fully focused on helping your child and you to overcame any hurdle, whether it’s chicken pox or just a seasonal flue.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="text-success fw-bolder">
                    <h3>YOU AND YOUR DOCTOR</h3>
                    <p>Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet. Morbi pharetra velit ut varius semper. Donec accumsan et lacus at posuere.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                />


            </Carousel.Item>

        </Carousel>



    );
};

export default Banner;
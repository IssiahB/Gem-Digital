import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import "./styles/Services.style.css";
import consultImg from "../../assets/images/consulting.jpg";
import customImg from "../../assets/images/custom-software.jpg";
import testingImg from "../../assets/images/software-testing.jpg";

const serviceList = [
    {
        id: 1,
        title: "Consulting Service",
        description:
            "Give a detailed description of the service being provided here.",
        image: consultImg, // Replace with the actual path
    },
    {
        id: 2,
        title: "Custom App Development",
        description:
            "Give a detailed description of the service being provided here.",
        image: customImg, // Replace with the actual path
    },
    {
        id: 3,
        title: "Quality Assurance and Testing",
        description:
            "Give a detailed description of the service being provided here.",
        image: testingImg, // Replace with the actual path
    },
];

const Services = () => {
    return (
        <section className="services-section">
            <Container>
                <h1 className="services-title">Our Services</h1>
                <Row
                    className="justify-content-center"
                    data-aos="slide-up"
                    data-aos-offset={400}
                >
                    {serviceList.map((service) => (
                        <Col
                            key={service.id}
                            xs={12}
                            md={6}
                            lg={4}
                            className="service-item"
                        >
                            <Image
                                src={service.image}
                                roundedCircle
                                className="service-image"
                            />
                            <div className="service-divider"></div>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;

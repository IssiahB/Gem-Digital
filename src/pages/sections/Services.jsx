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
            "We offer expert advice and strategic solutions tailored to your business needs." +
            "Whether you're looking to optimize existing systems, adopt new technologies, or" +
            "improve operational efficiency, our team of experienced consultants will guide you" +
            "every step of the way to ensure long-term success.",
        image: consultImg, // Replace with the actual path
    },
    {
        id: 2,
        title: "Custom App Development",
        description:
            "From concept to completion, we build bespoke software applications designed to solve" +
            "real-world problems for your business. Our development team specializes in scalable," +
            "high-performance solutions that integrate seamlessly with your current operations," +
            "empowering you to stay ahead of the competition.",
        image: customImg, // Replace with the actual path
    },
    {
        id: 3,
        title: "Quality Assurance and Testing",
        description:
            "Ensure your software performs at its best with our comprehensive quality assurance and" +
            "testing services. We rigorously test your applications for functionality, performance, and" +
            "security, identifying potential issues before they impact your users, so you can launch with" +
            "confidence.",
        image: testingImg, // Replace with the actual path
    },
];

const Services = () => {
    return (
        <section className="services-section">
            <Container>
                <h1 className="text-center mb-4 services-title">
                    Our Services
                </h1>
                <div className="divider mb-5"></div>
                <Row
                    className="g-4 justify-content-around"
                    data-aos="slide-up"
                    data-aos-offset="100"
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

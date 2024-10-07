import React, { useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import customSoftwareImage from "../assets/images/code.jpg";
import itServicesImage from "../assets/images/it-services.jpg";
import deviceRepairsImage from "../assets/images/device-repairs.jpg";
import idahoImage from "../assets/images/idaho-capital.jpg";

import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";

import "./styles/ProductsPage.style.css";

function ProductsPage() {
    useEffect(() => {
        AOS.refresh(); // Refresh AOS animations when the component is mounted
    }, []);

    return (
        <>
            <NavBar />
            <div className="products-page">
                {/* Hero Section */}
                <section class="service-hero-section">
                    <div class="service-hero-text" data-aos="fade-right">
                        <h1>Providing Tailored Tech Services for Idahoians</h1>
                        <p>
                            At Gem Digital, we specialize in custom software, IT
                            services, and device repairs tailored specifically
                            for small businesses across Idaho. Let us help your
                            business thrive with top-notch solutions that drive
                            productivity and innovation.
                        </p>
                        <a href="/contact" class="cta-button">
                            Get in Touch
                        </a>
                    </div>
                    <div class="service-hero-image" data-aos="zoom-in">
                        <img src={idahoImage} alt="Proud Idaho" />
                    </div>
                </section>

                {/* Custom Software Development Section */}
                <section className="service-section custom-software-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <Image
                                    src={customSoftwareImage}
                                    className="service-image"
                                    fluid
                                    alt="Custom Software"
                                />
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <h2>Custom Software Development</h2>
                                <p className="service-description">
                                    We build powerful, scalable software
                                    solutions tailored to your business needs.
                                    From startups to enterprises, we create
                                    custom software that helps you innovate,
                                    automate, and grow.
                                </p>
                                <ul className="service-details">
                                    <li>Custom application development</li>
                                    <li>Integration with existing systems</li>
                                    <li>Cloud-based solutions</li>
                                    <li>Support & Maintenance</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/custom-software"
                                >
                                    Learn More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* IT Services Section */}
                <section className="service-section it-services-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <h2>IT Services</h2>
                                <p className="service-description">
                                    Our IT services ensure that your business
                                    runs smoothly and securely. We provide
                                    managed IT solutions that include
                                    cybersecurity, network management, and IT
                                    consulting.
                                </p>
                                <ul className="service-details">
                                    <li>Managed IT services</li>
                                    <li>Network security and optimization</li>
                                    <li>24/7 monitoring & support</li>
                                    <li>Cloud migration & management</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/it-services"
                                >
                                    Learn More
                                </Button>
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <Image
                                    src={itServicesImage}
                                    className="service-image"
                                    fluid
                                    alt="IT Services"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Device Repairs Section */}
                <section className="service-section device-repairs-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <Image
                                    src={deviceRepairsImage}
                                    className="service-image"
                                    fluid
                                    alt="Device Repairs"
                                />
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <h2>Device Repairs</h2>
                                <p className="service-description">
                                    Fast, reliable, and affordable repair
                                    services for all your devices. From laptops
                                    to mobile phones, we provide expert repair
                                    solutions to keep your tech running.
                                </p>
                                <ul className="service-details">
                                    <li>Phone and tablet repairs</li>
                                    <li>PC and laptop diagnostics & repairs</li>
                                    <li>Replacement parts & upgrades</li>
                                    <li>Data recovery</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/device-repairs"
                                >
                                    Learn More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default ProductsPage;

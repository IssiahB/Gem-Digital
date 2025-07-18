import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

import cablingImage from "../assets/images/cabling.jpg";
import itServicesImage from "../assets/images/it-services.jpg";
import networkingImage from "../assets/images/networking.jpg";
import customSoftwareImage from "../assets/images/code.jpg";
import idahoImage from "../assets/images/idaho-capital.jpg";

import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";

import "./styles/ProductsPage.style.css";

// Ensure images have descriptive alt properties to improve SEO

function ProductsPage() {
    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <Helmet>
                <title>Structured Cabling, Networking & IT Services in Idaho | Gem Digital Solutions</title>
                <meta name="description" content="Gem Digital Solutions offers structured cabling, IT consulting, network setup, and software development in Caldwell, Nampa, and surrounding areas." />
                <meta name="keywords" content="Idaho IT services, cabling Caldwell, Nampa network install, structured cabling, IT consultant Idaho, custom software Caldwell" />
            </Helmet>
            <NavBar />
            <div className="products-page">
                {/* Hero Section */}
                <section className="service-hero-section">
                    <div className="service-hero-text" data-aos="fade-right">
                        <h1>Structured Cabling, Networking & IT Solutions in Idaho</h1>
                        <p>
                            Gem Digital proudly supports Idaho’s growing digital
                            needs—from homes to small businesses—with a full
                            range of cabling, IT, networking, and software
                            solutions. We're here to simplify and strengthen
                            your technology foundation.
                        </p>
                        <a href="/contact" className="cta-button">
                            Get in Touch
                        </a>
                    </div>
                    <div className="service-hero-image" data-aos="zoom-in">
                        <img src={idahoImage} alt="Proud Idaho" />
                    </div>
                </section>

                {/* Cabling Solutions */}
                <section className="service-section device-repairs-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <Image
                                    src={cablingImage}
                                    className="service-image"
                                    fluid
                                    alt="Cabling Solutions"
                                />
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <h2>Cabling Solutions</h2>
                                <p className="service-description">
                                    Clean, professional wiring for your home or
                                    office. Our certified cabling experts deliver
                                    structured cabling, P2P setups, and more to
                                    keep your systems running at peak performance.
                                </p>
                                <ul className="service-details">
                                    <li>Structured Cat6/Cat7 installations</li>
                                    <li>Point-to-Point (P2P) solutions</li>
                                    <li>Server rack and panel management</li>
                                    <li>Audio, video, and intercom wiring</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/contact"
                                >
                                    Learn More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* IT Consulting */}
                <section className="service-section it-services-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <h2>IT Consulting</h2>
                                <p className="service-description">
                                    We provide hands-on, actionable consulting for
                                    individuals and businesses looking to build,
                                    improve, or secure their technology stack.
                                </p>
                                <ul className="service-details">
                                    <li>Small office/home office setups</li>
                                    <li>Hardware & software evaluations</li>
                                    <li>Security and compliance advice</li>
                                    <li>Cloud transition and strategy</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/contact"
                                >
                                    Learn More
                                </Button>
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <Image
                                    src={itServicesImage}
                                    className="service-image"
                                    fluid
                                    alt="IT Consulting"
                                />
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Networking Services */}
                <section className="service-section custom-software-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <Image
                                    src={networkingImage}
                                    className="service-image"
                                    fluid
                                    alt="Networking Services"
                                />
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <h2>Networking Services</h2>
                                <p className="service-description">
                                    Build a network you can rely on. We handle
                                    installations, troubleshooting, upgrades, and
                                    light AV/security integration for both home
                                    and small business networks.
                                </p>
                                <ul className="service-details">
                                    <li>Router, switch, and access point installs</li>
                                    <li>Performance optimization & diagnostics</li>
                                    <li>Peer-to-peer and mesh networks</li>
                                    <li>Entry-level AV/security solutions</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/contact"
                                >
                                    Learn More
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Custom Software Development */}
                <section className="service-section it-services-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col md={6} data-aos="fade-right">
                                <h2>Custom Software Development</h2>
                                <p className="service-description">
                                    Need automation or integration? We offer
                                    lightweight software development solutions for
                                    local businesses and individuals who want to
                                    improve efficiency or launch new tools.
                                </p>
                                <ul className="service-details">
                                    <li>Scripts, apps, and tool development</li>
                                    <li>Backend integrations with APIs</li>
                                    <li>Database and dashboard solutions</li>
                                    <li>Affordable & scalable codebase support</li>
                                </ul>
                                <Button
                                    className="product-btn"
                                    variant="outline-light"
                                    href="/contact"
                                >
                                    Learn More
                                </Button>
                            </Col>
                            <Col md={6} data-aos="fade-left">
                                <Image
                                    src={customSoftwareImage}
                                    className="service-image"
                                    fluid
                                    alt="Custom Software"
                                />
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

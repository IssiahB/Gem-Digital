import { Container, Row, Col } from "react-bootstrap";

import SimpleButton from "../../components/SimpleButton";
import "./styles/Footer.style.css";

import logo from "../../assets/logo.svg";

function Footer() {
    return (
        <section className="footer-section py-5 bg-dark text-light">
            <Container>
                <Row className="align-items-center">
                    <Col md={3} className="footer-logo">
                        <img
                            src={logo}
                            alt="Gem Digital Solutions LLC"
                            className="logo-img"
                        />
                    </Col>
                    <Col md={3}>
                        <h4 className="footer-title">Contact Us</h4>
                        <p className="footer-text">
                            <strong>Phone:</strong> (208) 417-3533
                            <br />
                            <strong>Email:</strong>{" "}
                            <a
                                href="mailto:contact@gemdigitalsolutions.org"
                                className="footer-link"
                            >
                                contact@gemdigitalsolutions.org
                            </a>
                        </p>
                    </Col>
                    <Col md={3} className="text-end">
                        <p className="footer-text">
                            Get a Free Quote. Call or send us an email today!
                        </p>
                        <SimpleButton custClass="footer-btn" href="/contact">
                            Free Quote!
                        </SimpleButton>
                    </Col>
                    <Col md={3} className="footer-links text-end">
                        <h4 className="footer-title">Links</h4>
                        <ul className="footer-link-list">
                            <li>
                                <a
                                    href="/privacy-policy"
                                    className="footer-link"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/terms-conditions"
                                    className="footer-link"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="footer-link">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="footer-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="text-center">
                        <p className="footer-copyright">
                            &copy; {new Date().getFullYear()} Gem Digital
                            Solutions LLC. All rights reserved.
                            <br />
                            Located near Boise, Idaho
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;

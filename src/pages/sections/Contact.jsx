import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <section className="contact-section py-5 text-white bg-dark">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>Contact Us</h4>
                        <p>
                            <strong>Phone:</strong> (208) 417-3533
                            <br />
                            <strong>Email:</strong>{" "}
                            contact@gemdigitalsolutions.org
                        </p>
                    </Col>
                    <Col md={6} className="text-end">
                        <p>Get a Free Quote. Call or send us an email today!</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;

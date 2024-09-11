import { Container, Row, Col, Card } from "react-bootstrap";

function Services() {
    return (
        <section className="services-section py-5 bg-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>
                                    Customized to Your Business
                                </Card.Title>
                                <Card.Text>
                                    We offer tailored software solutions to meet
                                    your specific business requirements.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Expert Recommendations</Card.Title>
                                <Card.Text>
                                    Our team provides top-notch advice to ensure
                                    you get the best software solutions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>
                                    Assigned Service Representative
                                </Card.Title>
                                <Card.Text>
                                    You'll have a dedicated service
                                    representative to guide you through every
                                    step of the process.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Services;

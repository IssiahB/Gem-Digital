import { Container, Row, Col, Card } from "react-bootstrap";

function Portfolio() {
    return (
        <section className="portfolio-section py-5">
            <Container>
                <h2 className="text-center mb-4">Our Recent Projects</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/src/assets/project1.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Project Name</Card.Title>
                                <Card.Text>
                                    Description of the project highlighting what
                                    was built, how it solved the client’s
                                    problem, and any unique features.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/src/assets/project2.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Project Name</Card.Title>
                                <Card.Text>
                                    Description of another successful project,
                                    focusing on the impact and value provided to
                                    the client.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/src/assets/project3.jpg"
                            />
                            <Card.Body>
                                <Card.Title>Project Name</Card.Title>
                                <Card.Text>
                                    Highlight a feature-rich solution you
                                    delivered, showing how Gem Digital provides
                                    high-quality service.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;

import { Container, Row, Col, Card } from "react-bootstrap";
import "./styles/Portfolio.style.css";

import tempImg from "../../assets/images/custom-software.jpg";

function Portfolio() {
    return (
        <section className="portfolio-section py-5">
            <Container>
                <h2 className="text-center mb-4 portfolio-title">
                    Our Recent Projects
                </h2>
                <div className="divider mb-5"></div>
                <Row>
                    <Col md={4} className="mb-4">
                        <Card className="portfolio-card">
                            <Card.Img
                                variant="top"
                                src={tempImg}
                                className="portfolio-image"
                            />
                            <Card.Body>
                                <Card.Title className="portfolio-title">
                                    Project Name
                                </Card.Title>
                                <Card.Text className="portfolio-text">
                                    Description of the project highlighting what
                                    was built, how it solved the client’s
                                    problem, and any unique features.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="portfolio-card">
                            <Card.Img
                                variant="top"
                                src={tempImg}
                                className="portfolio-image"
                            />
                            <Card.Body>
                                <Card.Title className="portfolio-title">
                                    Project Name
                                </Card.Title>
                                <Card.Text className="portfolio-text">
                                    Description of another successful project,
                                    focusing on the impact and value provided to
                                    the client.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-4">
                        <Card className="portfolio-card">
                            <Card.Img
                                variant="top"
                                src={tempImg}
                                className="portfolio-image"
                            />
                            <Card.Body>
                                <Card.Title className="portfolio-title">
                                    Project Name
                                </Card.Title>
                                <Card.Text className="portfolio-text">
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

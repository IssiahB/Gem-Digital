import { Container, Row, Col, Card } from "react-bootstrap";

function Blog() {
    return (
        <section className="blog-section py-5">
            <Container>
                <h2 className="text-center mb-4">Latest Insights & Articles</h2>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/src/assets/blog1.jpg"
                            />
                            <Card.Body>
                                <Card.Title>
                                    Understanding Digital Transformation
                                </Card.Title>
                                <Card.Text>
                                    Explore how businesses are leveraging
                                    technology to stay competitive in today’s
                                    market.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/src/assets/blog2.jpg"
                            />
                            <Card.Body>
                                <Card.Title>
                                    Top 5 Trends in Software Development
                                </Card.Title>
                                <Card.Text>
                                    Stay ahead of the curve by understanding the
                                    latest trends that will shape the future of
                                    software.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/src/assets/blog3.jpg"
                            />
                            <Card.Body>
                                <Card.Title>
                                    Case Study: Project X Success
                                </Card.Title>
                                <Card.Text>
                                    Read how our team solved complex challenges
                                    for a major client, driving impactful
                                    business results.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Blog;

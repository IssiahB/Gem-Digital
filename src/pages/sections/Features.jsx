import { Container, Row, Col } from "react-bootstrap";

function Features() {
    return (
        <section className="features-section py-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center">
                        <h2>What Sets Us Apart?</h2>
                        <p className="lead">
                            At Gem Digital Solutions, we focus on crafting
                            unique software solutions tailored to your business
                            needs. Our approach combines cutting-edge
                            technology, personalized service, and unparalleled
                            expertise to bring you the best in software
                            development.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Features;

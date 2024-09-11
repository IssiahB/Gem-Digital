import { Container, Button, Row, Col } from "react-bootstrap";

function Hero() {
    return (
        <section
            className="hero-section text-white py-5"
            style={{
                backgroundImage: "url('/src/assets/hero-bg.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container>
                <Row>
                    <Col md={8}>
                        <h1>Transforming Ideas into Digital Solutions</h1>
                        <p className="lead">
                            At Gem Digital Solutions, we build powerful,
                            scalable software tailored to your business needs.
                            Let’s bring your ideas to life with our expertise.
                        </p>
                        <Button variant="primary" size="lg" href="#contact">
                            Get a Free Quote
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;

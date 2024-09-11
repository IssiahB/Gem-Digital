import { Container, Button, Row, Col } from "react-bootstrap";
import video from "../../assets/videos/moving-background.mp4";
import "./styles/Hero.style.css";

function Hero() {
    return (
        <section className="hero-section text-white">
            <video className="background-video" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag mp4.
            </video>
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

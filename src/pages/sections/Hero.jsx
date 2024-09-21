import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Aos from "aos";

import SimpleButton from "../../components/SimpleButton";

import webmVideo from "../../assets/videos/moving-background.webm";
import mp4Video from "../../assets/videos/moving-background.mp4";
import "./styles/Hero.style.css";

function Hero() {
    return (
        <section className="hero-section text-white">
            <video
                className="background-video"
                preload="auto"
                autoPlay
                loop
                muted
            >
                <source src={webmVideo} type="video/webm" />
                <source src={mp4Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1 data-aos="zoom-in">
                            Transform Ideas into Digital Solutions
                        </h1>
                        <p data-aos="slide-right" className="lead">
                            At Gem Digital Solutions, we build powerful,
                            scalable software tailored to your business needs.
                            Let’s bring your ideas to life with our expertise.
                        </p>
                        <div data-aos="slide-right">
                            <SimpleButton>Get a Free Quote</SimpleButton>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;

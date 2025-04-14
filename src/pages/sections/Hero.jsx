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
                muted
                autoPlay
                loop
                playsInline
            >
                <source src={webmVideo} type="video/webm" />
                <source src={mp4Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Container>
                <Row>
                    <Col md={8}>
                        <h1 data-aos="zoom-in" className="hero-title">
                            Wired Right. Built to Last.
                        </h1>
                        <p data-aos="slide-right" className="lead">
                            Structured cabling solutions for homes, businesses, and builders. 
                            From clean cable runs to fully labeled panels — we do it right the first time.
                        </p>
                        <SimpleButton custClass="hero-btn" href="/contact">
                            Get a Free Quote
                        </SimpleButton>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;

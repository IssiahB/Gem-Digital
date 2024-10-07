import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GoogleMap, LoadScript, Circle } from "@react-google-maps/api";
import { SocialIcon } from "react-social-icons";
import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";
import ContactForm from "../components/ContactForm";
import "./styles/ContactPage.style.css";

// Google Maps API Key
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_MAPS_API_KEY;

const center = {
    lat: 43.615, // Latitude of Boise, Idaho
    lng: -116.2023, // Longitude of Boise, Idaho
};

const mapContainerStyle = {
    width: "100%",
    height: "400px",
    borderRadius: "10px",
};

const radiusOptions = {
    strokeColor: "#ff9d00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#ff9d00",
    fillOpacity: 0.35,
    radius: 80467.2, // 50 miles in meters (1 mile = 1609.34 meters)
};

function ContactPage() {
    return (
        <>
            <NavBar />
            <Container className="contact-page">
                <Row>
                    <Col md={8}>
                        <ContactForm />
                    </Col>
                    <Col
                        md={4}
                        className="d-flex flex-column align-items-start justify-content-start contact-info"
                    >
                        <div className="contact-container">
                            <h4>Contact Info</h4>
                            <p>
                                <strong>Address:</strong> 220 E Omaha St,
                                Caldwell, ID
                            </p>
                            <p>
                                <strong>Phone:</strong> (208) 417-3533
                            </p>
                            <p>
                                <strong>Email:</strong>{" "}
                                contact@gemdigitalsolutions.org
                            </p>
                            <div className="social-icons mt-3">
                                <SocialIcon
                                    url="https://www.facebook.com/people/Gem-Digital-Solutions/61565135964317/"
                                    target="_blank"
                                    className="me-3"
                                />
                                <SocialIcon
                                    url="https://www.linkedin.com/company/gem-digital-solutions/"
                                    target="_blank"
                                />
                            </div>
                        </div>

                        <div className="map-container mt-4">
                            <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                                <GoogleMap
                                    mapContainerStyle={mapContainerStyle}
                                    zoom={13}
                                    center={center}
                                >
                                    <Circle
                                        center={center}
                                        options={radiusOptions}
                                    />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default ContactPage;

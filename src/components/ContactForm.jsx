import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

import SimpleButton from "./SimpleButton";
import webmVideo from "../assets/videos/world-background.webm";
import mp4Video from "../assets/videos/world-background.mp4";

import "./styles/ContactForm.style.css"; // Importing the CSS file

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        serviceType: "",
        comment: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitFade = () => {
        const formContainer = document.querySelector(".form-container");
        formContainer.classList.add("hidden");
        formContainer.classList.remove("visible");

        setTimeout(
            (container) => {
                const messageElement =
                    document.querySelector(".submit-message");
                messageElement.removeAttribute("hidden");
                messageElement.classList.remove("hidden");
                messageElement.classList.add("visible");

                container.setAttribute("hidden", "true");
            },
            2000,
            formContainer
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://gem-digital-backend.onrender.com/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phoneNumber,
                    service: formData.serviceType,
                    message: formData.comment,
                }),
            });

            const data = await res.json();
            if (!res.ok) {
                console.error("Error:", data);
                alert("There was a problem sending your message. Please try again.");
                return;
            }

            console.log("Form submitted:", data);
            submitFade(); // animate success message
        } catch (err) {
            console.error("Fetch error:", err);
            alert("Network error, please try again.");
        }
    };


    return (
        <main className="contact-form">
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
            <div className="submit-message hidden" hidden>
                <h2 className="form-submit-title"> Thank You </h2>
                <p className="form-desc">
                    {" "}
                    Thank You! We will reach out shortly{" "}
                </p>
            </div>
            <div className="form-container visible">
                <h2 className="form-title">Contact Us</h2>

                <Form onSubmit={handleSubmit} className="contact-form" netlify="true">
                    {/* First and Last Name */}
                    <Row>
                        <Col md={6}>
                            <Form.Group
                                className="form-group"
                                controlId="formFirstName"
                            >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    placeholder="Enter your first name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group
                                className="form-group"
                                controlId="formLastName"
                            >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    placeholder="Enter your last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Email */}
                    <Form.Group className="form-group" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Phone Number */}
                    <Form.Group
                        className="form-group"
                        controlId="formPhoneNumber"
                    >
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="tel"
                            name="phoneNumber"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Service Type */}
                    <Form.Group
                        className="form-group"
                        controlId="formServiceType"
                    >
                        <Form.Label>Service Type</Form.Label>
                        <div className="radio-group">
                            <Form.Check
                                type="radio"
                                label="Network Installations"
                                name="serviceType"
                                value="network_install"
                                onChange={handleChange}
                                required
                            />
                            <Form.Check
                                type="radio"
                                label="Home Automation"
                                name="serviceType"
                                value="home_automation"
                                onChange={handleChange}
                                required
                            />
                            <Form.Check
                                type="radio"
                                label="Security Systems"
                                name="serviceType"
                                value="security_system"
                                onChange={handleChange}
                                required
                            />
                            <Form.Check
                                type="radio"
                                label="Other"
                                name="serviceType"
                                value="other"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </Form.Group>

                    {/* Comment Section */}
                    <Form.Group className="form-group" controlId="formComment">
                        <Form.Label>Comments or Questions</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="comment"
                            rows={3}
                            placeholder="Leave a comment or question here"
                            value={formData.comment}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    {/* Submit Button */}
                    <SimpleButton custClass="submit-btn" type="submit">
                        Submit
                    </SimpleButton>
                </Form>
            </div>
        </main>
    );
};

export default ContactForm;

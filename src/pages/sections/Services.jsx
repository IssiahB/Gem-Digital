import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/Services.style.css";
import consultImg from "../../assets/images/consulting.jpg";
import customImg from "../../assets/images/custom-software.jpg";
import testingImg from "../../assets/images/software-testing.jpg";

const Services = () => {
    return (
        <div className="main">
            <h2 className="text-center mb-4 portfolio-title">Services</h2>
            <div className="divider mb-5"></div>
            <ul className="services">
                <li className="service_item">
                    <a className="hero-link" href="/service">
                        <div className="service" tabindex="0">
                            <div className="service_image">
                                <img src={consultImg} alt="Group Consulting" />
                            </div>
                            <div className="service_content">
                                <h2 className="service_title">
                                    Residential Cabling Services &#x2022; $75 hr
                                </h2>
                                <div className="service_text">
                                    <p>
                                        Say goodbye to dead zones and lag! We run high-quality
                                        Cat5e and Cat6 Ethernet cables to any room in your
                                        home—perfect for streaming, working from home, and gaming.
                                        Whether you’re in a new build that needs terminations and
                                        faceplates or an older home that needs upgrades, we’ve got you covered.
                                    </p>
                                    <p>
                                        Services include:{" "}
                                        <strong>
                                            <br />
                                            • Room-to-room cable runs <br />
                                            • Media panel cleanups & cable dressing <br />
                                            • Faceplate hookups & terminations <br />
                                            • Device hardwiring (TVs, consoles, PCs) <br />
                                        </strong>
                                    </p>
                                    <p className="upcharge">
                                        Start strong with a reliable connection in every room.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>

                <li className="service_item">
                    <a className="hero-link" href="/service">
                        <div className="service" tabindex="0">
                            <div className="service_image">
                                <img
                                    src={testingImg}
                                    alt="a pair of glasses sitting on a keyboard."
                                />
                            </div>
                            <div className="service_content">
                                <h2 className="service_title">
                                    Gaming & Streaming Network Setups &#x2022; $50
                                </h2>
                                <div className="service_text">
                                    <p>
                                        <strong>Low Latency • High Performance • Clean Installs</strong>
                                        <br />
                                        If you’re a <em>gamer</em>, <em>content creator</em>, or <em>livestreamer</em>
                                        , you know that a fast and stable connection can make or break your setup.
                                        We’ll hardwire your streaming PC, gaming console, or workstation
                                        straight to your router or switch using clean, efficient cable routes.
                                    </p>
                                    <p>
                                        What we provide:{" "}
                                        <strong>
                                            <br />
                                            • Direct Cat6 connections to gaming/streaming rigs <br />
                                            • Latency-optimized wiring paths <br />
                                            • Tidy installs with labeled lines <br />
                                            • Panel or wall terminations for easy future changes <br />
                                        </strong>{" "}
                                        <em>
                                            Feel free to call if you have
                                            questions!
                                        </em>
                                    </p>
                                    <p className="upcharge">
                                        Performance starts with your connection—make it count.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
                <li className="service_item">
                    <a className="hero-link" href="/service">
                        <div className="service" tabindex="0">
                            <div className="service_image">
                                <img
                                    src={customImg}
                                    alt="a pair of glasses sitting on a keyboard."
                                />
                            </div>
                            <div className="service_content">
                                <h2 className="service_title">
                                    Business & Commercial Cabling
                                </h2>
                                <div className="service_text">
                                    <span className="note">Price Varies</span>
                                    <p>
                                        <em>Professional Network Cabling for Your Office or Workspace</em>
                                        <br />
                                        Keep your network closet or media panel organized and efficient.
                                        We offer structured wiring services for small businesses, offices,
                                        retail shops, and more. Whether you’re moving in, expanding, or
                                        just need cleanup—we’ll help you create a neat, labeled, and
                                        reliable infrastructure.
                                    </p>
                                    <p>
                                        We can help with:{" "}
                                        <strong>
                                            <br />
                                            • Media panel and network closet organization <br />
                                            • Running Ethernet to offices, POS stations, or server rooms <br />
                                            • Labeling & testing existing lines <br />
                                            • Clean and compliant installs with faceplates
                                        </strong>{" "}
                                    </p>
                                    <p className="upcharge">
                                        Trust your cables to someone who treats them like part of the team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Services;

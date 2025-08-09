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
                                    Network Installations
                                </h2>
                                <div className="service_text">
                                    <p>
                                        We run high-quality Cat5e, Cat6, and fiber cables for reliable network speed.
                                        Our team quickly troubleshoots network issues and installs mesh systems for
                                        seamless Wi-Fi coverage. We also provide secure point-to-point (P2P) links to
                                        extend your network over long distances.


                                    </p>
                                    <p>
                                        Services include:{" "}
                                        <strong>
                                            <br />
                                            • ✅ Structured Cable Runs (Cat5e, Cat6) <br />
                                            • ✅ Network Troubleshooting & Repair <br />
                                            • ✅ Mesh Wi-Fi Network Setup <br />
                                            • ✅ Point-to-Point (P2P) Internet Installation <br />
                                        </strong>
                                    </p>
                                    <p className="upcharge">
                                        🔧 Connecting You with Confidence{" "}
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
                                    Home Automation
                                </h2>
                                <div className="service_text">
                                    <p>
                                        <strong>Smart Control • Energy Efficient • Seamless Integration</strong>
                                        <br />
                                        Our home automation solutions are designed for <em>modern homeowners</em>,
                                        <em>tech enthusiasts</em>, and anyone looking to simplify daily life. We specialize in
                                        smart lighting, climate control, and security integration—all controlled easily
                                        from your smartphone or voice assistant. Experience a home that adapts to you.


                                    </p>
                                    <p>
                                        What we provide:{" "}
                                        <strong>
                                            <br />
                                            • ✅ Smart Lighting & Climate Control <br />
                                            • ✅ Voice Assistant Integration <br />
                                            • ✅ Automated Security & Access Control <br />
                                            • ✅ Custom Smart Home Scenes & Schedules <br />
                                        </strong>{" "}
                                        <em>
                                            Call now to get your free estimate!
                                        </em>
                                    </p>
                                    <p className="upcharge">
                                        🎮 Making Your Home Work Smarter
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
                                    Security Systems
                                </h2>
                                <div className="service_text">
                                    <span className="note">Tailored Pricing</span>
                                    <p>
                                        <em>Protecting What Matters Most</em>
                                        <br />
                                        We provide comprehensive security systems for homeowners and
                                        businesses looking to safeguard their property. Our services include
                                        security camera installation, alarm systems, and 24/7 monitoring
                                        integration—all designed to give you peace of mind and control from anywhere.
                                    </p>
                                    <p>
                                        We can help with:{" "}
                                        <strong>
                                            <br />
                                            • ✅ Security Camera Installation <br />
                                            • ✅ Alarm & Sensor Systems <br />
                                            • ✅ Remote Monitoring Setup <br />
                                            • ✅ Access Control Solutions
                                        </strong>{" "}
                                    </p>
                                    <p className="upcharge">
                                        🏢 Your Safety, Our Priority
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

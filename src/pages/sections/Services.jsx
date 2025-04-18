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
                                    Residential Cabling Services
                                </h2>
                                <div className="service_text">
                                    <p>
                                        Reliable Home Networking Solutions Upgrade your home with clean,
                                        efficient Ethernet cabling designed for today’s digital demands.
                                        Whether you're streaming 4K video, gaming competitively, or
                                        working remotely—we’ll eliminate lag and dead zones with professional
                                        Cat5e/Cat6 cable runs and terminations.
                                    </p>
                                    <p>
                                        Services include:{" "}
                                        <strong>
                                            <br />
                                            • ✅ Room-to-room cable runs <br />
                                            • ✅ Media panel cleanups & cable dressing <br />
                                            • ✅ Faceplate hookups & terminations <br />
                                            • ✅ Wired connections for TVs, PCs, and consoles <br />
                                        </strong>
                                    </p>
                                    <p className="upcharge">
                                        🔧 Built for speed. Installed with care.{" "}
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
                                    Gaming & Streaming Network Setups
                                </h2>
                                <div className="service_text">
                                    <p>
                                        <strong>Low Latency • High Performance • Clean Installs</strong>
                                        <br />
                                        Pro-Level Network for <em>Gamers</em> & <em>Creators</em> Tired of lag ruining
                                        your stream or game? Get a rock-solid connection hardwired
                                        directly to your rig. We specialize in low-latency installs
                                        that support high-bandwidth needs and keep your setup looking clean.
                                    </p>
                                    <p>
                                        What we provide:{" "}
                                        <strong>
                                            <br />
                                            • ✅ Direct Cat6 connections <br />
                                            • ✅ Labeled, clutter-free cable routing <br />
                                            • ✅ Wall terminations for future flexibility <br />
                                            • ✅ Ideal for Twitch streamers, YouTubers, and esports setups <br />
                                        </strong>{" "}
                                        <em>
                                            Call now to get your free estimate!
                                        </em>
                                    </p>
                                    <p className="upcharge">
                                        🎮 Fast. Clean. Battle-tested.
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
                                        <em>Professional Cabling for Growing Businesses</em>
                                        <br />
                                        Clean, structured cabling
                                        isn’t just about aesthetics—it’s about uptime, safety, and scalability.
                                        Whether you’re setting up a new office, renovating, or streamlining an
                                        existing network, we deliver top-tier cable management and install
                                        services tailored to your workspace.
                                    </p>
                                    <p>
                                        We can help with:{" "}
                                        <strong>
                                            <br />
                                            • ✅ Media panel & network closet optimization <br />
                                            • ✅ Ethernet runs to offices, POS stations, and server racks <br />
                                            • ✅ Line labeling, testing, and documentation <br />
                                            • ✅ Standards-compliant terminations & faceplates
                                        </strong>{" "}
                                    </p>
                                    <p className="upcharge">
                                        🏢 Build a network that works as hard as your team.
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

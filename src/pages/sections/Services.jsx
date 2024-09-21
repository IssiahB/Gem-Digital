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
                    <div className="service" tabindex="0">
                        <div className="service_image">
                            <img src={consultImg} alt="Group Consulting" />
                        </div>
                        <div className="service_content">
                            <h2 className="service_title">
                                IT Consulting &#x2022; $75 hr
                            </h2>
                            <div className="service_text">
                                <p>
                                    Find expert advice for your local network.
                                    Whether installing new hardware or simply
                                    monitoring network traffic, our IT
                                    Technicians will help you through every
                                    step.
                                </p>
                                <p>
                                    Our Techs are trained in every area of IT
                                    including:{" "}
                                    <strong>
                                        Network Security, OS Installations Data
                                        Backups, Computer Hardware, Computer
                                        Software, Active Monitoring, and More.
                                    </strong>
                                </p>
                                <p className="upcharge">
                                    With our Active Monitoring service you can
                                    rest easy knowing that your network is
                                    secure 24/7.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="service_item">
                    <div className="service" tabindex="0">
                        <div className="service_image">
                            <img
                                src={testingImg}
                                alt="a pair of glasses sitting on a keyboard."
                            />
                        </div>
                        <div className="service_content">
                            <h2 className="service_title">
                                Device Repair &#x2022; $50
                            </h2>
                            <div className="service_text">
                                <p>
                                    Let us repair your phone, tablet, or PC. We
                                    can even work on TVs, Game Consoles, and
                                    offer simple repairs for appliances. No need
                                    to spend extraordinary amounts of $$$, with
                                    our quick repairs you can spend as little as
                                    50$.
                                </p>
                                <p>
                                    Don't let a broken electronic ruin your
                                    plans and drain your bank account. We can
                                    fix your devices including repairs like:{" "}
                                    <strong>
                                        cracked screen, button repair, faulty
                                        battery, audio issues, camera repair,
                                        and much more.
                                    </strong>{" "}
                                    <em>
                                        Feel free to call if you have questions!
                                    </em>
                                </p>
                                <p className="upcharge">
                                    Have ease of mind with our 1-year warranty
                                    for repaired parts.
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="service_item">
                    <div className="service" tabindex="0">
                        <div className="service_image">
                            <img
                                src={customImg}
                                alt="a pair of glasses sitting on a keyboard."
                            />
                        </div>
                        <div className="service_content">
                            <h2 className="service_title">
                                Custom Software Development
                            </h2>
                            <div className="service_text">
                                <span className="note">Price Varies</span>
                                <p>
                                    With years of experience building complex
                                    software our team can make your dreams come
                                    true. Give use your requriements and
                                    deadlines and we will make it happen.
                                </p>
                                <p>
                                    Have an existing codebase we can work on
                                    that too. Let us provide our comprehensive
                                    testing package, or even migrate you to the
                                    cloud.
                                </p>
                                <p>
                                    We can build you:{" "}
                                    <strong>
                                        Mobile apps, static websites, web APIs,
                                        Web Applications, and even Desktop
                                        Applications.
                                    </strong>{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Services;

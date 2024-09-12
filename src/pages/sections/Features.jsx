import React from "react";

import "./styles/Features.style.css";
import colabImg from "../../assets/images/team-collaboration.jpg";

const Features = () => {
    return (
        <section className="software-services-section">
            <div className="content-wrapper">
                <div className="image-container">
                    <img
                        src={colabImg}
                        data-aos="slide-right"
                        alt="Team collaboration"
                        className="styled-image"
                    />
                </div>
                <div className="text-container" data-aos="fade-up">
                    <h1 className="section-title">What Sets Us Apart</h1>
                    <p className="section-description">
                        At Gem Digital Solutions, we focus on crafting unique
                        software solutions tailored to your business needs. Our
                        approach combines cutting-edge technology, personalized
                        service, and unparalleled expertise to bring you the
                        best in software development.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Features;

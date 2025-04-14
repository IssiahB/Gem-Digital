import React from "react";

import SimpleButton from "../../components/SimpleButton";

import patchImg from "../../assets/images/patch-panel-closeup.jpg";
import "./styles/Features.style.css";

const Features = () => {
    return (
        <section className="software-services-section">
            <div className="content-wrapper">
                <div className="image-container">
                    <img
                        src={patchImg}
                        data-aos="fade-in"
                        alt="Closeup of cables in patch panel"
                        className="styled-image"
                    />
                </div>
                <div className="text-container" data-aos="fade-up">
                    <h1 className="section-title">What Sets Us Apart</h1>
                    <p className="section-description">
                        At Gem Digital Solutions, we deliver clean, organized, and reliable cable installations for homes and businesses across Idaho.
                        What makes us different? Precision craftsmanship, attention to detail, and a strong commitment to customer satisfaction.
                        We don’t just run cables — we build infrastructure you can count on.
                    </p>
                    <SimpleButton href="/about" id="feature-btn">
                        Learn More
                    </SimpleButton>
                </div>
            </div>
            <div className="shape-divider"></div>
        </section>
    );
};

export default Features;

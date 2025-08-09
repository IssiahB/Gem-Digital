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
                        At Gem Digital Solutions LLC, we take the time to carefully plan and tailor every
                        installation to fit your unique needs. We communicate clearly about what’s possible
                        and don’t promise what we can’t deliver. Our job isn’t done until you’re fully satisfied
                        with the work and your home’s security and connectivity.
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

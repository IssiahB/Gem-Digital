import React from "react";

import SimpleButton from "../../components/SimpleButton";

import colabImg from "../../assets/images/team-collaboration.jpg";
import "./styles/Features.style.css";

const Features = () => {
    return (
        <section className="software-services-section">
            <div className="content-wrapper">
                <div className="image-container">
                    <img
                        src={colabImg}
                        data-aos="fade-in"
                        alt="Team collaboration"
                        className="styled-image"
                    />
                    <div className="image-overlay"></div>
                </div>
                <div className="text-container" data-aos="fade-up">
                    <h1 className="section-title">What Sets Us Apart</h1>
                    <p className="section-description">
                        Gem Digital Solutions is proudly founded in Idaho, the
                        'Gem' state. We offer tech services to our fellow
                        Idahoans. Whether for business or personal, we provide
                        exceptional service and understand customer care.
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

import React from "react";

import NavBar from "../components/NavBar";
import Timeline from "./sections/Timeline";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

import "./styles/AboutPage.style.css";

import aboutImg from "../assets/images/idaho-map.jpg";

function AboutPage() {
    return (
        <>
            <NavBar />
            <div className="about-page">
                {/* About Landing Section */}
                <section className="about-landing">
                    <div className="about-landing-content">
                        <div
                            data-aos="slide-right"
                            className="landing-shape"
                        ></div>
                        <h1 data-aos="zoom-in" className="about-title">
                            About Our Company
                        </h1>
                        <p data-aos="zoom-in" className="about-desc">
                            At Gem Digital Solutions, we are proud Idahoans.
                        </p>
                    </div>
                    <div className="about-landing-img-container">
                        <img
                            src={aboutImg}
                            alt="Company Vision"
                            className="about-landing-img"
                        />
                    </div>
                </section>
            </div>
            <Timeline />
            <FAQ />
            <Footer />
        </>
    );
}

export default AboutPage;

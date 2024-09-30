import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";

import ContactForm from "../components/ContactForm";
import webmVideo from "../assets/videos/world-background.webm";
import mp4Video from "../assets/videos/world-background.mp4";

import "./styles/ContactPage.style.css";

function ContactPage() {
    return (
        <>
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
            <NavBar />
            <ContactForm />
            <Footer />
        </>
    );
}

export default ContactPage;

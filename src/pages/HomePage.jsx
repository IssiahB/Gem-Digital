import NavBar from "../components/NavBar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <Services />
            <Portfolio />
            <Testimonials />
            <Blog />
            <FAQ />
            <Footer />
        </>
    );
}

export default HomePage;

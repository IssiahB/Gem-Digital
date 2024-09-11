import NavBar from "../components/NavBar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Portfolio from "./sections/Portfolio";
import Services from "./sections/Services";
import Testimonials from "./sections/Testmonials";
import Blog from "./sections/Blog";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

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
            <Contact />
        </>
    );
}

export default HomePage;

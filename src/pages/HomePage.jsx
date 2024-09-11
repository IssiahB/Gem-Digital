import Landing from "./sections/Landing";
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
            <Landing />
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

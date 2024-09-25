import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./styles/NavBar.style.css";

function NavBar() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState("up");

    useEffect(() => {
        const heroSection = document.querySelector(".hero-section");
        const navbar = document.querySelector(".navbar");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    navbar.classList.add("navbar-solid");
                } else {
                    navbar.classList.remove("navbar-solid");
                }
            },
            { threshold: 0.1 }
        );

        if (heroSection) observer.observe(heroSection);

        // Scroll event listener to detect scroll direction
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setScrollDirection("down");
                navbar.classList.add("navbar-hidden");
            } else {
                // Scrolling up
                setScrollDirection("up");
                navbar.classList.remove("navbar-hidden");
            }

            // If at the top of the page, show the navbar
            if (currentScrollTop === 0) {
                navbar.classList.remove("navbar-hidden");
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // For mobile or negative scrolling
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (heroSection) observer.unobserve(heroSection);
        };
    }, [lastScrollTop]);

    return (
        <Navbar
            collapseOnSelect
            bg="dark"
            variant="dark"
            expand="lg"
            className="navbar py-3"
        >
            <Container>
                <Navbar.Brand>
                    <Link className="nav-link" to="/">
                        <img
                            alt="Gem Digital Logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{" "}
                        <div className="navbar-title">
                            Gem Digital Solutions
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#shop">Shop</Nav.Link>
                        <NavDropdown
                            title="Services"
                            id="collapsible-nav-dropdown"
                            data-bs-theme="dark"
                        >
                            <NavDropdown.Item href="service/repair">
                                Device Repair
                            </NavDropdown.Item>
                            <NavDropdown.Item href="service/consult">
                                IT Consulting
                            </NavDropdown.Item>
                            <NavDropdown.Item href="shop">
                                Hardware
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="service/custom">
                                Custom Software
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link eventKey={2} href="#contact">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

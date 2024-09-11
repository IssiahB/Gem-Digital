import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./styles/NavBar.style.css";

function NavBar() {
    useEffect(() => {
        const heroSection = document.querySelector(".hero-section");
        const navbar = document.querySelector(".navbar");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    navbar.classList.add("navbar-visible");
                } else {
                    navbar.classList.remove("navbar-visible");
                }
            },
            { threshold: 0.1 }
        );

        if (heroSection) observer.observe(heroSection);

        return () => {
            if (heroSection) observer.unobserve(heroSection);
        };
    }, []);

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
                        Gem Digital Solutions
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <NavDropdown
                            title="Services"
                            id="collapsible-nav-dropdown"
                            data-bs-theme="dark"
                        >
                            <NavDropdown.Item href="#action/3.1">
                                Mobile Apps
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Websites
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Consulting
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Custom Software
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#deets">Blog</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

import { Container, Navbar } from "react-bootstrap";

function Landing() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src="/src/assets/logo.svg" // Adjust this based on your actual image.
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Gem Digital Solutions"
                    />
                </Navbar.Brand>
                <h1 className="text-white ms-3">Building Software Gems</h1>
            </Container>
        </Navbar>
    );
}

export default Landing;

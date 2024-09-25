import { Container, Accordion } from "react-bootstrap";
import "./styles/FAQ.style.css";

function FAQ() {
    return (
        <section className="faq-section py-5">
            <Container>
                <h2 className="text-center faq-title mb-5">
                    Frequently Asked Questions
                </h2>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="faq-header">
                            Where can you service in-person?
                        </Accordion.Header>
                        <Accordion.Body>
                            We can work in-person anywhere 50 miles outside of
                            Boise. West of Boise that would be just past Parma,
                            East would be Idaho City, North would be Banks, and
                            South would be just past Mountain Home.
                            <br /> <br />
                            In-person work would include services like hardware
                            installations. Don't worry almost all of the other
                            services we offer are online or mail friendly.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="faq-header">
                            How can I contact you?
                        </Accordion.Header>
                        <Accordion.Body>
                            You can reach us via phone at (208) 417-3533 or
                            email us at contact@gemdigitalsolutions.org.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="faq-header">
                            How much does it cost?
                        </Accordion.Header>
                        <Accordion.Body>
                            Some of our services are set at a fixed rate, for
                            instance IT Consulting is $75/hr. Others depend on
                            the complexity and scope of the project. An example
                            of this would be Mobile App Development. Please feel
                            free to give us a call at (208) 417-3533 and get a
                            free quote today.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="faq-header">
                            You do appliance repairs?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, we offer simple appliance repairs. That means
                            we can troubleshoot and repair key components of
                            your appliance.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header className="faq-header">
                            Do you sell devices?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, we are partnered with industry leaders like HP
                            and Lenovo to offer you affordable hardware for your
                            business.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="faq-header">
                            Where are you located?
                        </Accordion.Header>
                        <Accordion.Body>
                            We are located out of Caldwell, ID. We currently do
                            not have a brick-n-mortar location but with our
                            workshop we are able to offer all our services and
                            more.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default FAQ;

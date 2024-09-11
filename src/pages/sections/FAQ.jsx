import { Container, Accordion } from "react-bootstrap";

function FAQ() {
    return (
        <section className="faq-section py-5">
            <Container>
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            What services do you offer?
                        </Accordion.Header>
                        <Accordion.Body>
                            We offer a wide range of software solutions,
                            including custom software development, IT
                            consulting, and more.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            How can I contact you?
                        </Accordion.Header>
                        <Accordion.Body>
                            You can reach us via phone at (208) 417-3533 or
                            email us at contact@gemdigitalsolutions.org.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default FAQ;

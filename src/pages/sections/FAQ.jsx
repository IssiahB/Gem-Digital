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
                            What services do you offer?
                        </Accordion.Header>
                        <Accordion.Body>
                            We offer a range of software solutions, including
                            custom software development, IT consulting, mobile
                            app development, and web development (i.e. Websites,
                            api, etc.).
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
                            It all depends on the complexity of the work you
                            would like done. However there are some services
                            that are priced at a fixed rate. This would include
                            IT consulting ($200), Static Websites ($100 - $500 +
                            hosting fees), and Basic Web APIs ($250 + hosting
                            fees). To calculate the cost of a more complex
                            software solution there are a couple steps we go
                            through to get the best price. <br />
                            1) Break down the project into milestones and
                            features. As well as determining deadlines. <br />
                            2) 3)
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default FAQ;

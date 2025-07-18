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
                            What types of cabling services do you provide?
                        </Accordion.Header>
                        <Accordion.Body>
                            We specialize in Cat5e and Cat6 ethernet cabling for residential, commercial, and industrial spaces. Our services include cable runs, terminations, patch panel setup, labeling, dressing, and faceplate installations — all done with a focus on clarity, efficiency, and performance.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="faq-header">
                            Do you offer services for new builds or remodels?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes. Whether you're building from the ground up or renovating, we can design and install structured cabling that fits your layout and future-proofs your network for high-speed internet, home automation, or office use.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="faq-header">
                            Can you organize or clean up my current network setup?
                        </Accordion.Header>
                        <Accordion.Body>
                            Absolutely. We offer media panel and network closet cleanups, cable management, labeling, and optimization. If your wiring is a mess or hard to troubleshoot, we can bring order and reliability to your setup.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="faq-header">
                            Do you install point-to-point wireless links?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, we install point-to-point (PtP) wireless systems for buildings that need connectivity across driveways, yards, or separate structures. This is ideal for shop buildings, detached offices, or barns.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header className="faq-header">
                            What brands or equipment do you work with?
                        </Accordion.Header>
                        <Accordion.Body>
                            We’re vendor-neutral and work with quality brands based on your needs and budget. For wireless installs, we’ve worked with Cambium Networks, Ubiquiti, and TP-Link Deco systems. For cabling, we use outdoor-rated, shielded cabling when needed, and test all lines for performance.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header className="faq-header">
                            Can you help troubleshoot my internet or Wi-Fi issues?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes. We troubleshoot weak signals, slow speeds, device connectivity issues, and physical wiring problems. Whether it’s a simple fix or a full system redesign, we can help you get stable, reliable internet service.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header className="faq-header">
                            Do you offer software development too?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes, we provide small-scale custom software solutions, including dashboards, web apps, and automation tools for businesses. If you're a small company looking to track finances, streamline workflows, or manage inventory, we can build something tailored to you.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header className="faq-header">
                            Do you provide documentation after a job?
                        </Accordion.Header>
                        <Accordion.Body>
                            We offer labeled diagrams, device placement maps, and cable lists upon request. Documentation ensures your system can be serviced easily down the line, whether by us or another technician.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header className="faq-header">
                            Are you licensed and insured?
                        </Accordion.Header>
                        <Accordion.Body>
                            Yes. Gem Digital Solutions LLC is a registered Idaho business. We carry liability insurance and follow industry standards for safety and data integrity.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header className="faq-header">
                            How do I request a quote or schedule service?
                        </Accordion.Header>
                        <Accordion.Body>
                            You can use the contact form on our website, call us directly, or reach out via email. Include the type of service you're looking for and any photos or plans if available — we’ll follow up promptly to schedule an assessment or provide a quote.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </section>
    );
}

export default FAQ;

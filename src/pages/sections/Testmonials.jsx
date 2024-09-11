import { Container, Carousel } from "react-bootstrap";

function Testimonials() {
    return (
        <section className="testimonials-section py-5 bg-light">
            <Container>
                <h2 className="text-center mb-4">What Our Clients Say</h2>
                <Carousel>
                    <Carousel.Item>
                        <blockquote className="blockquote text-center">
                            <p className="mb-4">
                                "Gem Digital Solutions took our business to the
                                next level with their excellent software
                                development skills. Highly recommend!"
                            </p>
                            <footer className="blockquote-footer">
                                John Doe, CEO of Tech Solutions
                            </footer>
                        </blockquote>
                    </Carousel.Item>
                    <Carousel.Item>
                        <blockquote className="blockquote text-center">
                            <p className="mb-4">
                                "Professional, timely, and truly experts in
                                their field. The team provided exactly what we
                                needed!"
                            </p>
                            <footer className="blockquote-footer">
                                Jane Smith, Owner of Creative Agency
                            </footer>
                        </blockquote>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}

export default Testimonials;

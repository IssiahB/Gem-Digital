import { Container, Row, Col } from "react-bootstrap";
import "./styles/Blog.style.css";

import tempImg from "../../assets/images/consulting.jpg";

function Blog() {
    return (
        <section className="blog-section py-5">
            <Container>
                <h2 className="text-center blog-title mb-5">
                    Latest Insights & Articles
                </h2>
                <Row
                    className="align-items-center blog-post"
                    data-aos="slide-left"
                    data-aos-offset="300"
                    data-aos-delay="100"
                >
                    <Col md={6}>
                        <div className="blog-image-wrapper">
                            <img
                                src={tempImg}
                                alt="Blog Post 1"
                                className="blog-image"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="blog-content">
                            <h3 className="blog-post-title">
                                Understanding Digital Transformation
                            </h3>
                            <p className="blog-post-text">
                                Explore how businesses are leveraging technology
                                to stay competitive in today’s market.
                            </p>
                            <a href="#" className="blog-read-more">
                                Read More
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row
                    className="align-items-center blog-post reverse"
                    data-aos="slide-right"
                    data-aos-offset="300"
                    data-aos-delay="200"
                >
                    <Col md={6}>
                        <div className="blog-image-wrapper">
                            <img
                                src={tempImg}
                                alt="Blog Post 2"
                                className="blog-image"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="blog-content">
                            <h3 className="blog-post-title">
                                Top 5 Trends in Software Development
                            </h3>
                            <p className="blog-post-text">
                                Stay ahead of the curve by understanding the
                                latest trends that will shape the future of
                                software.
                            </p>
                            <a href="#" className="blog-read-more">
                                Read More
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row
                    className="align-items-center blog-post"
                    data-aos="slide-left"
                    data-aos-offset="300"
                    data-aos-delay="300"
                >
                    <Col md={6}>
                        <div className="blog-image-wrapper">
                            <img
                                src={tempImg}
                                alt="Blog Post 3"
                                className="blog-image"
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="blog-content">
                            <h3 className="blog-post-title">
                                Case Study: Project X Success
                            </h3>
                            <p className="blog-post-text">
                                Read how our team solved complex challenges for
                                a major client, driving impactful business
                                results.
                            </p>
                            <a href="#" className="blog-read-more">
                                Read More
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Blog;

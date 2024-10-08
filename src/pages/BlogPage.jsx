import { Container, Row, Col, Form, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom
import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";
import "./styles/BlogPage.style.css";

function BlogPage() {
    const navigate = useNavigate(); // Hook for navigation

    const handleBlogClick = (blogData) => {
        // Navigate to blog details page, passing the blog data as props
        navigate("/blog-detail", { state: blogData });
    };

    return (
        <>
            <NavBar />
            {/* Hero Section */}
            <header className="blog-landing py-5 text-center">
                <Container>
                    <h1 className="blog-page-title mb-3">
                        Gem Digital: Stories and Research
                    </h1>
                    <p className="blog-cta">
                        Subscribe to learn about new product features, the
                        latest technologies, and updates.
                    </p>
                    <div className="blog-landing-form mx-auto">
                        <Form>
                            <Row className="align-items-center">
                                <Col xs={8}>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                    />
                                </Col>
                                <Col xs={4}>
                                    {/* Custom-styled button */}
                                    <button className="custom-subscribe-btn">
                                        Subscribe
                                    </button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </Container>
            </header>

            {/* Recent Blog Posts Section */}
            <section className="recent-blogs py-5">
                <Container>
                    <h2 className="blog-section-title mb-4">
                        Recent Blog Posts
                    </h2>
                    <Row className="gx-5">
                        {/* Left Column: Main Blog Post */}
                        <Col md={8}>
                            <div
                                className="main-blog-post clickable"
                                onClick={() =>
                                    handleBlogClick({
                                        title: "Main Blog Post Title",
                                        description:
                                            "Main blog post description",
                                        author: "Author Name",
                                        date: "Date",
                                        imageUrl:
                                            "https://picsum.photos/id/237/500.jpg",
                                        tags: ["#Tag1", "#Tag2", "#Tag3"],
                                    })
                                }
                            >
                                <img
                                    src="https://picsum.photos/id/237/500.jpg"
                                    alt="Main Blog"
                                    className="img-fluid centered-image mb-3"
                                />
                                <div className="blog-meta">
                                    <span>Author Name - Date</span>
                                    <h3>Main Blog Post Title</h3>
                                    <p>
                                        This is a short description of the main
                                        blog post. It provides a glimpse into
                                        the blog content and invites users to
                                        read more.
                                    </p>
                                    <div className="tags">
                                        #Tag1 #Tag2 #Tag3
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Right Column: Additional Blog Posts */}
                        <Col md={4}>
                            <Row className="gy-4 d-flex flex-column h-100">
                                {[...Array(3)].map((_, index) => (
                                    <Col
                                        key={index}
                                        xs={12}
                                        className="clickable additional-blog-post d-flex"
                                        onClick={() =>
                                            handleBlogClick({
                                                title: `Blog Post Title ${
                                                    index + 1
                                                }`,
                                                description:
                                                    "This is a short description for the additional blog post.",
                                                author: "Author Name",
                                                date: "Date",
                                                imageUrl: `https://picsum.photos/id/${
                                                    index + 20
                                                }/300/200.jpg`,
                                                tags: ["#Tag1", "#Tag2"],
                                            })
                                        }
                                    >
                                        <img
                                            src={`https://picsum.photos/id/${
                                                index + 20
                                            }/300/200.jpg`}
                                            alt="Blog"
                                            className="img-fluid me-3 centered-image"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                            }}
                                        />
                                        <div className="blog-meta">
                                            <span>Author Name - Date</span>
                                            <h5>Blog Post Title {index + 1}</h5>
                                            <p>
                                                This is a short description for
                                                the additional blog post.
                                            </p>
                                            <div className="tags">
                                                #Tag1 #Tag2
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* All Blog Posts Section */}
            <section className="all-blogs py-5">
                <Container>
                    <h2 className="blog-section-title mb-4">All Blog Posts</h2>
                    <Row className="gx-5 gy-4">
                        {[...Array(10)].map((_, index) => (
                            <Col
                                key={index}
                                md={4}
                                className="clickable"
                                onClick={() =>
                                    handleBlogClick({
                                        title: `Blog Post Title ${index + 1}`,
                                        description:
                                            "This is a short description of the blog post.",
                                        author: "Author Name",
                                        date: "Date",
                                        imageUrl: `https://picsum.photos/id/${
                                            index + 10
                                        }/200.jpg`,
                                        tags: ["#Tag1", "#Tag2"],
                                    })
                                }
                            >
                                <div className="blog-post-card">
                                    <img
                                        src={`https://picsum.photos/id/${
                                            index + 10
                                        }/200.jpg`}
                                        alt="Blog"
                                        className="img-fluid centered-image mb-3"
                                    />
                                    <div className="blog-meta">
                                        <span>Author Name - Date</span>
                                        <h5>Blog Post Title {index + 1}</h5>
                                        <p>
                                            This is a short description of the
                                            blog post.
                                        </p>
                                        <div className="tags">#Tag1 #Tag2</div>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                    {/* Pagination Carousel */}
                    <div className="pagination-carousel text-center mt-5">
                        <Carousel indicators={false} interval={null}>
                            <Carousel.Item>
                                <button className="custom-page-nav-btn">
                                    Previous
                                </button>
                                <span className="mx-3">Page 1 of 5</span>
                                <button className="custom-page-nav-btn">
                                    Next
                                </button>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default BlogPage;

import "./styles/Timeline.style.css";

function Timeline() {
    return (
        <section className="timeline">
            <h2 className="timeline-title">Things To Know</h2>
            <div className="divider mb-5"></div>
            <div className="time-outer">
                <div className="time-card">
                    <div
                        className="time-info"
                        data-aos="slide-left"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 className="time-title">Mission</h3>
                        <p>
                            <strong>Mission Statement:</strong>{" "}
                            <em>
                                To bring reliable networking and tech solutions
                                to the people and businesses of Idaho.
                            </em>
                            <br /> <br />
                            Gem Digital Solutions exists to meet the growing
                            demand for trustworthy, hands-on IT services —
                            especially where cabling, network configuration, and
                            on-site support are needed. We aim to be a known and
                            respected name across Idaho for dependable work,
                            honest service, and real-world results.
                        </p>
                    </div>
                </div>
                <div className="time-card">
                    <div
                        className="time-info"
                        data-aos="slide-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 className="time-title">Core Values</h3>
                        <p>
                            <strong>
                                These values guide our work and the way we
                                interact with every client:
                            </strong>
                            <br /> <br />
                            <em>Integrity:</em> Do the right thing, even if no
                            one’s watching.
                            <br />
                            <em>Service:</em> Treat every client with care and
                            every job like it matters — because it does.
                            <br />
                            <em>Curiosity:</em> Stay hungry to learn. This
                            industry never stops moving, and neither do we.
                            <br />
                            <em>Precision:</em> Whether it's a cable run, a
                            device configuration, or a network test — details
                            matter.
                            <br />
                            <em>Faith:</em> The work we do is a reflection of
                            the values we hold. Humility, respect, and honesty
                            are foundational here.
                        </p>
                    </div>
                </div>
                <div className="time-card">
                    <div
                        className="time-info"
                        data-aos="slide-left"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 className="time-title">History</h3>
                        <p>
                            Gem Digital Solutions was founded in 2024 with a
                            simple idea: people deserve better when it comes to
                            their networks and technology. What started as small
                            jobs for friends and neighbors grew into a business
                            focused on solving real technical problems —
                            especially where hands-on expertise is needed. We’re
                            still growing, but the goal remains the same: be the
                            team people trust to get the job done right.
                        </p>
                    </div>
                </div>
                <div className="time-card">
                    <div
                        className="time-info"
                        data-aos="slide-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 className="time-title">Founder</h3>
                        <p>
                            Gem Digital Solutions is owned and operated by{" "}
                            <em>Issiah Banda</em>, a dedicated network
                            technician, tech enthusiast, and family man based in
                            Caldwell, Idaho. Issiah has a passion for how
                            systems connect — from the physical structure of a
                            cable run to the invisible handshake between routers,
                            switches, and firewalls.
                            <br /> <br />
                            With hands-on experience in field installation, IT
                            support, and network design, Issiah started Gem
                            Digital with the belief that people deserve
                            dependable, clear, and honest tech work. Whether
                            you're a homeowner needing a clean media panel, or a
                            business setting up a reliable network, Issiah brings
                            care and competence to every job.
                        </p>
                    </div>
                </div>
                <div className="time-card">
                    <div
                        className="time-info"
                        data-aos="slide-left"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 className="time-title">Looking Ahead</h3>
                        <p>
                            While networking and tech infrastructure remain our
                            focus, we’re building toward a future where Gem
                            Digital can also offer hardware sales, on-site
                            support contracts, and possibly expand into
                            audiovisual and security systems.
                            <br /> <br />
                            We’re not in a rush to grow — we’re focused on doing
                            good work first. If you're in Idaho and want
                            someone who shows up, gets it right, and follows
                            through, give us a call. This is only the beginning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;

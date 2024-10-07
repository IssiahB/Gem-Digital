import "./styles/Timeline.style.css";

function Timeline() {
    return (
        <section class="timeline">
            <h2 className="timeline-title">Things To Know</h2>
            <div class="divider mb-5"></div>
            <div class="time-outer">
                <div class="time-card">
                    <div
                        class="time-info"
                        data-aos="slide-left"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 class="time-title">Mission</h3>
                        <p>
                            <strong>Mission Statement:</strong>{" "}
                            <em>
                                To Provide Idaho With A Better Tech Solution.
                            </em>
                            <br /> <br />
                            At Gem Digital Solutions our mission is to provide
                            Idaho businesses and individuals with an all-in-one
                            package for their tech needs. Giving Idaho an
                            advantage in the tech industry at a lower price tag
                            than our competitors.
                        </p>
                    </div>
                </div>
                <div class="time-card">
                    <div
                        class="time-info"
                        data-aos="slide-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 class="time-title">Core Values</h3>
                        <p>
                            <strong>
                                Here we have simple yet firm values, they play a
                                key role not only in the way we do business but
                                also how we live our lives.
                            </strong>{" "}
                            <br /> <br />
                            <em>Integrity:</em> We ensure that every job is done
                            the right way
                            <br /> <em>Accountability:</em> Accept
                            responsibility for every action and guarantee
                            promises are met on time
                            <br /> <em>Curiosity:</em> Always be hungry for
                            knowledge, keeping on top of cutting edge
                            technologies.
                            <br />
                            <em>Fairness:</em> Everyone is held to same
                            standard, and our work always has a consistant
                            quality
                            <br />
                        </p>
                    </div>
                </div>
                <div class="time-card">
                    <div
                        class="time-info"
                        data-aos="slide-left"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 class="time-title">History</h3>
                        <p>
                            <strong>Gem Digital Solutions</strong> is a young
                            and ambitious Company. Founded in 2024 we are
                            seeking to partner with key industries in Idaho,
                            providing low cost tech solutions that exceed our
                            client's expectations.
                        </p>
                    </div>
                </div>
                <div class="time-card">
                    <div
                        class="time-info"
                        data-aos="slide-right"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 class="time-title">Founders</h3>
                        <p>
                            <strong>Gem Digital Solutions</strong> was founded
                            by <em>Issiah Banda</em> and{" "}
                            <em>Brandon Thatcher</em>. Both are native Idahoans
                            and have beautiful families.
                        </p>
                    </div>
                </div>
                <div class="time-card">
                    <div
                        class="time-info"
                        data-aos="slide-left"
                        data-aos-offset="300"
                        data-aos-delay="100"
                    >
                        <h3 class="time-title">Guarentees</h3>
                        <p>
                            Though we may be a new company we are determined to
                            prove ourselves. We are no stanger to hard work and
                            offer multiple guarentees that set us apart.
                            <br /> <br />
                            <em>General:</em> <br />
                            <em>-</em> <strong>Prices</strong>: We guarantee
                            fixed pricing for our services. Once we agree on a
                            price, there will be no hidden fees.
                            <br />
                            <br />
                            <em>IT:</em> <br />
                            <em>-</em> <strong>Crisis Response</strong>: We
                            guarantee that we will be available and respond
                            quickly to any major event in your network.
                            <br />
                            <em>-</em> <strong>Technical Support</strong>: We
                            guarantee a response time of no more than 24 hours
                            for all support inquiries.
                            <br /> <br />
                            <em>Software:</em> <br />
                            <em>-</em> <strong>Maintenance</strong>: We
                            guarantee free software updates for 12 months after
                            deployment to ensure your solution stays current.
                            <br />
                            <em>-</em> <strong>Money-Back</strong>: We offer a
                            30-day money-back guarantee on all our software
                            solutions if they do not meet your business needs.
                            <br />
                            <em>-</em> <strong>Compatability</strong>: We
                            guarantee that our software will be compatible with
                            all the platforms and systems specified in the
                            project requirements.
                            <br /> <br />
                            <em>Repairs:</em> <br />
                            <em>-</em> <strong>Warranty</strong>: All device
                            repairs come with a 90-day warranty. If the issue
                            persists or a new one arises, we'll fix it for free.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;

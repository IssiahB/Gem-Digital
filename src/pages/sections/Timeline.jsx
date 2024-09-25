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
                            package to their tech needs. Giving Idaho an
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
                                Here we have simple yet solid values, they play
                                a key role not only in the way we do business
                                but also how we live our lives.
                            </strong>{" "}
                            <br /> <br />
                            <em>Integrity:</em> We ensure that every job is done
                            the right way
                            <br /> <em>Accountability:</em> Accept
                            responsibility for every action and guarantee every
                            mistake is made right
                            <br /> <em>Curiosity:</em> Always be hungry for
                            knowledge, keeping on top of cutting edge
                            technologies.
                            <br />
                            <em>Fairness:</em> Everyone is held to same standard
                            and our work always has consistant quality
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
                            <strong>Gem Digital Solutions</strong> is a young .{" "}
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
                        <h3 class="time-title">Title 4</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
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
                        <h3 class="time-title">Title 5</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;

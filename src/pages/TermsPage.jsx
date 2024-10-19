import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";

import "./styles/TermsPage.style.css";

function TermsPage() {
    return (
        <>
            <NavBar />
            <div className="legal-container">
                <h1 className="legal-title">Terms and Conditions</h1>
                <div className="divider mb-5"></div>
                <ol className="legal-list">
                    <li className="legal-item">
                        <h2 className="legal-item-title">Introduction</h2>
                        <p>
                            Welcome to the website of Gem Digital Solutions LLC.
                            By accessing and using our website, you agree to be
                            bound by these Terms and Conditions. Please read
                            them carefully. If you do not agree with any part of
                            these terms, you must discontinue use of our website
                            immediately.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Acceptance of Terms
                        </h2>
                        <p>
                            By using our website, you confirm that you accept
                            these Terms and Conditions and agree to comply with
                            them. We may update these terms from time to time,
                            and it is your responsibility to check for updates.
                            Continued use of the website following any changes
                            means you accept and agree to the changes.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            User Responsibilities
                        </h2>
                        <p>When using our website, you agree to:</p>
                        <ul>
                            <li>
                                Provide accurate and truthful information in the
                                contact forms.
                            </li>
                            <li>
                                Not submit any false or harmful data that could
                                compromise the security of the website.
                            </li>
                            <li>
                                Refrain from any illegal activities or misuse of
                                our services.
                            </li>
                            <li>
                                Respect other users and refrain from any
                                offensive or inappropriate behavior.
                            </li>
                        </ul>
                        <p>
                            Violation of these terms may result in termination
                            of your access to the website, without prior notice.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Account Inactivity and Termination
                        </h2>
                        <p>
                            We reserve the right to suspend or terminate user
                            accounts after a period of inactivity exceeding two
                            years. We may also terminate accounts at our
                            discretion if these Terms and Conditions or
                            applicable laws are violated.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Intellectual Property
                        </h2>
                        <p>
                            All content on this website, including text,
                            graphics, logos, and images, is the property of Gem
                            Digital Solutions LLC or our content providers and
                            is protected by copyright laws. You may not
                            reproduce, distribute, or create derivative works
                            from this content without our express written
                            consent.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Third-Party Services
                        </h2>
                        <p>
                            Our website may incorporate third-party services
                            such as Firebase for data storage and other
                            functionalities. By using this website, you
                            acknowledge and agree that we may use these
                            third-party services, and you agree to their
                            respective terms and conditions.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Limitation of Liability
                        </h2>
                        <p>
                            We strive to provide accurate and reliable
                            information on our website, but we make no
                            warranties or representations regarding the
                            accuracy, completeness, or reliability of the
                            content. We shall not be held liable for any
                            damages, including but not limited to, direct,
                            indirect, incidental, or consequential damages
                            arising from your use of or inability to use the
                            website.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">Governing Law</h2>
                        <p>
                            These Terms and Conditions are governed by the laws
                            of the State of Idaho, United States. Any legal
                            actions or disputes arising out of your use of the
                            website will be handled through arbitration in
                            Idaho, as per applicable state laws.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">Dispute Resolution</h2>
                        <p>
                            In the event of any disputes, you agree to resolve
                            the issue through arbitration in Idaho, United
                            States. Arbitration shall be the exclusive method of
                            resolving any claims or disputes related to these
                            Terms and Conditions.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Cookies and Tracking
                        </h2>
                        <p>
                            Our website uses cookies to enhance the user
                            experience. For more information, please refer to
                            our <a href="/privacy-policy">Privacy Policy</a>.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Changes to These Terms
                        </h2>
                        <p>
                            We reserve the right to update or modify these Terms
                            and Conditions at any time. We will notify you of
                            significant changes by updating the effective date
                            at the bottom of this page. Your continued use of
                            the website after such changes constitutes your
                            acceptance of the new Terms.
                        </p>
                    </li>

                    <li className="legal-item">
                        <h2 className="legal-item-title">Contact Us</h2>
                        <p>
                            If you have any questions or concerns regarding
                            these Terms and Conditions, please contact us at:
                            <br />
                            Gem Digital Solutions LLC
                            <br />
                            <a
                                href="mailto:contact@gemdigitalsolutions.org"
                                className="footer-link"
                            >
                                contact@gemdigitalsolutions.org
                            </a>
                            <br />
                            (208) 417-3533
                            <br />
                            <br />
                            <strong>Effective Date:</strong> 10/18/2024
                        </p>
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    );
}

export default TermsPage;

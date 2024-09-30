import NavBar from "../components/NavBar";
import Footer from "./sections/Footer";

import "./styles/PrivacyPage.style.css";

function PrivacyPage() {
    return (
        <>
            <NavBar />
            <div className="legal-container">
                <h1 className="legal-title">Privacy Policy</h1>
                <div className="divider mb-5"></div>
                <ol className="legal-list">
                    <li className="legal-item">
                        <h2 className="legal-item-title">Introduction</h2>
                        <p>
                            We are committed to protecting your privacy. This
                            Privacy Policy explains how we collect, use,
                            disclose, and safeguard your information when you
                            visit our website. By using our services, you agree
                            to the collection and use of information in
                            accordance with this policy.
                        </p>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Information We Collect
                        </h2>
                        <p>
                            We may collect and store the following personal
                            information:
                        </p>
                        <ul>
                            <li>
                                <strong>Names:</strong> When you voluntarily
                                provide your name, we may use it to personalize
                                your experience.
                            </li>
                            <li>
                                <strong>Phone Numbers:</strong> If provided, we
                                may use your phone number to contact you
                                regarding services, updates, or customer
                                support.
                            </li>
                            <li>
                                <strong>Email Addresses:</strong> We collect
                                your email address to send newsletters,
                                promotions, or respond to inquiries.
                            </li>
                            <li>
                                <strong>IP Addresses:</strong> Your IP address
                                may be collected automatically to help us
                                understand how you interact with our website.
                            </li>
                            <li>
                                <strong>User Agents:</strong> Information about
                                your browser type and device (known as User
                                Agents) helps us improve user experience.
                            </li>
                        </ul>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            How We Use Your Information
                        </h2>
                        <p>
                            We use the information collected for various
                            purposes, including:
                        </p>
                        <ul>
                            <li>
                                To personalize your experience on our website.
                            </li>
                            <li>
                                To provide customer support and respond to
                                inquiries.
                            </li>
                            <li>
                                To process your transactions and manage your
                                account.
                            </li>
                            <li>
                                To send promotional materials, newsletters, or
                                updates (only if you have consented).
                            </li>
                            <li>
                                To analyze how you use our website in order to
                                improve our services.
                            </li>
                            <li>
                                To detect and prevent fraud or abuse of our
                                website.
                            </li>
                        </ul>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            How We Share Your Information
                        </h2>
                        <p>
                            We do not share your personal information with third
                            parties except in the following situations:
                        </p>
                        <ul>
                            <li>
                                <strong>Service Providers:</strong> We may share
                                information with trusted third-party service
                                providers who assist us in operating our website
                                or providing services to you.
                            </li>
                            <li>
                                <strong>Legal Compliance:</strong> We may
                                disclose information if required to do so by law
                                or if we believe
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> If our
                                business is sold, merged, or reorganized, your
                                information may be part of the transferred
                                assets.
                            </li>
                        </ul>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Cookies and Tracking Technologies
                        </h2>
                        <p>
                            Our website uses cookies and similar tracking
                            technologies to track the activity on our website
                            and store certain information. Cookies are small
                            data files that are placed on your device. You can
                            instruct your browser to refuse cookies or indicate
                            when a cookie is being sent. However, some parts of
                            the website may not function properly without
                            cookies.
                        </p>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">Data Security</h2>
                        <p>
                            We implement appropriate technical and
                            organizational measures to protect your personal
                            information from unauthorized access, use, or
                            disclosure. However, no method of transmission over
                            the internet or method of electronic storage is 100%
                            secure. While we strive to protect your personal
                            data, we cannot guarantee its absolute security.
                        </p>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">Your Data Rights</h2>
                        <p>
                            Depending on your location, you may have the right
                            to:
                        </p>
                        <ul>
                            <li>
                                Access, correct, or delete your personal
                                information.
                            </li>
                            <li>Restrict the processing of your data.</li>
                            <li>
                                Object to the processing of your personal
                                information.
                            </li>
                            <li>
                                Request data portability (transfer your data to
                                another service provider).
                            </li>
                        </ul>
                        <p>
                            If you would like to exercise any of these rights,
                            please contact us at{" "}
                            <a
                                href="mailto:contact@gemdigitalsolutions.org"
                                className="footer-link"
                            >
                                contact@gemdigitalsolutions.org
                            </a>
                            .
                        </p>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">Retention of Data</h2>
                        <p>
                            We will retain your personal information for as long
                            as necessary to fulfill the purposes outlined in
                            this Privacy Policy unless a longer retention period
                            is required or permitted by law.
                        </p>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">
                            Changes to This Privacy Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time.
                            We will notify you of any changes by posting the new
                            policy on this page with an updated "Effective
                            Date." You are encouraged to review this Privacy
                            Policy periodically.
                        </p>
                    </li>
                    <li className="legal-item">
                        <h2 className="legal-item-title">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this
                            Privacy Policy, please contact us at:
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
                            <strong>Effective Date:</strong> 10/01/2024
                        </p>
                    </li>
                </ol>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPage;

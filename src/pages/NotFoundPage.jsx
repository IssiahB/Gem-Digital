import NavBar from "../components/NavBar";

import "./styles/NotFoundPage.style.css";

function NotFoundPage() {
    return (
        <>
            <NavBar />
            <div className="not-found-container">
                <h1>404 Page Not Found!</h1>
                <p>Woops looks like your on the wrong page.</p>
                <a href="/">Head Home</a>
            </div>
        </>
    );
}

export default NotFoundPage;

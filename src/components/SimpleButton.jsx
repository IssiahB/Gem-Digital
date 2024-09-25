import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles/SimpleButton.style.css";

function SimpleButton({ custClass, href, children }) {
    return (
        <Button
            className={"simple-btn " + custClass}
            variant="none"
            size="lg"
            href={href}
        >
            {children}
        </Button>
    );
}

export default SimpleButton;

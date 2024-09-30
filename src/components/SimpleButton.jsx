import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles/SimpleButton.style.css";

function SimpleButton({ custClass, href, children, ...rest }) {
    return href ? (
        <Button
            className={"simple-btn " + custClass}
            variant="none"
            size="lg"
            href={href}
            {...rest}
        >
            {children}
        </Button>
    ) : (
        <Button
            className={"simple-btn " + custClass}
            variant="none"
            size="lg"
            {...rest}
        >
            {children}
        </Button>
    );
}

export default SimpleButton;

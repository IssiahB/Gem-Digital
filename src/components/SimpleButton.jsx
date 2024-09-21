import { Button } from "react-bootstrap";

function SimpleButton({ ref, children }) {
    return (
        <Button className="simple-btn" variant="primary" size="lg" href={ref}>
            {children}
        </Button>
    );
}

export default SimpleButton;

import { useState } from "react";
import NavBar from "../components/NavBar";

function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <NavBar />
            <h1> This is the home page </h1>
        </div>
    );
}

export default HomePage;

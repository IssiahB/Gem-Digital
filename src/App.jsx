import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
    useEffect(() => {
        Aos.init({
            once: true,
            duration: 1000,
        });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

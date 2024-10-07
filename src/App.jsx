import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";

// Firebase Imports
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Page Imports
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import PrivacyPage from "./pages/PrivacyPage";
import "./App.css";

// Firebase Config
const firebaseConfig = import.meta.env.VITE_API_KEY
    ? {
          apiKey: import.meta.env.VITE_API_KEY,
          authDomain: import.meta.env.VITE_AUTH_DOMAIN,
          projectId: import.meta.env.VITE_PROJECT_ID,
          storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
          messagingSenderId: import.meta.env.VITE_MESSAGING_ID,
          appId: import.meta.env.VITE_APP_ID,
          measurementId: import.meta.env.VITE_MEASUREMENT_ID,
      }
    : null;

function App() {
    // Initialize Firebase
    if (firebaseConfig !== null) {
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
    }

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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/service" element={<ProductsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

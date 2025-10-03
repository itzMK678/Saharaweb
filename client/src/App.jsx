import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// ✅ Lazy-load all pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const DonationForm = lazy(() => import("./components/DonatingForm"));
const Activity = lazy(() => import("./pages/Actitvity")); // ✅ fixed spelling

function App() {
  return (
    <Router>
      <Header />
      {/* ✅ Wrap Routes inside Suspense to show fallback while loading */}
      <Suspense fallback={<div className="text-center py-8">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donate" element={<DonationForm />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage";
import FeedPage from "./pages/FeedPage";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2, // Controls scroll animation duration
        easing: (t) => t * (2 - t), // Ease-out function for natural feel
        smoothWheel: true, // Enables smooth wheel scrolling
        wheelMultiplier: 1.5, // Adjusts scroll sensitivity
      }}
    >
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Layout />}>
              <Route index element={<FeedPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </ReactLenis>
  );
};

export default App;

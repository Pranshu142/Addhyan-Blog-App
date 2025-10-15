import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import FeedPage from "./pages/FeedPage";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/:currentView" element={<Layout />}>
          <Route index element={<FeedPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

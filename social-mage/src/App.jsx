import Home from './components/pages/Home.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TermsOfService from "@/components/pages/TermsOfService.jsx";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy.jsx";
import Navbar from "@/components/navigation/Navbar.jsx";

function App() {
  // return <LandingPage />;
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

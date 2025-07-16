import Home from './components/pages/Home.jsx';
import { HashRouter, Route, Routes} from "react-router-dom";
import TermsOfService from "./components/pages/TermsOfService.jsx";
import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import Navbar from "./components/navigation/Navbar.jsx";

function App() {
  return (
      <HashRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
  );
}

export default App;

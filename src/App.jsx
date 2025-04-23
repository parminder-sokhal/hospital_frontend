import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./app.css";
import Headertop from "./pages/header/headertop.jsx";
import HeaderMain from "./pages/header/headerMain.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/about.jsx";
import Footer from "./pages/footer/footer.jsx";
import Doctors from "./pages/Doctor/meetOurDoctor.jsx";
import TreatmentRoutes from "./pages/home/treatment.jsx"; 
import Media from "./pages/header/media.jsx";
import AllDoctors from "./pages/home/allDoctors.jsx";

function App() {
  return (
    <Router>
      <Headertop />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />

        {TreatmentRoutes}
        {Media}
        {AllDoctors}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

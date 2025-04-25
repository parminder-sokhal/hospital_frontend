import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Headertop from "./pages/header/headertop.jsx";
import HeaderMain from "./pages/header/headerMain.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/about.jsx";
import Footer from "./pages/footer/footer.jsx";
import Doctors from "./pages/Doctor/meetOurDoctor.jsx";
import TreatmentRoutes from "./pages/home/treatment.jsx";
import Media from "./pages/header/media.jsx";

// ✅ NEW: Import the DoctorProfile page
import DoctorProfile from "./components/doctor/doctorprofile.jsx";
import DoctorAppointment from "./pages/Doctor/doctorAppointment.jsx";


function App() {
  return (
    <Router>
      <Headertop />
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />

        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/appointment" element={<DoctorAppointment />} />

        {TreatmentRoutes}
        {Media}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

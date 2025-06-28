import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./App.css";
import Headertop from "./pages/header/headertop.jsx";
import HeaderMain from "./pages/header/headerMain.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/about.jsx";
import Footer from "./pages/footer/footer.jsx";
import Doctors from "./pages/Doctor/meetOurDoctor.jsx";
import TreatmentRoutes from "./pages/home/treatment.jsx";
import Media from "./pages/header/media.jsx";
import DoctorProfile from "./components/doctor/doctorprofile.jsx";
import DoctorAppointment from "./pages/Doctor/doctorAppointment.jsx";
import PrivateRoute from "./components/privateRoute/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/dashboard.jsx";
import WelcomeDashboard from "./pages/dashboard/WelcomeDashboard.jsx";
import SignIn from "./pages/SignIn.jsx";
import AddDoctor from "./components/dashboard/AddDoctor/AddDoctor.jsx";
import GetAllPaymentDetails from "./components/dashboard/payment/GetAllPaymentDetails.jsx";
import GetAllOfflinePayments from "./components/dashboard/payment/GetAllOfflinePayments.jsx";
import AddLinks from "./components/dashboard/Links/AddLinks.jsx";
// import Management from "./pages/management/Management.jsx";

function LayoutWrapper() {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith("/dashboard"); // you can add more paths here

  return (
    <>
      {!hideLayout && <Headertop />}
      {!hideLayout && <HeaderMain />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/management" element={<Management />} /> */}
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/appointment" element={<DoctorAppointment />} />
        <Route path="/signin" element={<SignIn />} />

        {/* Private dashboard route with nested child routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<WelcomeDashboard />} />
            <Route path="AddDoctor" element={<AddDoctor />} />
            <Route path="GetAllPaymentDetails" element={<GetAllPaymentDetails />} />
            <Route path="GetAllOfflinePayments" element={<GetAllOfflinePayments />} />
            <Route path="Links" element={<AddLinks />} />
          </Route>
        </Route>

        {TreatmentRoutes}
        {Media}
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper />
    </Router>
  );
}

export default App;

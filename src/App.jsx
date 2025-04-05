import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./app.css";
import Header from "./pages/header/header";
import HeaderMain from "./pages/header/headerMain.jsx";
import Home from "./pages/home/Home";
import About from "./pages/about/about.jsx";
import Footer from "./pages/footer/footer.jsx";


function App() {
  return (
    <Router>
       <Header/>
          <HeaderMain/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
          <Footer/>
          
       
    </Router>
  );
}

export default App;

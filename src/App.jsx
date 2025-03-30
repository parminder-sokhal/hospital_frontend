import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./app.css";
import Header from "./components/home/header";
import HeaderMain from "./components/home/headerMain.jsx";
import Home from "./pages/home/Home";
import About from "./components/about/about.jsx";


function App() {
  return (
    <Router>
       <Header/>
          <HeaderMain/>
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
          </Routes>
       
    </Router>
  );
}

export default App;

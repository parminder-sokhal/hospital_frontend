import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";


function App() {
  return (
    <Router>
      
          <Routes>
            
            <Route path="/" element={<Home />} />
            
          </Routes>
       
    </Router>
  );
}

export default App;

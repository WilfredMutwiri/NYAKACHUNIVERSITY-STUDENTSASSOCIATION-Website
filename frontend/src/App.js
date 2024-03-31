import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./Home";
import Footer from "./componets/footer";
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

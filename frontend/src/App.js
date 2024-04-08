import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./componets/Navbar";
import Home from "./Home";
import Footer from "./componets/footer";
import About from "./componets/About";
import PatronInstallation from "./componets/PatronInstallation";
import Team from "./componets/Team";
function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/PatronInstallation' element={<PatronInstallation/>}/>
        <Route path='/Team' element={<Team/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;

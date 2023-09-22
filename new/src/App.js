import Wishws from "./components/Wishws";
import Edit from "./components/Edit";
import Login from "./components/Login";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Wishws/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/Edit/:user" element={<Edit/>}></Route>
          
          </Routes>
      </Router>
      
    </>
  );
}

export default App;

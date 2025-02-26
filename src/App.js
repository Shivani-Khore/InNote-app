import "./App.css";
import React, { useState } from 'react';
import NavBar from "./Components/NavBar";
//import About from "./Components/About";
import Home from "./Components/Home"; // Updated import to default export
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

import Alert from "./Components/Alert";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              {" "}
              {/* Changed from Switch to Routes */}
              <Route exact path="/home" element={<Home showAlert={showAlert} />} />{" "}
              {/* Updated Route structure */}
              {/* <Route exact path="/about" element={<About/>} />{" "} */}
              {/* Updated Route structure */}
              <Route exact path="/login" element={<Login showAlert={showAlert}/>} />{" "}
              {/* Corrected Route */}
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />} />{" "}
              {/* Corrected Route */}
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

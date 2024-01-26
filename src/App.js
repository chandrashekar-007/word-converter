import "./App.css";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Conversion from "./components/Conversion";
import About from "./components/About";
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#115d6d";
      showAlert("success", "Dark mode has been enabled on your screen");

      setInterval(() => {
        document.title = "Speedo - Welcome to Speedo";
      }, 1000);
      // clearInterval(timerId)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#42efbd";
      showAlert("danger", "Dark mode has been disabled");
    }
  };
  const toggleSwitch1 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#da8e2f";
      showAlert("success", "Dark mode has been enabled on your screen");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#42efbd";
      showAlert("danger", "Dark mode has been disabled");
    }
  };
  const toggleSwitch2 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#c81c1c";
      showAlert("success", "Dark mode has been enabled on your screen");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#42efbd";
      showAlert("danger", "Dark mode has been disabled");
    }
  };
  const toggleSwitch3 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#bb5d86";
      showAlert("success", "Dark mode has been enabled on your screen");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#42efbd";
      showAlert("danger", "Dark mode has been disabled");
    }
  };
  const toggleSwitch4 = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = " #699f5f";
      showAlert("success", "Dark mode has been enabled on your screen");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#42efbd";
      showAlert("danger", "Dark mode has been disabled");
    }
  };
  
  const showAlert = (type, message) => {
    setAlert({
      mess: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
            mode={mode}
            toggleSwitch1={toggleSwitch1}
            toggleSwitch={toggleSwitch}
            toggleSwitch2={toggleSwitch2}
            toggleSwitch3={toggleSwitch3}
            toggleSwitch4={toggleSwitch4}
            />
        <Alert alert={alert} />

        <Routes>
            <Route path="/" element={<Conversion showAlert={showAlert} mode={mode} />}/>
            <Route path="/about" element={<About />}/>            
            <Route path="/services" element={<Services />}/>            
            <Route path="/contact" element={<Contact />}/>            
        </Routes>
      
      
      </Router>
    
    </>
  );
}

export default App;

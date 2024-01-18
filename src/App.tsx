import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components_class.tsx/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

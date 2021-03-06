import React, {useContext} from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import {useAuthState} from 'react-firebase-hooks/auth';
import { Context } from ".";
import Loader from "./components/Loader/Loader";

const App = () => {
  const {auth} = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if(loading) {
    return <Loader />
  }
  
  return (
    <BrowserRouter className="App">
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;

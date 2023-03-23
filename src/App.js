import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
      /*<>
    <Routes>
      <Route path='/'element={<App/>}/>
    </Routes>
      </>*/
  );
}

export default App;

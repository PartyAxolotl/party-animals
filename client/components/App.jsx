import React, { useState, useEffect } from 'react';
import MapPage from './Pages/MapPage.jsx';
import MainPage from './Pages/MainPage.jsx';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Yoo</h1>
      <Routes>
        <Route path="/" element={<MainPage />}>
        <Route path="/map" element={<MapPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
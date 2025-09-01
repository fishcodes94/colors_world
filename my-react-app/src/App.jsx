import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorPalettes } from './pages/ColorPalettes';
import { HeaderColor } from './components/HeaderColor';
import { ColorPicker } from './components/ColorPicker';


import './App.css'

function App() {


  return (
    <>
  <Router>
    <Routes>

      <Route path="/" element={<ColorPalettes/>}/>
      <Route path="/header" element={<HeaderColor/>}/>
      <Route path ="/colorPicker" element={<ColorPicker/>}/>






    </Routes>
 
       </Router>
    </>
  )
}

export default App

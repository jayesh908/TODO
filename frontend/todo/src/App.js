import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Nave from './components/Nave';
import Home from './pages/Home';
import Form1 from './pages/Form1';
function App() {
  const baseurl = "http://localhost:1020"
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login baseurl={baseurl} />}></Route>
        <Route path='/signup' element={<Signup baseurl={baseurl} />}></Route>
        <Route path='/home' element={<Home />}>
          <Route path='form1' element={<Form1 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

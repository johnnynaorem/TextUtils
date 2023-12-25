import React, { useState } from 'react'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  
  const toggleMode = ()=>{
    if(mode=== 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable", "success")
    }else{
      setMode('dark');
      document.body.style.backgroundColor='rgb(19 19 35)';
      showAlert("Dark mode has been enable", "success")
    }
  }

  return (
    // <>
    //  <Navbar mode ={mode} toggleMode = {toggleMode}/>
    //  <Alert alert={alert}/>
    //  <TextForm mode ={mode}/>
    // </>

    <Router>
      <Navbar mode ={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route exact path="/" element={<TextForm mode={mode}/>} />
        <Route path="/about" element={<About />}/>
     </Routes>
    </Router>
  )
}

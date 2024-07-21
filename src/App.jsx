import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home/index.jsx';
import About from './components/About/index.jsx';
import Contact from './components/Contact/index.jsx';
import Layout from './components/Layout/Layout.jsx';
import Portfolio from './components/PortFolio/Portfolio.jsx';
import Dashboard from './components/DashBoard/dashboard.jsx'
import Contactpart from './components/Contact/Contact.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'

import './App.scss'

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} /> 
           <Route path="about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/contact/contactform" element={<Contactpart />} /> 
           <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
         </Route>
      </Routes>
      
      
    </>
  )
}

export default App;
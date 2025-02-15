// import MagnetLines from '../src/components/reactBits/MagnetLines';
import React from 'react';
import Home from './components/Home';
import Editor from './components/Editor';
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom";
import Nav from './components/Nav';
import AboutPage from './components/AboutPage';

const App = () => {
  return (
      <>
      <Nav/>
      {/* <Home/> */}
        {/* <Editor/> */}
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/editor" element={<Editor />} />

        </Routes>
        
      </>
  );
};

export default App;
